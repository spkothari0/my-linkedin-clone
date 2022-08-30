import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css'
import Feed from './components/Feed';
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux';
function App() {

  const user = useSelector(selectUser);

  return (
    <div className="app">
      {/* {Header} */}
      <Header />


      <div className="app_body">

        <Sidebar name="Shreyas Kothari" description="I am software Engineer" /> {/* Sidebar to left: ; */}
        <Feed />  {/* // Feeds iniddle */}

        {/* // Widges to right */}


      </div>

    </div>
  );
}

export default App;
