// features/auth/services/authApi.ts
import axiosInstance from '@/shared/lib/axiosInstance';
import type { LoginFormData } from '@/shared/types/authTypes';

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

export interface ApiError {
  message: string;
  statusCode: number;
}

export const authApi = {
  // Login user
  login: async (credentials: LoginFormData): Promise<LoginResponse> => {
    try {
      const response = await axiosInstance.post<LoginResponse>('/auth/login', credentials);
      return response.data;
      
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  // Get current user profile
  getProfile: async (): Promise<LoginResponse['user']> => {
    try {
      const response = await axiosInstance.get<LoginResponse['user']>('/auth/profile');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch profile');
    }
  },

  // Logout user
  logout: async (): Promise<void> => {
    try {
      await axiosInstance.post('/auth/logout');
    } catch (error: any) {
      // Even if logout API fails, we still clear local storage
      console.error('Logout API error:', error);
    } finally {
      localStorage.removeItem('authToken');
    }
  },
};