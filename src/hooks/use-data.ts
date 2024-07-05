import { useAppSelector } from "../redux"

export function useUserData() {

    const users = useAppSelector((state) => state.Auth)

    return ({
        loading: users === undefined,
        user: users
    })

}
