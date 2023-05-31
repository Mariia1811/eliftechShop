import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const shopSlice = createSlice({
  name: 'shop',
  initialState: initialState,

  extraReducers: {},
});

export const shopReducer = shopSlice.reducer;
