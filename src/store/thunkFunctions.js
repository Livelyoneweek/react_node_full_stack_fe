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
            if(error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
)