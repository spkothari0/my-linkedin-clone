import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css'
function App() {
  return (
    <div className="app">
      {/* {Header} */}
      <Header />


      <div className="app_body">
        {
          <Sidebar name="Shreyas Kothari" description="I am software Engineer" /> // Sidebar to left: ;

          // Feeds iniddle
          // Widges to right
        }

      </div>

    </div>
  );
}

export default App;
