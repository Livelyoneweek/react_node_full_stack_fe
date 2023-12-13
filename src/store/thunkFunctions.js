import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

export const registerUser = createAsyncThunk(
  "user/regierUser",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/users/register`, body);
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/users/login`, body);
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const authUser = createAsyncThunk(
  "user/authUser",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/users/auth`);
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/users/logout`);
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const addToCart = createAsyncThunk(
  "user/addToCart",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/users/cart`, body);
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

// store 에 cartDetail 이라는 객체 값을 추가하는 함수
export const getCartItems = createAsyncThunk(
  "user/getCartItems",
  async ({ cartItemIds, userCart }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `/products/${cartItemIds}?type=array`
      );
      console.log("getCartItems : ", response.data);
      userCart.forEach((cartItem) => {
        response.data.forEach((productDetail, index) => {
          if (cartItem.id === productDetail._id) {
            response.data[index].quantity = cartItem.quantity;
          }
        });
      });

      return response.data;
    } catch (error) {
      console.error(error);
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

// store 에 cartDetail에 아이템 일부 삭제하는 함수
export const removeCartItem = createAsyncThunk(
  "user/removeCartItem",
  async (productId, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(
        `/users/cart?productId=${productId}`
      );
      console.log("getCartItems : ", response.data);

      response.data.cart.forEach((cartItem) => {
        response.data.productInfo.forEach((productDetail, index) => {
          if (cartItem.id === productDetail._id) {
            response.data.productInfo[index].quantity = cartItem.quantity;
          }
        });
      });

      return response.data;
    } catch (error) {
      console.error(error);
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);