"use client";

import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/auth/firebase";
import { useRouter } from "next/navigation";

// auth(yetki) işlemlerini yaptığımız context
export const YetkiContext = createContext();

//* custom hook
export const useAuthContext = () => {
  return useContext(YetkiContext);
};

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState("")

  const router = useRouter();

  useEffect(()=> {
    userTakip()
  }, [])

  const createKullanici = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
      });
      toastSuccessNotify("Register success");
      router.push("/login");

    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Login success");
      router.push("/profile");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        router.push("/profile")
        toastSuccessNotify("GoogleLogin success")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    signOut(auth)
    toastSuccessNotify("logout success")
  }

  const userTakip = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
        //   console.log(user);
          const {email, displayName, photoURL} = user
          setCurrentUser({email, displayName, photoURL })
        } else {
          setCurrentUser(false)
        }
      });
  }


  return (
    <YetkiContext.Provider value={{ createKullanici, signIn, signInGoogle, currentUser, logOut }}>
      {" "}
      {children}{" "}
    </YetkiContext.Provider>
  );
};
export default AuthContextProvider;
