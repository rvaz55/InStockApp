import { auth } from './firebase';
//This file contains all the authentication functions

//Sign-Up Func
export const doCreateUserWithEmailAndPassword = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

//Sign-In Func
export const doSignInWithEmailAndPassword = (email, password) =>{
    auth.signInWithEmailAndPassword(email, password);
  };

//Sign-Out Func
//Arguments don't need to be passed into this func
//The 'auth' object automatically knows who is currently authenticated
export const doSignOut = () => auth.signOut();

//Password-Reset Func
export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

//Change-Password Func
export const doPasswordUpdate = (password) => auth.currentUser.updatePassword(password);

