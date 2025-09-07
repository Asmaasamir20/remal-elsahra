import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  HomePage,
  ProjectsPage,
  ContactPage,
  ServicesPage,
  ClientsPage,
  EquipmentPage,
} from "../../pages";
import MasterLayout from "@/Layout/MasterLayout";
import ServiceDetails from "@/pages/components/Services/ServiceDetails";
import NotFoundPage from "../../shared/NotFoundPage";

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
      <Route path="*" element={<NotFoundPage/>} />
    </Route>
  )
);

export default router;
