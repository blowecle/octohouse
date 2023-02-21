import artifactReducer from './reducers/artifactSlice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import loggerMiddleware from "redux-logger";
import { artifactSliceReducer } from './reducers/artifactSlice';

export default configureStore({
    reducer: {
        artifact: artifactSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
})