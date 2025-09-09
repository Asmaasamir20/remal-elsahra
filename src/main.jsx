import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Preload the LCP image early to improve mobile LCP (match HomeCover sources)
import homeCoverUrl from "@/assets/home/homeCover.webp";
import homeCoverAvif from "@/assets/home/homeCover.webp?w=768;1280;1920&format=avif&quality=60&as=srcset&imagetools";
import homeCoverWebp from "@/assets/home/homeCover.webp?w=768;1280;1920&format=webp&quality=70&as=srcset&imagetools";

// إضافة preconnect hints للموارد الخارجية
const addPreconnectHints = () => {
  const preconnects = [
    { href: "https://www.googletagmanager.com", crossorigin: true },
    { href: "https://www.google-analytics.com", crossorigin: true },
    { href: "https://fonts.googleapis.com", crossorigin: true },
    { href: "https://fonts.gstatic.com", crossorigin: true },
  ];

  preconnects.forEach(({ href, crossorigin }) => {
    const existing = document.querySelector(
      `link[rel="preconnect"][href="${href}"]`
    );
    if (!existing) {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      if (crossorigin) link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }
  });
};

// Inject preload for LCP image before React mounts
if (import.meta.env.PROD) {
  try {
    // إضافة preconnect hints أولاً
    addPreconnectHints();

    // إزالة preload للصورة لأنها ستُحمل من خلال img element
    // const imageExists = document.querySelector(
    //   `link[rel="preload"][as="image"][href="${homeCoverUrl}"]`
    // );
    // if (!imageExists) {
    //   const link = document.createElement("link");
    //   link.rel = "preload";
    //   link.as = "image";
    //   link.href = homeCoverUrl;
    //   link.setAttribute("fetchpriority", "high");
    //   link.setAttribute("imagesrcset", `${homeCoverAvif}, ${homeCoverWebp}`);
    //   link.setAttribute("imagesizes", "100vw");
    //   document.head.appendChild(link);
    // }
  } catch {
    // no-op
  }
}

// Preload fonts properly to avoid warnings - تم تعطيله لأن الخطوط محملة في HTML
// const fonts = [
//   "/assets/fonts/Cairo/static/Cairo-Regular.woff2",
//   "/assets/fonts/Amiri/Amiri-Regular.woff2",
// ];

// if (import.meta.env.PROD) {
//   try {
//     fonts.forEach((fontUrl) => {
//       const fontExists = document.querySelector(
//         `link[rel="preload"][as="font"][href="${fontUrl}"]`
//       );
//       if (!fontExists) {
//         const link = document.createElement("link");
//         link.rel = "preload";
//         link.as = "font";
//         link.href = fontUrl;
//         link.type = "font/woff2";
//         link.crossOrigin = "anonymous";
//         document.head.appendChild(link);
//       }
//     });
//   } catch {
//     // no-op
//   }
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
