"use client"

// REACT 
import { createContext, useState, useEffect } from "react";
// FIREBASE
import firebase from "firebase/app";
import { auth } from "@/firebase/client-config";

type AuthContextType = {
  authedUser: firebase.User | null;
  setAuthedUser: React.Dispatch<React.SetStateAction<firebase.User | null>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  // STATE
  const [authedUser, setAuthedUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthedUser(user);
      } else {
        setAuthedUser(null);
      }
    })

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ authedUser, setAuthedUser }}>
      {children}
    </AuthContext.Provider>
  )
}