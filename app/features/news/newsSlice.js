import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as api from '../../api/news/api.news';
import axios from 'axios';

// export const fetchNewsPost = createAsyncThunk(
//   'news/fetchNewsPost',
//   async () => {
//     const response = await api.getNewsPost();
//     if (!response.ok) {
//       return [];
//     }
//     return response.data;
//   },
// );

export const fetchPost = createAsyncThunk('news/fetchPost', async () => {
  try {
    const response = await axios.get('http://localhost:3001/gombe_state_news');
    return response.data;
  } catch (error) {
    // You can log the error for debugging purposes
    console.error('Error fetching data:', error);
    throw error;
  }
});

// export const fetchPost = createAsyncThunk('news/fetchPost', async () => {
//   const response = await axios.get(
//     'http://localhost:3001/api/v1/gombe_state_news',
//   );

//   console.log(response);
// });
export const newsSlice = createSlice({
  name: 'news',
  initialState: {post: [], loading: false},
  extraReducers: {
    [fetchPost.pending]: state => {
      state.loading = true;
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.loading = false;
    },
    [fetchPost.rejected]: state => {
      state.loading = false;
    },
  },
});

export default newsSlice.reducer;
