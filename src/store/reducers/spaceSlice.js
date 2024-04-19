import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

console.log('inside spaces slice')

const spaceSlice = createSlice({
    name: "spaceList",
    initialState: {
        spaces: [],
        status: "idle",
        error: null,
        filter: null,
    },
    reducers: {
        getSpaceList: (state, action) => {
            state.spaceList = action.payload;
            return state;
        },
        setErrorMsg: (state, action) => {
            state.errorMsg = action.payload;
            return state;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchSpaces.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchSpaces.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.spaces = action.payload;
            });
    },
});

export default spaceSlice;

export const spaceSliceReducer = spaceSlice.reducer;

export const { getSpaceList, setErrorMsg } =
    spaceSlice.actions;

//async thunk for fetching all space data
export const fetchSpaces = createAsyncThunk(
    "spaces/fetchSpaces",
    async () => {
        try {
            const { data } = await axios.get(
                "https://octopus-house.herokuapp.com/api/spaces"
            );
            return data;
        } catch (e) {
            console.error("Error fetching spaces:", e);
        }
    }
);