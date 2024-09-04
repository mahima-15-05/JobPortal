import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
        // actions will come here 
        setLoading:(state, action)=>{
            state.loading = action.payload
            
        },
        setUser:(state, action)=>{
            state.user= action.payload
        }
    }
})
export default authSlice.reducer;
export const {setLoading, setUser}= authSlice.actions;