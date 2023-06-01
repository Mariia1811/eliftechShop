import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, getProductsById, submitOrder } from './operation';
import { toast } from 'react-toastify';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  foods: null,
  orderFoodsList: [],
  basketId: [],
  isLoading: false,
  error: null,
};

const shopSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    changeBasket(state, { payload }) {
      state.basketId = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        getAllProducts.pending,
        toast('🦄 Hello!', {
          position: 'top-center',
          autoClose: 300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      )
      .addCase(getAllProducts.rejected, handleRejected)
      .addCase(submitOrder.pending, handlePending)
      .addCase(submitOrder.rejected, handleRejected)
      .addCase(getProductsById.pending, handlePending)
      .addCase(getProductsById.rejected, handleRejected)
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.foods = payload;
        state.isLoading = false;
      })
      .addCase(getProductsById.fulfilled, (state, { payload }) => {
        if (!state.orderFoodsList.find(food => food._id === payload._id)) {
          state.orderFoodsList = [...state.orderFoodsList, payload];
        }
        state.isLoading = false;
      })
      .addCase(submitOrder.fulfilled, (state, { payload }) => {
        toast.success('Order Accepted! Please wait for a call', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      });
  },
});
export const { changeBasket } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;
