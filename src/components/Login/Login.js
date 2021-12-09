import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContextprovider } from '../Context/Contex';
import { Link,useHistory,useLocation } from 'react-router-dom';


const firebaseConfig = {
    apiKey: "AIzaSyBbgf69YOm5KPlL8RvlhNdooP3yepvrV7w",
    authDomain: "burj-al-arab-ef114.firebaseapp.com",
    projectId: "burj-al-arab-ef114",
    storageBucket: "burj-al-arab-ef114.appspot.com",
    messagingSenderId: "697936929847",
    appId: "1:697936929847:web:a501b8ed87d74e0d69cbb2"
  //...
};

const app = initializeApp(firebaseConfig);

const Login = () => {
    const {loggedInUser,setLoggedInUser}=UserContextprovider()
    let history = useHistory()
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

    const [user,setUser]=useState({
        isLogedIn:false,
        name:'',
        photo:'',
        email:''

    })

   const googlesignin=()=>{
    
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        const user = result.user;
       const {displayName,email,photoURL}=user
       const signInUser={
           isLogedIn:true,
           name:displayName,
           photo:photoURL,
           email:email
       }
       setLoggedInUser(signInUser)
       setUser(signInUser)
       history.replace(from);
        
        
      }).catch((error) => {
       
        const errorCode = error.code;
        const errorMessage = error.message;
        
        const email = error.email;
       
        const credential = GoogleAuthProvider.credentialFromError(error);
       
      });
   
    


    }
    return (
        <div>
            <button onClick={googlesignin}>Google login</button>
            <h1> {user.email} </h1>
            <Link to="/">Home</Link>
        </div>

    );
};

export default Login;