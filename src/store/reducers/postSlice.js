import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postSlice = createSlice({
  name: "postList",
  initialState: {
    posts: [],
    postData: {},
    status: "idle",
    error: null,
    filter: null,
  },
  reducers: {
    getPostList: (state, action) => {
      state.postList = action.payload;
      return state;
    },
    getPost: (state, action) => {
      state.postData = action.payload;
      return state;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchpostData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchpostData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.postData = action.payload;
      });
  },
});

export default postSlice;

export const postSliceReducer = postSlice.reducer;

export const { getPostList, getPost, setErrorMsg } =
  postSlice.actions;

export const fetchPosts = createAsyncThunk(
  "posts/fetchposts",
  async () => {
    try {
      const { data } = await axios.get(
        "https://octopus-house.herokuapp.com/api/posts"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchpostData = createAsyncThunk(
  "/posts/fetchpostData",
  async (id) => {
    try {
      const { data } = await axios.get(
        `https://octopus-house.herokuapp.com/api/posts/${id}`
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);