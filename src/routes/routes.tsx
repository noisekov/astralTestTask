import { createBrowserRouter } from "react-router";
import Cards from "../pages/cards";
import Index from "../pages";
import Login from "../pages/login";
import Profile from "../pages/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
