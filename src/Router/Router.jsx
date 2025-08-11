import { createBrowserRouter } from "react-router";
import Root from "../Root";
import ErrorPage from "../Pages/ErrorPage";
import ProjectDetails from "../Pages/ProjectDetails";
import Home from "../Pages/Home";
import AllProjects from "../Pages/AllProjects";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "project/:id",
        element: <ProjectDetails />,
      },
      {
        path: "projects",
        element: <AllProjects />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);
export default router;
