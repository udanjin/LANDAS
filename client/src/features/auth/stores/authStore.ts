// features/auth/stores/authStore.ts
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { AuthState, User, LoginFormData } from "@/shared/types/authTypes";
import { authApi } from "@/features/auth/services/authApi";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: null,
      token: null, // ✅ tambahin default value
      isLoading: false,

      login: async (credentials: LoginFormData) => {
        set({ isLoading: true });
        try {
          const response = await authApi.login(credentials);

          // Simpan token ke localStorage
          localStorage.setItem("token", response.token);

          set({
            isAuthenticated: true,
            user: response.user,
            token: response.token, // ✅ simpan ke store juga
            isLoading: false,
          });
        } catch (error: any) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: async () => {
        set({ isLoading: true });
        try {
          await authApi.logout();
        } catch (error) {
          console.error("Logout error:", error);
        } finally {
          set({
            isAuthenticated: false,
            user: null,
            token: null, // ✅ reset juga
            isLoading: false,
          });
          localStorage.removeItem("token");
        }
      },

      checkAuth: async () => {
        const token = localStorage.getItem("token");
        if (token) {
          set({ isAuthenticated: true, token });
        } else {
          set({ isAuthenticated: false, token: null, user: null });
        }

        set({ isLoading: true });
        try {
          const user = await authApi.getProfile();
          set({
            isAuthenticated: true,
            user,
            token, // ✅ simpan lagi kalau ada
            isLoading: false,
          });
        } catch (error: any) {
          set({
            isAuthenticated: false,
            user: null,
            token: null,
            isLoading: false,
          });
          localStorage.removeItem("token");
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        token: state.token, // ✅ supaya token ikut kepersist
      }),
    }
  )
);
