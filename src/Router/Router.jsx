import { createBrowserRouter } from "react-router";
import Root from "../Root";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
