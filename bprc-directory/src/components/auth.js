import { auth, googleProvider } from "../config/firebase.js";
// this is a method
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from "react";

export const Auth = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try
        {
            // create email and password 
            await createUserWithEmailAndPassword(auth, email, password);
        }
        catch (err) 
        {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try
        {
            // create email and password 
            await signInWithPopup(auth, googleProvider);
        }
        catch (err) 
        {
            console.error(err);
        }
    };

    const logout = async () => {
        try
        {
            // create email and password 
            await signOut(auth);
        }
        catch (err) 
        {
            console.error(err);
        }
    };

    return (
        <div>
            {/* <input placeholder = "Email..."  />
            <input placeholder = "Password..." /> */}
            <input 
                placeholder = "Email..." 
                onChange = {(e) => setEmail(e.target.value)} />
            <input 
                placeholder = "Password..." 
                onChange = {(e) => setPassword(e.target.value)}
                type = "password"/>
            <button onClick = {signIn}> Sign In </button>
            <button onClick = {signInWithGoogle}> Sign In with Google </button>
            <button onClick = {logout}> Logout </button>
        </div>
    );
};