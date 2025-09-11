import { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GTMProvider from "@/components/GTMProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Provide a single Helmet context across the app for consistent SEO rendering */}
    <HelmetProvider>
      <GTMProvider>
        <App />
      </GTMProvider>
    </HelmetProvider>
  </StrictMode>
);
