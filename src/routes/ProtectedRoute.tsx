import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../hooks/redux";

const ProtectedRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
