import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxStatusEnum, TReduxStatus, ViewportEnum } from '../../types';

interface IUtilSlice {
    value: { viewport: ViewportEnum };
    status: TReduxStatus;
    error: null | string | undefined;
}

const initialState: IUtilSlice = {
    value: { viewport: ViewportEnum.None },
    status: ReduxStatusEnum.Loading,
    error: null,
};

const UtilSlice = createSlice({
    name: 'Util',
    initialState,
    reducers: {
        setUtils: (state, action: PayloadAction<{ viewport: ViewportEnum }>) => {
            state.status = ReduxStatusEnum.Success;
            state.value = action.payload;
        },
        setUtilViewPort: (state, action: PayloadAction<ViewportEnum>) => {
            state.status = ReduxStatusEnum.Success;
            state.value.viewport = action.payload;
        },
    },
});

export const { setUtils, setUtilViewPort } = UtilSlice.actions;

const UtilReducer = UtilSlice.reducer;
export default UtilReducer;
