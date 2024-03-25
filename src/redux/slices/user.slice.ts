import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuth } from "../../types/auth";

interface IAuthSlice {
    value: IAuth[] | undefined;
    status: 'loading' | 'success' | 'failed';
    error: null | string | undefined;
}

const initialState: IAuthSlice = {
    value: undefined,
    status: 'loading',
    error: null,
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<IAuth[]>) => {
            state.status = 'success';
            state.value = action.payload;
        },
    },
});

export const { setAuth } = AuthSlice.actions;

export default AuthSlice;
