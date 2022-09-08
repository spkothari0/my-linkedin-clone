import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './stylesheets/Header.css';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from './firebaseInfo';


function Header() {
  const dispatch = useDispatch();
  const logMeOut = () => {
    dispatch(logout());
    console.log("Logout from header logo");
    auth.signOut();
    console.log("after auth.signout");
  }
  return (
    <div className='header'>

      <div className="header__left">
        {/* left side */}
        <img src="https://img.icons8.com/fluency/452/linkedin.png" alt="LinkedIn Icon" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder='Search' />
        </div>

      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterRoundedIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messages" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="SK" title="Me" onClick={logMeOut} />
      </div>

    </div>
  )
}

export default Header
