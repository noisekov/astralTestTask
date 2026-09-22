import { createBrowserRouter } from "react-router";
import Page from "../components/Page/Page";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

export const router = createBrowserRouter(
  [
    {
      element: <Page />,
      children: [
        {
          path: "/",
          lazy: async () => {
            const { default: Index } = await import("../pages/Index");

            return {
              Component: Index,
            };
          },
        },
        {
          element: <GuestRoute />,
          children: [
            {
              path: "/login",
              lazy: async () => {
                const { default: Login } = await import("../pages/Login/Login");

                return {
                  Component: Login,
                };
              },
            },
          ],
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "/profile",
              lazy: async () => {
                const { default: Profile } =
                  await import("../pages/Profile/Profile");

                return {
                  Component: Profile,
                };
              },
            },
            {
              path: "/cards",
              lazy: async () => {
                const { default: Cards } = await import("../pages/Cards/Cards");

                return {
                  Component: Cards,
                };
              },
            },
          ],
        },
        {
          path: "*",
          lazy: async () => {
            const { default: NotFound } =
              await import("../pages/NotFound/NotFound");

            return {
              Component: NotFound,
            };
          },
        },
      ],
    },
  ],
  // {
  //   basename: "/astralTestTask",
  // },
);
