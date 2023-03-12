import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./components/contact/Contact";
import { ErrorPage } from "./components/error-page";
import { Gigs } from "./components/gigs/Gigs";
import { Home } from "./components/Home";
import { PageTemplate } from "./components/page-template/page-template";

const routes = [
  {
    path: "/",
    element: <PageTemplate />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "gigs",
        element: <Gigs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
