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
            console.log(error);
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
            console.log(error);
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
            console.log(error);
            if(error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
)