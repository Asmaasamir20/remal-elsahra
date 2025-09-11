// Lightweight GTM utilities for initializing and basic pageview tracking
// This avoids bringing extra deps and allows delayed/deferred loading.

/**
 * Initialize Google Tag Manager by injecting the GTM script tag once.
 * Uses container: GTM-W9MZMH9B
 */
export function initializeGTM() {
  if (typeof window === "undefined") return;
  if (window.__gtmInitialized) return;

  const gtmId = "GTM-W9MZMH9B";

  // Ensure dataLayer exists
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  // Insert GTM script if not present
  const existing = document.querySelector(
    `script[src^="https://www.googletagmanager.com/gtm.js?id=${gtmId}"]`
  );
  if (!existing) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }

  // Add noscript iframe for progressive enhancement (optional; many SPAs skip it)
  const hasNoscript = document.querySelector(
    `noscript[data-gtm-id="${gtmId}"]`
  );
  if (!hasNoscript) {
    const noscript = document.createElement("noscript");
    noscript.setAttribute("data-gtm-id", gtmId);
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(noscript);
  }

  window.__gtmInitialized = true;
}

/**
 * Push a pageview event to the dataLayer.
 */
export function trackPageView(pathname, title) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page_path: pathname || window.location.pathname,
    page_title: title || document.title,
  });
}

/**
 * Check GTM status to know if it looks initialized.
 */
export function checkGTMStatus() {
  const isInitialized = Boolean(
    typeof window !== "undefined" &&
      window.__gtmInitialized &&
      document.querySelector("script[src*=googletagmanager.com/gtm.js]")
  );
  return { isInitialized };
}

