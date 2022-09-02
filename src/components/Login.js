import React, { useState } from 'react'
import './stylesheets/Login.css'
import { auth } from './firebaseInfo'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();


  const loginToApp = (e) => {
    e.preventDefault();
    console.log("inside login");
  }

  const register = () => {
    if (!name) {
      return alert('Please write the name !!')
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic
        })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic
            }))
          })
      })
      .catch(error => {
        console.log(error)
        alert(error);
      });

  }
  return (
    <div className='login'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYCJNhz3twqISPEH9OslBm4qSovuWJGAPDw&usqp=CAU"
        alt="" />


      <form>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full Name' name="userName" id="userName" />
        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder='Public pic(optional)' />
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email Id' />
        <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' />

        <button onClick={loginToApp}>Sign In</button>
      </form>

      <p>Not a member?{" "}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login
