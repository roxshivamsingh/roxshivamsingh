import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuth } from "../../types/auth";
import { ReduxStatusEnum, TReduxStatus } from '../../types/redux';

interface IAuthSlice {
    value: IAuth[] | undefined;
    status: TReduxStatus;
    error: null | string | undefined;
}

const initialState: IAuthSlice = {
    value: undefined,
    status: ReduxStatusEnum.Loading,
    error: null,
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<IAuth[]>) => {
            state.status = ReduxStatusEnum.Success;
            state.value = action.payload;
        },
    },
});

export const { setAuth } = AuthSlice.actions;

export default AuthSlice;
