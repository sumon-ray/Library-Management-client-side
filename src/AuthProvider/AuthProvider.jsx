import axios from "axios";
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
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [loading, setLoading] = useState(true);
  //registerUser==>
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // tysylyn@mailinator.com
  //loginUser==>
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Google Login ==>
  const googleProvider = new GoogleAuthProvider();
  // Google Login ==>
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { data } = await axios.post(
        "https://server-pi-amber.vercel.app/jwt",
        { email: result?.user?.email },
        { withCredentials: true }
      );
      console.log(data);
      // setLoading(true)
      toast.success("Logged in successfully");
    } catch (error) {
      // Handle errors if any
      console.error("Google login error:", error.message);
    }
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
      setLoading(false);
    });
    return () => {
      return unsubscriber;
    };
  }, []);
  // rs
  // logOut user==>
  const logOutUser = async () => {
    // setLoading(true)
    const { data } = await axios("https://server-pi-amber.vercel.app/logout", {
      withCredentials: true,
    });
    console.log(data);
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
    theme,
    setTheme,
  };
  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
};

export default AuthProvider;
