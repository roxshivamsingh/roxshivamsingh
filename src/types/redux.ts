export enum ReduxStatusEnum {
    Loading = 'loading',
    Success = 'success',
    Failed = 'failed'
}
export type TReduxStatus = ReduxStatusEnum.Loading | ReduxStatusEnum.Success | ReduxStatusEnum.Failed