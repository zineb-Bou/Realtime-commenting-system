import React, { useState, useEffect, useContext, createContext } from 'react';
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

import { app } from './firebase.config.js';

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
  };
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      setUser(user);
      setLoading(false);
      return user;
    } else {
      setUser(false); // cookie.remove('fast-feedback-auth');
      setLoading(false);
      return false;
    }
  };
  //Function sign in with github
  const signinWithGitHub = () => {
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      handleUser(result.user);
    });
  };
  //Fucntion sign in with google
  const signinWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      handleUser(result.user);
      // ...
    });
  };
  //Function sign out
  const signout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    user,
    signinWithGitHub,
    signinWithGoogle,
    signout,
  };
}
