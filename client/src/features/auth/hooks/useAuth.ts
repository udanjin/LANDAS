// features/auth/hooks/useAuth.ts
import { useAuthStore } from '../stores/authStore';

export const useAuth = () => {
  const { isAuthenticated, user, isLoading, login, logout, checkAuth } = useAuthStore();
  
  return {
    isAuthenticated,
    user,
    isLoading,
    login,
    logout,
    checkAuth,
  };
};