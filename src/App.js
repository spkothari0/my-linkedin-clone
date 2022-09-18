import React, { useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css'
import Feed from './components/Feed';
import { login, logout, selectUser } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';
import { auth } from './components/firebaseInfo';
import Widges from './components/Widges';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      }
      else {
        //user loggout
        dispatch(logout);
      }
    })
  }, [])

  return (
    <div className="app">
      {/* {Header} */}


      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar /> {/* Sidebar to left: ; */}
            <Feed />  {/* // Feeds iniddle */}
            <Widges />{/* // Widges to right */}
          </div>
        </>
      )}

    </div>
  );
}

export default App;
