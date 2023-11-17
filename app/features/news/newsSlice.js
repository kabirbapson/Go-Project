import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

// Define the GraphQL query
const GET_POSTS = gql`
  {
    posts {
      nodes {
        id
        date
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: 'https://rariya.com.ng/graphql',
  cache: new InMemoryCache(),
});

// Define an async thunk to fetch data using Apollo Client
export const fetchPosts = createAsyncThunk('news/fetchPosts', async () => {
  try {
    const {data} = await client.query({
      query: GET_POSTS,
    });
    return data.posts.nodes;
  } catch (error) {
    throw error;
  }
});

// Define the news slice
export const newsSlice = createSlice({
  name: 'news',
  initialState: {posts: [], loading: false},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, state => {
        state.loading = false;
      });
  },
});

export default newsSlice.reducer;
