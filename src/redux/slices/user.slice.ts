import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ReduxStatusEnum, TReduxStatus } from '../../types/redux';
import { IUser } from '../../types/auth';

type TUser = {
    user: IUser,
    isAuthenticated: boolean
}
const INIT_USER: TUser = { user: { email: '', id: '' }, isAuthenticated: false }
interface IAuthSlice {
    value: TUser;
    status: TReduxStatus;
    error: null | string | undefined;
}

const initialState: IAuthSlice = {
    value: INIT_USER,
    status: ReduxStatusEnum.Loading,
    error: null,
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.status = ReduxStatusEnum.Success;
            state.value.user = action.payload;
        },
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.status = ReduxStatusEnum.Success;
            state.value.isAuthenticated = action.payload;
        },
    },
});

export const { setUser, setIsAuthenticated } = AuthSlice.actions;

const AuthReducer = AuthSlice.reducer;
export default AuthReducer
