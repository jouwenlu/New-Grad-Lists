import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../firebase";
import firebase from "firebase/app";

const AuthContext = createContext();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [currentUser]);

  const signInWithGoogle = () => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .signInWithPopup(googleProvider)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return promise;
  };

  const value = {
    currentUser,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

//https://medium.com/bithubph/how-to-build-an-authentication-system-in-react-using-firebase-2717103ee197
