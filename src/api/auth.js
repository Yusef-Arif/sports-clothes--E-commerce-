import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk("auth/login", async (data, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
        const res = await axios.post("https://api.escuelajs.co/api/v1/auth/login", data);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});