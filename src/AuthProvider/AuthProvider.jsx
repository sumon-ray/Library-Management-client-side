import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import auth from "../firebase/firebase";
export const UserContext = createContext();

//loginWithGoogle

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  // console.log(user)
  const [loading, setLoading] = useState(true);
  //registerUser==>
  const registerUser = (email,password) => {
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password);
  };
  // tysylyn@mailinator.com
  //loginUser==>
  const loginUser = (email,password) => {
    setLoading(true);
   return signInWithEmailAndPassword(auth, email, password);
  };
  // Google Login ==>
    const googleProvider = new GoogleAuthProvider();
// Google Login ==>
const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider)
      .then(() => {
          toast.success('Logged in successfully');
          // Redirect the user to the home page
         
      })
      .catch((error) => {
          // Handle errors if any
          console.error('Google login error:', error.message);
      });
};

//updateProfile==>
  const updateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // onAuthStateChanged==>
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unsubscriber;
    };
  }, []);

  // logOut user==>
  const logOutUser = () => {
   return signOut(auth).then(() => {
      toast.success("Log out successfully");
    });
  };
  const info = {
    user,
    setUser,
    loading,
    setLoading,
    registerUser,
    loginUser,
    updateProfile,
    logOutUser,
    loginWithGoogle,
  };
  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
};

export default AuthProvider;
