import {createSlice} from '@reduxjs/toolkit';

const initialState={
    post:[{
        id:1,
        title:'formation',
        description: 'formation react'
    }
    ],
    auth: false,
    user:{
        email:'',password:'',age:18,firsName:'',lastName:'',gendre:''
    }
}

// post=[ ...post,{title:'fdacx'}]


export const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{
        addPost:(state,action)=> {
            state.post=[...state.post,action.payload]
        },
        changeAuth:(state,action)=> {
            state.auth=action.payload

        },
        signup:(state,action)=> {
            state.user={...state.user,...action.payload};
            state.auth=true
        }
    }
})


export const {addPost,changeAuth,signup}=postSlice.actions
export default postSlice.reducer
