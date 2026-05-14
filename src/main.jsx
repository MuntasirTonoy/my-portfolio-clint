import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./Router/Router";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdminProvider } from "./Pages/Admin/AdminContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AdminProvider>
        <RouterProvider router={router} />
      </AdminProvider>
    </QueryClientProvider>
  </StrictMode>
);
