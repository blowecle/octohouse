import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios');

const artifactSlice = createSlice({
    name: 'artifactList',
    initialState: {
        artifacts: [],
        artifactData: {},
        status: 'idle',
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
        extraReducers(builder) {
            builder
                .addCase(fetchArtifacts.pending, (state, action) => {
                    state.status = 'loading';
                })
                .addCase(fetchArtifacts.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.artifacts = action.payload;
                })
        }
    }
});

export default artifactSlice.reducer;

export const {
    getArtifactList,
    getArtifact,
    setErrorMsg,
} = artifactSlice.actions;

export const fetchArtifacts = createAsyncThunk('artifacts/fetchArtifacts', async () => {
	try {
		const { data } = await axios.get('/api/artifacts');
		return data;
	} catch (e) {
		console.log(e);
	}
});

export const fetchArtifactData = createAsyncThunk('/artifacts/fetchArtifactData', async (id) => {
    try {
        const { data } = await axios.get(`/api/artifacts/${id}`);
        return data;
    } catch (e) {
        console.log(e);
    }
})