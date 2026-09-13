import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../hooks/redux";

const GuestRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
