import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: '1', name: "Ahmed Farooq", },
    { id: '2', name: "Faheela Israr", },
    { id: '3', name: "Ali Saif", },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer