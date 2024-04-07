import { useAppSelector } from "../redux"

export function useUserData() {

    const users = useAppSelector((state) => state.auth)

    return ({
        loading: users === undefined,
        user: users
    })

}