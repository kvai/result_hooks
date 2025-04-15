import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../customHooks/useAuthContext";

export const PrivateRoute = () => {
  const loaction = useLocation();
  const { user } = useAuthContext();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: loaction.pathname }} />
  );
};
