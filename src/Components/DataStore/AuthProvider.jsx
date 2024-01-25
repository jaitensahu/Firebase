import { createContext, useContext, useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext({});
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const loginIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setCurrentUser({});
    signOut(auth)
      .then(() => {
        console.log("Sign - out successful");
      })
      .catch((error) => {
        console.log(error);
      });

    let res = signOut(auth);
    console.log(res);
  };

  const authData = {
    currentUser,
    setCurrentUser,
    signup,
    loginIn,
    logOut,
  };

  return (
    <>
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
