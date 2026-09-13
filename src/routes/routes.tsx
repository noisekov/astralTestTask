import { createBrowserRouter } from "react-router";
import Index from "../pages/Index/Index";
import Login from "../pages/Login/Login";
import Page from "../components/Page/Page";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profle/profile";
import Cards from "../pages/Cards/Cards";
import GuestRoute from "./GuestRoute";

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
          element: <GuestRoute />,
          children: [{ path: "/login", element: <Login /> }],
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "/profile",
              element: <Profile />,
            },
            {
              path: "/cards",
              element: <Cards />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  // {
  //   basename: "/astralTestTask",
  // },
);
