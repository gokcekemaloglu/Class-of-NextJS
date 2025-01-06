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

  //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
  const createKullanici = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName,
      });
      toastSuccessNotify("Register success");
      router.push("/login");

    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap
  //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Login success");
      router.push("/profile");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Google ile girişi enable yap
  //* => Authentication => settings => Authorized domains => add domain
  //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
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

  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  const userTakip = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
        //   console.log(user);
          const {email, displayName, photoURL} = user
          setCurrentUser({email, displayName, photoURL })
          sessionStorage.setItem(
            "user",
            JSON.stringify({ email, displayName, photoURL })
          );
          // refresh yapınca current gidiyor, gitmesin diye,private olmasa problem olmaz da. firebase kaydediyor ama bizde de kalıcı olsun
        } else {
          setCurrentUser(false)
          sessionStorage.clear();
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
