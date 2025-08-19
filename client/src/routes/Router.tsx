import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/Homepage";
import ProtectedRoute from "@/shared/utils/ProtectedRoutes";
import { useAuthStore } from "@/features/auth/stores/authStore";

const Router: React.FC = () => {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      {/* Rute baru untuk halaman dashboard setelah login */}
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default Router;
