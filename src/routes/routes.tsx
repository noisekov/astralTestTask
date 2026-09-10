import { createBrowserRouter } from "react-router";
import Cards from "../pages/cards";
import Index from "../pages";
import Login from "../pages/login";
import Profile from "../pages/profile";
import Page from "../components/Page/Page";

export const router = createBrowserRouter([
  {
    element: <Page />,
    children: [
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
    ],
    },
]);
