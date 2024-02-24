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
            // catch error if no email is found
            console.error(err);
        }
    };

    // logout user that was signed in
    const logout = async () => {
        try
        {
            // signOut function from firebase
            await signOut(auth);
        }
        catch (err) 
        {
            console.error(err);
        }
    };

    return (
        <div className = "signIn">
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