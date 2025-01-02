"use client"

import { toastSuccessNotify } from "@/helpers/ToastNotify"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { createContext, useContext } from "react"
import { auth } from "@/auth/firebase";

// auth(yetki) işlemlerini yaptığımız context
export const YetkiContext = createContext()

//* custom hook
export const useAuthContext = () => {
    return useContext(YetkiContext)
}

const AuthContextProvider = ({children}) => {

    const createKullanici = async (email, password, displayName) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            // toastSuccessNotify("")
        } catch (error) {
            
        }
    }

    return <YetkiContext.Provider value={{createKullanici}}> {children} </YetkiContext.Provider>
}
export default AuthContextProvider
