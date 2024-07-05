import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IContentItem } from "../../types/content";
import { ReduxStatusEnum, TReduxStatus } from '../../types/redux';

interface IContentSlice {
    value: IContentItem[];
    status: TReduxStatus;
    error: null | string | undefined;
}

const initialState: IContentSlice = {
    value: [],
    status: ReduxStatusEnum.Loading,
    error: null,
};

const AuthSlice = createSlice({
    name: 'Contents',
    initialState,
    reducers: {
        setContents: (state, action: PayloadAction<IContentItem[]>) => {
            state.status = ReduxStatusEnum.Success;
            state.value = action.payload;
        },
    },
});

export const { setContents } = AuthSlice.actions;

const AuthReducer = AuthSlice.reducer;
export default AuthReducer;
