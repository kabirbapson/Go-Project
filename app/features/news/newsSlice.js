import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as api from '../../api/news/api.news';
import axios from 'axios';

export const fetchNewsPost = createAsyncThunk(
  'news/fetchNewsPost',
  async () => {
    const response = await axios.get(
      'https://21de-197-210-71-48.ngrok-free.app/news',
    );
    // console.log(response.data);
    // if (!response) {
    //   return [];
    // }
    return response.data.slice(0, 10);
  },
);

export const newsSlice = createSlice({
  name: 'news',
  initialState: {post: [], loading: false},
  extraReducers: {
    [fetchNewsPost.pending]: state => {
      state.loading = true;
    },
    [fetchNewsPost.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.loading = false;
    },
    [fetchNewsPost.rejected]: state => {
      state.loading = false;
    },
  },
});

export default newsSlice.reducer;
