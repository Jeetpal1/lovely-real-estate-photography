// /services/userService.ts
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

// Function to sign in a user
export const signInUser = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

// Function to sign out a user
export const signOutUser = async () => {
  await signOut(auth);
};
