import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../molecules/InputField";
import PasswordField from "../molecules/PasswordField";
import BasicCheckbox from "../atoms/BasicCheckbox";
import BasicButton from "../atoms/BasicButton";
import axiosInstance from "@/shared/lib/axiosInstance";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useAuthStore } from "../../stores/authStore";

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // State untuk error dari API
  const [apiError, setApiError] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  // State untuk melacak interaksi pengguna
  const [touched, setTouched] = useState({
    username: false,
    password: false,
  });

  // State untuk error validasi per input
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleBlur = (field: "username" | "password") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  useEffect(() => {
    if (touched.username && username.length === 0) {
      setErrors((prev) => ({
        ...prev,
        username: "아이디를 입력하지 않았습니다.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, username: "" }));
    }

    if (touched.password && password.length === 0) {
      setErrors((prev) => ({
        ...prev,
        password: "비밀번호를 입력하지 않았습니다.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }

    const isUsernameValid = username.length >= 4;
    const isPasswordValid = password.length >= 8;
    setIsFormValid(isUsernameValid && isPasswordValid);
  }, [username, password, touched]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    setApiError(null);

    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      });
      console.log("Login berhasil:", response.data);

      // ✅ simpan token kalau ada
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
      }
       useAuthStore.setState({
        isAuthenticated: true,
        user: response.data.user ?? null,
        token: response.data.token ?? null,
        isLoading: false,
      });

      // ✅ redirect ke home
      navigate("/home");
    } catch (err) {
      console.error("Login gagal:", err);
      setApiError("아이디 또는 비밀번호가 일치하지 않습니다.");
    } finally {
      setIsLoading(false);
    }
  };

 return (
    <div 
        className="min-h-screen flex items-center justify-center p-4 font-sans"
        style={{ background: 'radial-gradient(circle at top, rgba(253, 224, 71, 0.35), transparent 70%)' }}
    >
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-12 text-center">
            <h1 className="text-4xl font-bold text-yellow-500 tracking-widest mb-10">LANDAS</h1>
            <form onSubmit={handleSubmit} className="w-full space-y-6">
                <InputField
                    id="username"
                    label="아이디"
                    placeholder="아이디를 입력해주세요"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={() => handleBlur("username")}
                    disabled={isLoading}
                    error={errors.username}
                />
                <PasswordField
                    id="password"
                    label="비밀번호"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur("password")}
                    disabled={isLoading}
                    error={errors.password}
                />

                {apiError && (
                    <p className="text-sm text-red-600 text-center">{apiError}</p>
                )}

                <div className="flex items-center justify-between mt-2">
                    <BasicCheckbox id="save-id" label="아이디 저장" />
                    <div className="text-sm">
                        <a href="#" className="font-medium text-gray-600 hover:text-gray-900">
                            아이디찾기
                        </a>
                        <span className="mx-2 text-gray-300">|</span>
                        <a href="#" className="font-medium text-gray-600 hover:text-gray-900">
                            비밀번호 찾기
                        </a>
                    </div>
                </div>

                <div className="space-y-3 pt-4">
                    <BasicButton
                        type="submit"
                        fullWidth
                        size="lg"
                        variant={isFormValid ? "active" : "primary"}
                        disabled={!isFormValid || isLoading}
                    >
                        {isLoading ? "Memproses..." : "로그인"}
                    </BasicButton>
                    <BasicButton type="button" fullWidth size="lg" variant="outline">
                        회원가입
                    </BasicButton>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LoginForm;
