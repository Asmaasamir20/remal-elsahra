import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Preload the LCP image early to improve mobile LCP
import homeCoverUrl from "@/assets/home/homeCover.webp";

// Inject preload for LCP image before React mounts
try {
  const imageExists = document.querySelector(
    `link[rel="preload"][as="image"][href="${homeCoverUrl}"]`
  );
  if (!imageExists) {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = homeCoverUrl;
    link.fetchPriority = "high";
    document.head.appendChild(link);
  }
} catch {
  // no-op
}

// Preload fonts properly to avoid warnings
const fonts = [
  "/assets/fonts/Cairo/static/Cairo-Regular.woff2",
  "/assets/fonts/Amiri/Amiri-Regular.woff2",
];

try {
  fonts.forEach((fontUrl) => {
    const fontExists = document.querySelector(
      `link[rel="preload"][as="font"][href="${fontUrl}"]`
    );
    if (!fontExists) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "font";
      link.href = fontUrl;
      link.type = "font/woff2";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }
  });
} catch {
  // no-op
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
