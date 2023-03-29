import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./components/contact/Contact";
import { ErrorPage } from "./components/error-page";
import { Gigs } from "./components/gigs/Gigs";
import { Home } from "./components/Home";
import Gallery from "./components/ImagePage/Gallery";
import { Images } from "./components/ImagePage/images";
import { PageTemplate } from "./components/page-template/page-template";
import { images } from "./data/images";
import Bild from "./assets/bbaf.jpeg";
import Bild1 from "./assets/image3.jpeg";
import Bild2 from "./assets/image3.jpg";

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
        element: (
          <Gallery
            images={[Bild1, Bild1, Bild1, Bild1, Bild1, Bild1, Bild1, Bild1]}
          />
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
