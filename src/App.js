import React, { useEffect, useState } from 'react';
import {useSelector , useDispatch} from 'react-redux'
import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import { selectUser } from './features/userSlice'
import Login from './Login';
import { auth } from './firebase';
import {login , logout, verification}  from './features/userSlice'
import firebase from 'firebase'
function App() {

  const user = useSelector(selectUser);
  //Sending value into the data layer
  const [signInUser , setSignInUser] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    
    auth.onAuthStateChanged((authUser) =>{
      setSignInUser(authUser);
      console.log("user is " , authUser)
      if(authUser?.emailVerified){
        // user logged in 
        
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))

      }
      else if(!authUser?.emailVerified){
        dispatch(verification(authUser?.emailVerified))
        dispatch(logout())
      }
      else{
        // user logged out 
        dispatch(logout())
      }
    })
    
  }, [dispatch])
  return (
    <div className="app">
      {/* {alert(user)} */}
      {user? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) :<Login />}
        {/* sidebar */ }
      
    </div>
  );
}

export default App;
