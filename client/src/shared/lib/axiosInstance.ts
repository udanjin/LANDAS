import axios from "axios";

// Konfigurasi dasar untuk instance Axios
// Anda bisa menambahkan base URL, header, dll. di sini
const axiosInstance = axios.create({
  baseURL: "https://codetester-be.vercel.app/api/", // Ganti dengan URL API Anda
  timeout: 10000, // Waktu tunggu permintaan (ms)
  headers: {
    "Content-Type": "application/json",
  },
});

// Anda juga bisa menambahkan interceptor di sini jika diperlukan
// Contoh: Menambahkan token otentikasi ke setiap permintaan
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
