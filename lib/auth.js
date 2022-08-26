import React, { useState, useEffect, useContext, createContext } from 'react';
import { app } from './firebase.config.js';
import { createUser } from './firestore.js';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  getAdditionalUserInfo,
} from 'firebase/auth';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

export const authenticate = getAuth(app);

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoURL: user.photoURL,
  };
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser, result) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      const details = getAdditionalUserInfo(result);
      if (details.isNewUser) createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  //Fucntion sign in with google
  const signinWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      handleUser(result.user, result);
    });
  };

  //Function sign out
  const signout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser(false);
    });
  };

  return {
    user,
    signinWithGoogle,
    signout,
  };
}
