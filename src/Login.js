import React, { useState } from 'react'
import "./Login.css"
import {Link , useHistory} from "react-router-dom";
import { auth } from './firebase';
 
function Login() {
    const history =useHistory();
    const [email , setEmail] = useState("");
    const [password , setPassword ]= useState("");
    const login = event => {
        event.preventDefault();//this stops refresh
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            //logged in successfully redirect to home page
            history.push("/");
        })
        .catch(e =>alert(e.message))
    }
    const register = event =>{
        event.preventDefault();//this stops refresh
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            //registered in successfully redirect to home page
            history.push("/");
        })
        .catch(e =>alert(e.message))
    }
    
    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""/>
            </Link>
            <div className="login__container">
                <h1>Singn in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type ="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type ="password"/>
                    <button onClick={login}  type="submit" className="login__SignInButton">Sign In </button>
                </form>
                <p>terms & conditons </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
