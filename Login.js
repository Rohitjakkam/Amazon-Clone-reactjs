import React, { useState } from 'react';
import "./Login.css";
import {Link} from "react-router-dom";
import { auth } from "./firebase"


function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {

        });
        .catch((e) => alert(e.message));
    } ;
    const register = (event) => {
        event.preventDefault();

    } ;




  return (
    <div className='login' >
        <Link to="/">
            <img className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG8.png" alt="" />
        </Link>
    <div className="login__conatiner">
        <h1>Sign-in</h1>
        <form action="">
        <h5>E-mail</h5>
        <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
        <h5>Password</h5>
        <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
        <button onClick={login} type='submit' className='login__signIn'>Sign In</button>

        </form>

        <p>
            By sigining-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notic and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className='login__register'>Create your Amazon Account</button>

    </div>

    </div>
  )
}

export default Login;