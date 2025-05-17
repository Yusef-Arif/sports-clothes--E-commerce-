import Cookies from "js-cookie";
import api from "../api/api";
import { store } from "../store/store";
import { refreshAccessToken } from "../api/auth";
import { logout } from "../store/auth/authSlice";

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const result = await store.dispatch(refreshAccessToken());
      if (refreshAccessToken.fulfilled.match(result)) {
        const newToken = Cookies.get("accessToken");
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return api(originalRequest); // Retry
      } else {
        store.dispatch(logout());
      }
    }

    return Promise.reject(error);
  }
);
