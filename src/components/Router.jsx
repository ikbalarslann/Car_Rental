import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import User from "./user/User";
import SignIn from "./user/SignIn";
import Register from "./user/Register";
import Pages from "./pages/Pages";
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import Testimonials from "./pages/Testimonials";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
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
      element: <Pages />,
      children: [
        { path: "about", element: <About /> },
        { path: "vehicles", element: <Vehicles /> },
        { path: "testimonials", element: <Testimonials /> },
        { path: "ourTeam", element: <OurTeam /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
