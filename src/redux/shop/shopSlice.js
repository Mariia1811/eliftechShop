import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

 const shopSlice = createSlice({
    name: "shop",
  initialState: initialState,
  reducers: {
    // setStatusFilter(state, action) {
    //   state.status = action.payload
    //     },
    },
    extraReducers:{},
});

//export const {  setStatusFilter} = shopSlice.actions;
export const shopReducer = shopSlice.reducer;