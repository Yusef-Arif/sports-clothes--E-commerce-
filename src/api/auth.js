import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import api from "./api";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/login", credentials);
      Cookies.set("accessToken", res.data.access_token);
      Cookies.set("refreshToken", res.data.refresh_token);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("accessToken");
      const res = await api.get("/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(res.data);
      return res.data;
      
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch profile"
      );
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  "auth/refreshAccessToken",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/refresh-token", {
        refreshToken: Cookies.get("refreshToken"),
      });
      Cookies.set("accessToken", res.data.access_token);
      Cookies.set("refreshToken", res.data.refresh_token);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Token refresh failed"
      );
    }
  }
);