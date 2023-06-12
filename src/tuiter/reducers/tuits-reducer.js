import { createSlice } from "@reduxjs/toolkit";
// import tuits from './tuits.json';
import {updateTuitThunk,deleteTuitThunk,findTuitsThunk,createTuitThunk} from "../services/tuits-thunks";
const initialState = {
   tuits: [],
   loading: false
}


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkyNqoUXEsHGPFf_-sNr1x3REpxQk92E0XhSljYNLVg&s",
   };

   
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState,
 extraReducers: {
   [updateTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
    state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
  },
   [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
    },
   [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuits = state.tuits.filter(t => t._id !== payload)
    },
  [findTuitsThunk.pending]:
     (state) => {
        state.loading = true
        state.tuits = [] },
  [findTuitsThunk.fulfilled]:
     (state, { payload }) => {
        state.loading = false
        state.tuits = payload },
  [findTuitsThunk.rejected]:
     (state, action) => {
        state.loading = false
        state.error = action.error
  }
},

 reducers: {
    deleteTuit(state, action) {
        const index = state.tuits
           .findIndex(tuit =>
              tuit._id === action.payload);
        state.tuits.splice(index, 1);
      },   
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    }
  }
 
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;