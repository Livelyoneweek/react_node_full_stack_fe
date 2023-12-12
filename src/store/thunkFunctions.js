import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

export const registerUser = createAsyncThunk(
    "user/regierUser",
    async(body,thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                `/users/register`,
                body
            )
            return response.data;
        } catch(error) {
            console.error(error);
            if(error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
)

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async(body,thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                `/users/login`,
                body
            )
            return response.data;
        } catch(error) {
            console.error(error);
            if(error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
)

export const authUser = createAsyncThunk(
    "user/authUser",
    async(_,thunkAPI) => {
        try {
            const response = await axiosInstance.get(
                `/users/auth`
            )
            return response.data;
        } catch(error) {
            console.error(error);
            if(error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
)

export const logoutUser = createAsyncThunk(
    "user/logoutUser",
    async(_,thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                `/users/logout`
            )
            return response.data;
        } catch(error) {
            console.error(error);
            if(error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
)

export const addToCart = createAsyncThunk(
    "user/addToCart",
    async(body,thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                `/users/cart`,
                body
            )
            return response.data;
        } catch(error) {
            console.error(error);
            if(error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
)

export const getCartItems = createAsyncThunk(
    "user/getCartItems",
    async({cartItemIds, userCart},thunkAPI) => {
        try {
            const response = await axiosInstance.get(`/products/${cartItemIds}?type=array`);
            console.log("tt ",response.data);
            userCart.forEach(cartItem => {
                response.data.forEach((productDetail, index) => {
                    if(cartItem.id === productDetail._id) {
                        response.data[index].quantity = cartItem.quantity;
                    }
                })
            })

            return response.data;
        } catch(error) {
            console.error(error);
            if(error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
)