// import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import StatusWiseTasks from "./pages/StatusWiseTasks";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import { ThemeContextProvider } from "./providers/ThemeContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "status-wise-tasks",
    element: <StatusWiseTasks />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </MantineProvider>
);
