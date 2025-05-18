import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (API = "https://api.escuelajs.co/api/v1/products", ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const res = await axios.get(API);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
// for getting single product
export const getProductByID = createAsyncThunk(
  "products/getSingleProduct",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
// for deleting single product
export const deleteProduct = createAsyncThunk(
  "products/delteProduct",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`);
      return { id };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
// for updating products
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (data, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const res = await axios.put(
        `https://api.escuelajs.co/api/v1/products/${data.id}`,data
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
//for create new product
export const createNewProduct = createAsyncThunk(
  "products/createNewProduct",
  async (data, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/products",
        data
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);
// for getting all the categories
export const getAllCategories = createAsyncThunk(
  "Categories/getAllCategories",
  async (_, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

export const getFilterProducts = createAsyncThunk(
  "products/getFilterProducts",
  async (query, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products/?${query}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);