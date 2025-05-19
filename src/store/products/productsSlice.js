import { createSlice } from "@reduxjs/toolkit";
import {
  createNewProduct,
  deleteProduct,
  getAllCategories,
  getAllProducts,
  getFilterProducts,
  getProductByID,
  searchedProducts,
  updateProduct,
} from "../../api/products";

const initialState = {
  products: [],
  currentProducts: [],
  filterProducts:[],
  categories: [],
  product: {},
  search:[],
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentProducts = action.payload;
        state.products = action.payload;
      })
      .addCase(getFilterProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filterProducts = action.payload;
      })
      .addCase(searchedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.search = action.payload;
      })
      .addCase(getProductByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.currentProducts = state.currentProducts.filter(
          (product) => product.id !== action.payload.id
        );
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        state.filterProducts = state.filterProducts.filter(
          (product) => product.id !== action.payload.id
        );
        state.isLoading = false;
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = [...state.products, action.payload];
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.error = action.error.message;
          state.isLoading = false;
        }
      );
  },
});

export default productsSlice.reducer;
