import { createSlice } from "@reduxjs/toolkit"
import { registerUser } from "./thunkFunctions";
import { toast } from "react-toastify";

const initialState = {
    useData: {
        id: '',
        email: '',
        name: '',
        role: 0,
        image: '',
    },
    isAuth: false,
    isLoading: false,
    error: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled,(state) => {
                state.isLoading = false;
                toast.info('회원 가입 성공');
            })
            .addCase(registerUser.rejected,(state,action) => {
                state.isLoading = false;
                state.error = action.payload;
                toast.error(action.payload);
            })
    } 
})

export default userSlice.reducer;