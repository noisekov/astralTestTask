import { createBrowserRouter } from "react-router";
import Cards from "../pages/cards";
import Index from "../pages/Index/Index";
import Login from "../pages/Login/Login";
import Profile from "../pages/profile";
import Page from "../components/Page/Page";

export const router = createBrowserRouter(
  [
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
  ],
  // {
  //   basename: "/astralTestTask",
  // },
);
