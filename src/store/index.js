import artifactReducer from './reducers/artifactSlice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import loggerMiddleware from "redux-logger";

export default configureStore({
    reducer: {
        artifact: artifactReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
})