import { createBrowserRouter } from "react-router";
import Cards from "../pages/cards";
import Index from "../pages/Index/Index";
import Login from "../pages/Login/Login";
import Profile from "../pages/profile";
import Page from "../components/Page/Page";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter(
  [
    {
      element: <Page />,
      children: [
        {
          path: "/",
          element: <Index />,
        },
        { path: "/login", element: <Login /> },
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
