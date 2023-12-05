// import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import StatusWiseTasks from "./components/StatusWiseTasks";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "status-wise-tasks",
    element: <StatusWiseTasks />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);
