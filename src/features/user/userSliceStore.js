import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSliceStore = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSliceStore.actions;
export default userSliceStore.reducer;
