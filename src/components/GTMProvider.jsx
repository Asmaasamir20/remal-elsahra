import { useEffect, useRef } from "react";
import { initializeGTM, trackPageView, checkGTMStatus } from "@/lib/gtm";
import {
  initPerformanceTracking,
  trackUserInteraction,
  trackFormInteraction,
  trackContentView,
  trackError,
  cleanupTracking,
} from "@/lib/analytics/tracking";

function GTMProvider({ children }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const isDevelopment = import.meta.env.DEV;

    // تخطي التهيئة في التطوير ما لم يتم تفعيلها صراحة
    if (isDevelopment && !import.meta.env.VITE_ENABLE_GTM_DEV) {
      console.log(
        "GTM disabled in development. Set VITE_ENABLE_GTM_DEV=true to enable."
      );
      return;
    }

    let gtmLoaded = false;
    const loadGTM = () => {
      if (gtmLoaded) return;
      gtmLoaded = true;
      try {
        initializeGTM();
      } catch (error) {
        console.warn("GTM initialization failed:", error);
        return;
      }
      window.removeEventListener("scroll", loadGTM);
      window.removeEventListener("click", loadGTM);
      window.removeEventListener("keydown", loadGTM);
      window.removeEventListener("touchstart", loadGTM);
      window.removeEventListener("mousemove", loadGTM);
    };

    // تأجيل تحميل GTM حتى أول تفاعل أو بعد onload
    window.addEventListener("scroll", loadGTM, { once: true, passive: true });
    window.addEventListener("click", loadGTM, { once: true, passive: true });
    window.addEventListener("keydown", loadGTM, { once: true, passive: true });
    window.addEventListener("touchstart", loadGTM, {
      once: true,
      passive: true,
    });
    window.addEventListener("mousemove", loadGTM, {
      once: true,
      passive: true,
    });
    window.addEventListener("load", () => setTimeout(loadGTM, 1200), {
      once: true,
    });

    try {
      initPerformanceTracking();
    } catch (error) {
      console.warn("Performance tracking initialization failed:", error);
    }

    const setupGlobalTracking = () => {
      try {
        document.addEventListener("click", (e) => {
          try {
            const target = e.target.closest('button, a, [role="button"]');
            if (target) {
              trackUserInteraction(target, "click", target.textContent?.trim());
            }
          } catch (err) {
            if (import.meta.env.DEV) console.debug(err);
          }
        });

        document.addEventListener("submit", (e) => {
          try {
            if (e.target.tagName === "FORM") {
              trackFormInteraction(e.target, "submit", e.target.id || "form");
            }
          } catch (err) {
            if (import.meta.env.DEV) console.debug(err);
          }
        });

        document.addEventListener(
          "focus",
          (e) => {
            try {
              if (
                e.target.tagName === "INPUT" ||
                e.target.tagName === "TEXTAREA" ||
                e.target.tagName === "SELECT"
              ) {
                trackFormInteraction(
                  e.target.form,
                  "field_focus",
                  e.target.name || "field"
                );
              }
            } catch (err) {
              if (import.meta.env.DEV) console.debug(err);
            }
          },
          true
        );

        if ("IntersectionObserver" in window) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                try {
                  if (entry.isIntersecting) {
                    const element = entry.target;
                    if (element.dataset.trackContent) {
                      trackContentView(
                        {
                          id: element.id,
                          title: element.dataset.contentTitle,
                          url: element.dataset.contentUrl,
                        },
                        element.dataset.contentType
                      );
                    }
                  }
                } catch (err) {
                  if (import.meta.env.DEV) console.debug(err);
                }
              });
            },
            { threshold: 0.5 }
          );

          document
            .querySelectorAll("[data-track-content]")
            .forEach((element) => {
              observer.observe(element);
            });
        }

        if (!isDevelopment || import.meta.env.VITE_ENABLE_ERROR_TRACKING) {
          window.addEventListener("error", (e) => {
            try {
              trackError(e.error || new Error(e.message), "runtime_error");
            } catch (err) {
              if (import.meta.env.DEV) console.debug(err);
            }
          });

          window.addEventListener("unhandledrejection", (e) => {
            try {
              trackError(e.reason, "promise_error");
            } catch (err) {
              if (import.meta.env.DEV) console.debug(err);
            }
          });
        }
      } catch (error) {
        console.warn("Failed to setup global tracking:", error);
      }
    };

    setTimeout(setupGlobalTracking, 1000);

    if (!isDevelopment) {
      const verifyGTM = () => {
        try {
          const status = checkGTMStatus();
          if (!status.isInitialized) {
            setTimeout(() => {
              initializeGTM();
            }, 2000);
          }
        } catch (error) {
          console.warn("GTM status verification failed:", error);
        }
      };
      setTimeout(verifyGTM, 1000);
    }

    const handleRouteChange = () => {
      try {
        trackPageView(window.location.pathname, document.title);
      } catch (err) {
        if (import.meta.env.DEV) console.debug(err);
      }
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      try {
        cleanupTracking();
      } catch (err) {
        if (import.meta.env.DEV) console.debug(err);
      }
    };
  }, []);

  return children;
}

export default GTMProvider;
