import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Preload the LCP image early to improve mobile LCP (match HomeCover sources)
import homeCoverUrl from "@/assets/home/homeCover.webp";
import homeCoverAvif from "@/assets/home/homeCover.webp?w=768;1280;1920&format=avif&quality=60&as=srcset&imagetools";
import homeCoverWebp from "@/assets/home/homeCover.webp?w=768;1280;1920&format=webp&quality=70&as=srcset&imagetools";

// Inject preload for LCP image before React mounts
if (import.meta.env.PROD) {
  try {
    const imageExists = document.querySelector(
      `link[rel="preload"][as="image"][href="${homeCoverUrl}"]`
    );
    if (!imageExists) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = homeCoverUrl;
      link.setAttribute("fetchpriority", "high");
      link.setAttribute("imagesrcset", `${homeCoverAvif}, ${homeCoverWebp}`);
      link.setAttribute("imagesizes", "100vw");
      document.head.appendChild(link);
    }
  } catch {
    // no-op
  }
}

// Preload fonts properly to avoid warnings
const fonts = [
  "/assets/fonts/Cairo/static/Cairo-Regular.woff2",
  "/assets/fonts/Amiri/Amiri-Regular.woff2",
];

if (import.meta.env.PROD) {
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
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
