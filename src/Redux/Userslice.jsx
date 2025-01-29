import {createSlice} from '@reduxjs/toolkit'

const user=createSlice({
    name:"userData",
    initialState:{
        userInfo:null
    },
    reducers:{
        addtoUser:(state,action)=>{
            state.userInfo=action.payload
        },
        removeData:(state,action)=>{
            state.userInfo=null
        }
    }
})

export const {addtoUser,removeData} =user.actions
export default user.reducer
