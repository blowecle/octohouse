import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const artifactSlice = createSlice({
  name: "artifactList",
  initialState: {
    artifacts: [],
    artifactData: {},
    status: "idle",
    error: null,
    filter: null,
  },
  reducers: {
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

export const { getArtifactList, getArtifact, setErrorMsg } =
  artifactSlice.actions;

export const fetchArtifacts = createAsyncThunk(
  "artifacts/fetchArtifacts",
  async () => {
    try {
      const { data } = await axios.get(
        "https://octopus-house.herokuapp.com/api"
      );
      console.log("DATA: ", { data });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchArtifactData = createAsyncThunk(
  "/artifacts/fetchArtifactData",
  async (id) => {
    try {
      const { data } = await axios.get(
        `https://octopus-house.herokuapp.com/api/artifacts/${id}`
      );
      console.log("DATA: ", { data });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

