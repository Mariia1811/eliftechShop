import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://shopfoodsukraine.onrender.com';

export const getAllProducts = createAsyncThunk(
  'shops/getAllProducts',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get('api/foods');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductsById = createAsyncThunk(
  'shops/getProductsById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`api/foods/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const submitOrder = createAsyncThunk(
  'shops/submitOrder',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('api/orders', credentials);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
