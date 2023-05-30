import { configureStore } from '@reduxjs/toolkit';
import { artifactSliceReducer } from './reducers/artifactSlice';
import { artistSliceReducer } from './reducers/artistSlice';
import { postSliceReducer } from './reducers/postSlice';
import { storySliceReducer } from './reducers/storySlice';
import { artifactArtistSliceReducer } from './reducers/artifactArtistSlice';

export default configureStore({
    reducer: {
        artifact: artifactSliceReducer,
        artist: artistSliceReducer,
        post: postSliceReducer,
        story: storySliceReducer,
        artifactArtist: artifactArtistSliceReducer,
    }
})