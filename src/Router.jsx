import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import User from "./pages/user/User";
import SignIn from "./pages/user/SignIn";
import Register from "./pages/user/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import Testimonials from "./pages/Testimonials";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Default from "./layouts/Default";
import PagesDefault from "./layouts/PagesDefault";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Default />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "user/",
          element: <User />,
          children: [
            { path: "signIn", element: <SignIn /> },
            { path: "register", element: <Register /> },
          ],
        },
        {
          path: "pages/",
          element: <PagesDefault />,
          children: [
            { path: "about", element: <About /> },
            { path: "vehicles", element: <Vehicles /> },
            { path: "testimonials", element: <Testimonials /> },
            { path: "ourTeam", element: <OurTeam /> },
            { path: "contact", element: <Contact /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
