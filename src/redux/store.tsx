import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from "./slices/user.slice";

export const store = configureStore({
    reducer: {
        auth: AuthReducer.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // thunk: {},
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
