import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from './../firebase/firebase.config';
import PropTypes from 'prop-types';



export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);
const createUser=(email,password,name)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password,name)
}

const createSignIn=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
};
const createSignOut=()=>{
    setLoader(true)
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser);
        setUser(currentUser)
        setLoader(false)
    })
    return()=>{
        unsubscribe()
    }
},[])
    const authInfo={
        user,loader,createUser,createSignIn,createSignOut

    }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {

    children: PropTypes.node,
}
export default AuthProvider