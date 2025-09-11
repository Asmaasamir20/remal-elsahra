// Generic analytics helpers used by the GTMProvider to track performance and UX events.

/**
 * Initialize performance tracking by reporting core web vitals-compatible metrics
 * into the dataLayer for consumption by GTM/GA4.
 */
export function initPerformanceTracking() {
  if (typeof window === "undefined") return;
  try {
    // CLS/LCP/FID via PerformanceObserver when available
    if ("PerformanceObserver" in window) {
      const push = (name, value, id) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "web_vital", name, value, id });
      };

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const last = entries[entries.length - 1];
          if (last) push("LCP", last.startTime, last.id);
        });
        lcpObserver.observe({
          type: "largest-contentful-paint",
          buffered: true,
        });
      } catch {}

      // Cumulative Layout Shift
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) clsValue += entry.value;
          }
          push("CLS", clsValue, "cls");
        });
        clsObserver.observe({ type: "layout-shift", buffered: true });
      } catch {}

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((entryList) => {
          const [entry] = entryList.getEntries();
          if (entry)
            push("FID", entry.processingStart - entry.startTime, entry.id);
        });
        fidObserver.observe({ type: "first-input", buffered: true });
      } catch {}
    }
  } catch {
    // no-op
  }
}

/**
 * Track user interaction such as button/link clicks.
 */
export function trackUserInteraction(target, action, label) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "user_interaction",
      action,
      label,
      tag: target?.tagName,
      id: target?.id,
      classes: target?.className,
    });
  } catch {}
}

/**
 * Track form interactions such as submit or field focus.
 */
export function trackFormInteraction(form, action, fieldName) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_interaction",
      action,
      form_id: form?.id,
      form_name: form?.getAttribute?.("name"),
      field: fieldName,
    });
  } catch {}
}

/**
 * Track content views using IntersectionObserver marked by data-track-content attribute.
 */
export function trackContentView(metadata, contentType) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "content_view",
      content_type: contentType,
      ...metadata,
    });
  } catch {}
}

/**
 * Track and report runtime and promise errors.
 */
export function trackError(error, type) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "js_error",
      error_type: type,
      message: error?.message || String(error),
      stack: error?.stack,
    });
  } catch {}
}

/**
 * Cleanup any observers/timeouts if needed on unmount.
 */
export function cleanupTracking() {
  // currently stateless
}

