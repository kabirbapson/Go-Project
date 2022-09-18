import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as api from '../../api/news/api.news';

export const fetchNewsPost = createAsyncThunk(
  'news/fetchNewsPost',
  async () => {
    const response = await api.getNewsPost();
    if (!response.ok) {
      return [];
    }
    return response.data;
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


