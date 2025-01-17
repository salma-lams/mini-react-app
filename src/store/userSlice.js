import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    changeColor: (state, action) => {
      if (state.user) {
        state.user.couleur = action.payload;
      }
    },
  },
});

export const { login, logout, changeColor } = userSlice.actions;

export default userSlice.reducer;
