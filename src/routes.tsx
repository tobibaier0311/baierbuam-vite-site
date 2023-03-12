import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./components/contact/Contact";
import { ErrorPage } from "./components/error-page";
import { Gigs } from "./components/gigs/Gigs";
import { Home } from "./components/Home";
import { Images } from "./components/ImagePage/images";
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
      {
        path: "images",
        element: <Images />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
