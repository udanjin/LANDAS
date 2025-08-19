import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/features/auth/stores/authStore";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return <div>Loading...</div>; // bisa ganti spinner
  }

  // kalau belum login → lempar ke "/"
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
