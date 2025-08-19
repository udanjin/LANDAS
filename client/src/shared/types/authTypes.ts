// features/auth/types/authTypes.ts
export interface LoginFormData {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  login: (credentials: LoginFormData) => Promise<void>;
  token: string | null;   
  logout: () => void;
  checkAuth: () => Promise<void>;
}
