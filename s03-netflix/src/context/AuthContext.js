"use client"

import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useContext } from "react"
import { auth } from "@/auth/firebase";
import { useRouter } from "next/navigation";

// auth(yetki) işlemlerini yaptığımız context
export const YetkiContext = createContext()

//* custom hook
export const useAuthContext = () => {
    return useContext(YetkiContext)
}

const AuthContextProvider = ({children}) => {
    const router = useRouter()

    const createKullanici = async (email, password, displayName) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            toastSuccessNotify("Register success")
            router.push("/login")
        } catch (error) {
            toastErrorNotify(error.message)
        }
    }

    const signIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toastSuccessNotify("Login success")
            router.push("/profile")
        } catch (error) {
            toastErrorNotify(error.message)
        }
    }

    return <YetkiContext.Provider value={{createKullanici, signIn}}> {children} </YetkiContext.Provider>
}
export default AuthContextProvider
