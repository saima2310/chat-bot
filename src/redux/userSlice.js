// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const { name, age } = action.payload;
      state.push({ name, age });
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
