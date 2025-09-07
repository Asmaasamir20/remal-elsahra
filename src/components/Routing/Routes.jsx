import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy } from "react";
import MasterLayout from "@/Layout/MasterLayout";
import ServiceDetails from "@/pages/components/Services/ServiceDetails";
import NotFoundPage from "../../shared/NotFoundPage";

// Route-level code splitting: defer non-home routes to reduce initial JS
const HomePage = lazy(() => import("@/pages/HomePage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const ClientsPage = lazy(() => import("@/pages/ClientsPage"));
const EquipmentPage = lazy(() => import("@/pages/EquipmentPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MasterLayout />}>
      <Route index element={<HomePage />} />

      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/equipment" element={<EquipmentPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/service/:title" element={<ServiceDetails />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
