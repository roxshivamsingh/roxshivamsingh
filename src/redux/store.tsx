import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer, ContentReducer } from "./slices";

export const store = configureStore({
    reducer: {
        Auth: AuthReducer,
        Contents: ContentReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // thunk: {},
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
