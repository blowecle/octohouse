import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const artistSlice = createSlice({
  name: "artistList",
  initialState: {
    artists: [],
    artistData: {},
    status: "idle",
    error: null,
    filter: null,
  },
  reducers: {
    getArtistList: (state, action) => {
      state.artistList = action.payload;
      return state;
    },
    getArtist: (state, action) => {
      state.artistData = action.payload;
      return state;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArtists.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArtists.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artists = action.payload;
      })
      .addCase(fetchArtistData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArtistData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artistData = action.payload;
      });
  },
});

export default artistSlice;

export const artistSliceReducer = artistSlice.reducer;

export const { getArtistList, getArtist, setErrorMsg } =
  artistSlice.actions;

export const fetchArtists = createAsyncThunk(
  "artists/fetchArtists",
  async () => {
    try {
      const { data } = await axios.get(
        "https://octopus-house.herokuapp.com/api/artists"
      );
      console.log("DATA: ", { data });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchArtistData = createAsyncThunk(
  "/artists/fetchArtistData",
  async (id) => {
    try {
      const { data } = await axios.get(
        `https://octopus-house.herokuapp.com/api/artists/${id}`
      );
      console.log("DATA: ", { data });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);