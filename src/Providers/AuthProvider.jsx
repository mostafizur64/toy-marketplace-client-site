import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext()
const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);


 const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }
 const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);

 }
const googleSignIn = ()=>{
    return signInWithPopup(auth,GoogleProvider)
}

const logOut = ()=>{
   return signOut(auth);

}
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,createUser=>{
        setUser(createUser);
        console.log('current user',createUser);
    })
    return unsubscribe()
},[])
    const authInfo = {
        googleSignIn,
        createUser,
        signIn,
        user,
        loading,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};
export default AuthProvider;