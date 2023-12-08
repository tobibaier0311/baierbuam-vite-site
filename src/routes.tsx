import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./components/contact/Contact";
import { ErrorPage } from "./components/error-page";
import { Gigs } from "./components/gigs/Gigs";
import { Home } from "./components/Home";
import Gallery from "./components/ImagePage/Gallery";
import { PageTemplate } from "./components/page-template/page-template";
import Bild4 from "./assets/img-2.jpg";
import Bild5 from "./assets/img-3.jpg";
import Bild6 from "./assets/img-4.jpg";
import Bild7 from "./assets/img-5.jpg";
import Bild8 from "./assets/img-6.jpg";
import Bild9 from "./assets/img-7.jpg";
import Bild10 from "./assets/img-8.jpg";
import Bild11 from "./assets/img-9.jpg";
import Bild12 from "./assets/img-10.jpg";
import Bild13 from "./assets/img-11.jpg";
import Bild14 from "./assets/img-12.jpg";
import { DSGVO } from "./components/dsgvo/dsgvo";

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
        path: "dsgvo",
        element: <DSGVO />,
      },
      {
        path: "images",
        element: (
          <Gallery
            images={[
              Bild4,
              Bild5,
              Bild6,
              Bild7,
              Bild8,
              Bild9,
              Bild10,
              Bild11,
              Bild12,
              Bild13,
              Bild14,
            ]}
          />
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRoutes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
