import { createSlice } from "@reduxjs/toolkit"

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
    extraReducers: () => {} 
})

export default userSlice.reducer;