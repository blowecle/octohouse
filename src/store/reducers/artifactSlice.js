import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const artifactSlice = createSlice({
  name: "artifactList",
  initialState: {
    isInitialDataLoaded: false,
    artifacts: [],
    artifactData: [],
    status: "idle",
    error: null,
    filter: null,
  },
  reducers: {
    setInitialDataLoaded: (state, action) => {
      state.isInitialDataLoaded = action.payload;
      return state;
    },
    getArtifactList: (state, action) => {
      state.artifactList = action.payload;
      return state;
    },
    getArtifact: (state, action) => {
      state.artifactData = action.payload;
      return state;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArtifacts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArtifacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artifacts = action.payload;
      })
      .addCase(fetchArtifactData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArtifactData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artifactData = action.payload;
      });
  },
});

export default artifactSlice;

export const artifactSliceReducer = artifactSlice.reducer;

export const { getArtifactList, getArtifact, setInitialDataLoaded, setErrorMsg } =
  artifactSlice.actions;

//async thunk for fetching all artifact data
export const fetchArtifacts = createAsyncThunk(
  "artifacts/fetchArtifacts",
  async () => {
    try {
      const { data } = await axios.get(
        "https://octopus-house.herokuapp.com/api"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

//async thunk for fetching single artifact data
export const fetchArtifactData = createAsyncThunk(
  "/artifacts/fetchArtifactData",
  async (id) => {
    try {
      const { data } = await axios.get(
        `https://octopus-house.herokuapp.com/api/artifacts/${id}`
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

