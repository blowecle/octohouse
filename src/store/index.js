import { configureStore } from '@reduxjs/toolkit';
import { artifactSliceReducer } from './reducers/artifactSlice';
import { artistSliceReducer } from './reducers/artistSlice';
import { postSliceReducer } from './reducers/postSlice';
import { storySliceReducer } from './reducers/storySlice';
import { artifactArtistSliceReducer } from './reducers/artifactArtistSlice';
import { spaceSliceReducer } from './reducers/spaceSlice';

export default configureStore({
    reducer: {
        artifact: artifactSliceReducer,
        artist: artistSliceReducer,
        post: postSliceReducer,
        story: storySliceReducer,
        artifactArtist: artifactArtistSliceReducer,
        spaces: spaceSliceReducer,
    }
})