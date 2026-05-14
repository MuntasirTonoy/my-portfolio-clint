import { createBrowserRouter } from "react-router";
import Root from "../Root";
import ErrorPage from "../Pages/ErrorPage";
import ProjectDetails from "../Pages/ProjectDetails";
import Home from "../Pages/Home";
import AllProjects from "../Pages/AllProjects";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";

// Admin imports
import AdminLogin from "../Pages/Admin/AdminLogin";
import AdminLayout from "../Pages/Admin/AdminLayout";
import AdminDashboardHome from "../Pages/Admin/AdminDashboardHome";
import HeroEditor from "../Pages/Admin/HeroEditor";
import AboutEditor from "../Pages/Admin/AboutEditor";
import SkillsEditor from "../Pages/Admin/SkillsEditor";
import ServicesEditor from "../Pages/Admin/ServicesEditor";
import ProjectsEditor from "../Pages/Admin/ProjectsEditor";
import ContactEditor from "../Pages/Admin/ContactEditor";
import IntroductionEditor from "../Pages/Admin/IntroductionEditor";
import SettingsEditor from "../Pages/Admin/SettingsEditor";
import ReviewsManager from "../Pages/Admin/ReviewsManager";
import { AdminProvider } from "../Pages/Admin/AdminContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Home /> },
      { path: "project/:id", element: <ProjectDetails /> },
      { path: "projects", element: <AllProjects /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },

  // ── Admin routes ──────────────────────────────────────────────────────────
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <AdminProvider>
        <AdminLayout />
      </AdminProvider>
    ),
    children: [
      { index: true, element: <AdminDashboardHome /> },
      { path: "hero", element: <HeroEditor /> },
      { path: "intro", element: <IntroductionEditor /> },
      { path: "about", element: <AboutEditor /> },
      { path: "skills", element: <SkillsEditor /> },
      { path: "services", element: <ServicesEditor /> },
      { path: "projects", element: <ProjectsEditor /> },
      { path: "contact", element: <ContactEditor /> },
      { path: "settings", element: <SettingsEditor /> },
      { path: "reviews", element: <ReviewsManager /> },
    ],
  },
]);

export default router;
