import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const artifactArtistSlice = createSlice({
  name: "artifactArtist",
  initialState: {
    artifactArtist: [],
    status: "idle",
    error: null,
    filter: null,
  },
  reducers: {
    getArtifactArtist: (state, action) => {
      state.artifactArtist = action.payload;
      return state;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArtifactArtist.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArtifactArtist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artifactArtist = action.payload;
      })
  },
});

export default artifactArtistSlice;

export const artifactArtistSliceReducer = artifactArtistSlice.reducer;

export const { getArtifactArtist, setErrorMsg } =
  artifactArtistSlice.actions;

//async thunk for fetching the cross-reference table
export const fetchArtifactArtist = createAsyncThunk(
  "artifactArtist/fetchArtifactArtist",
  async () => {
    try {
      const { data } = await axios.get(
        "https://octopus-house.herokuapp.com/api/ArtifactArtist"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);