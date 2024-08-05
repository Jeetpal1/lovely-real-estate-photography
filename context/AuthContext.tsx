// context/AuthContext.tsx
"use client";

import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { auth } from "../firebase/config";
import { userState } from "../state/atoms";
import { User } from "../types";

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const setUser = useSetRecoilState(userState);
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData: User = {
          uid: user.uid,
          email: user.email || "",
          displayName: user.displayName || "",
          photoURL: user.photoURL || "",
          phoneNumber: user.phoneNumber || "",
        };
        setUserState(userData);
        setUser(userData);
      } else {
        setUserState(null);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
