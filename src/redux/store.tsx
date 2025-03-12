import { configureStore } from '@reduxjs/toolkit'
// =======================================================================
import { AuthReducer, ContentReducer, UtilReducer } from './slices'

export const store = configureStore({
    reducer: {
        Auth: AuthReducer,
        Contents: ContentReducer,
        Util: UtilReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // thunk: {},
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
