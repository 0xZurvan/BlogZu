import { create } from "zustand";
import { auth, provider } from "../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import Cookies from "universal-cookie";

interface Account {
  user: typeof auth;
  loggedIn: boolean;
  signIn: () => void;
  signOutAccount: () => void;
}

export const cookies = new Cookies();

export const useUserStore = create<Account>()((set, get) => ({
  // State
  user: auth,
  loggedIn: false,

  // Actions
  signIn: async () => {
    try {
      await signInWithPopup(get().user, provider);
      cookies.set("user-token", get().user?.currentUser);

      set((state) => ({
        loggedIn: true,
      }));
    } catch (error) {
      console.error(error);
    }
  },
  signOutAccount: async () => {
    try {
      await signOut(auth);
      cookies.remove("user-token");

      set((state) => ({
        loggedIn: false,
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));
