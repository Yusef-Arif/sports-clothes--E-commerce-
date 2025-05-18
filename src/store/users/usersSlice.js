import { createSlice } from "@reduxjs/toolkit";
import {
  checkEmailAvailability,
  createNewUser,
  getAllUsers,
  getUserByID,
} from "../../api/users";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    currentUser: {},
    isLoading: false,
    error: null,
    isAvailable: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUserByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(checkEmailAvailability.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAvailable = action.payload;
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
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default userSlice.reducer;