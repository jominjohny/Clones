import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth , provider} from './firebase'
import firebase from 'firebase'
import { selectVerification } from './features/userSlice'
import { useState } from 'react'
import passwordHash from 'password-hash'
import { useDispatch } from 'react-redux'

function Login({verification}) {

    const dispatch = useDispatch();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const signIn=() =>{
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    const GoogleVerification=() =>{
        alert("verification")
        
        firebase.auth().currentUser.sendEmailVerification().then(function() {
            // Email sent.
            console.log("send")
            }, function(error) {
            // An error happened.
            });
    }

    const getEmail=(e) =>{
        setEmail(e.target.value);
    }

    const appSignUp =()=>{
        var hashedPassword =passwordHash.generate(password);

        setTimeout(
            () => {firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(function(value) {

                    console.log(value);
                    firebase.auth().currentUser.sendEmailVerification().then(function() {
                        // Email sent.
                        console.log("send")
                        }, function(error) {
                        // An error happened.
                        });
                    })
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(error.message)
                // ...
              });}, 
            3000
          );
          
    }

    const appSignIn =()=>{

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(value) {
            console.log("after login")
            console.log(value)

            
            })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error.message)
            // ...
          });
       
        
  }

    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png" alt=""/>
            </div>
            Email<input onChange={getEmail} type="text"/>
            Password<input onChange={(e)=>setPassword(e.target.value)} type="text"/>
            {selectVerification && <Button onClick={signIn}>Google Sign In</Button>}
            {<Button onClick={appSignUp}>app sign up</Button>}
            {<Button onClick={appSignIn}>app sign in</Button>}
            {<Button onClick={GoogleVerification}>Please Verify the account</Button>}
            {email}
            {password}
        </div>
    )
}

export default Login
