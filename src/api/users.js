import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllUsers = createAsyncThunk("users/getAllUsers",async (api, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
        const res = await axios.get(api);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});

export const getUserByID = createAsyncThunk("users/getSingleUser",async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
        const res = await axios.get(`https://api.escuelajs.co/api/v1/users/${id}`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});