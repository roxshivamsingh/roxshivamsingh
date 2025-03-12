import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAppDispatch, useAppSelector } from '../redux'
import { auth } from '../config'
import { setIsAuthenticated } from '../redux/slices/user.slice'
// import { setAuth } from "../redux/slices/user.slice"
// import { useState } from "react"
export function useUserData() {
    const users = useAppSelector((state) => state.Auth)
    return {
        loading: users === undefined,
        user: users,
    }
}
// type TUser = {
//     email: string,
//     isAuthenticated: boolean
// }
// const INIT_USER: TUser = { email: '', isAuthenticated: false }

const msg = 'Please configure valid auth credentials'
const data = {
    email: import.meta.env.VITE_APP_FORM_EMAIL_USERNAME,
    password: import.meta.env.VITE_APP_FORM_EMAIL_PASSWORD,
}
export function useAuthStateChanged() {
    const dispatch = useAppDispatch()
    if (data.email?.length && data.password?.length) {
        signInWithEmailAndPassword(auth, data.email, data.password).then(() => {
            dispatch(setIsAuthenticated(true))
        })
    } else {
        console.log(msg)
    }
    // auth.onAuthStateChanged((user) => {
    //     if (user) {
    //         console.log(user);
    //     }
    // })
    // }
}
