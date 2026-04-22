import { Navigate, Outlet } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";

export default function ProtectedRoute() {
  const profile = useAppStore((state) => state.profile);

  if (!profile) {
    return <Navigate to="/onboarding" replace />;
  }

  return <Outlet />;
}