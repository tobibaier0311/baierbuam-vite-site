import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./components/contact/Contact";
import { Gigs } from "./components/gigs/Gigs";
import { Home } from "./components/home/Home";
import { PageTemplate } from "./components/page-template/page-template";

const routes = [
  {
    path: "/",
    element: <PageTemplate />,
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
      }
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
