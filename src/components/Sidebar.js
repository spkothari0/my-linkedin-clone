import React from 'react';
import './stylesheets/Sidebar.css';
import { Avatar } from '@mui/material'
import { cyan } from '@mui/material/colors';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import useStringUtility from '../hooks/useStringUtility';
import { useEffect } from 'react';

function Sidebar() {

  const user = useSelector(selectUser);
  const [initials, setInitials] = useStringUtility(user.displayName)

  useEffect(() => {
    setInitials(initials)
  }, [])

  const resentItems = (topic, Icon) => {
    return (
      <div className="sidebar__recentItems">
        <span className='sidebar__iconItem'>
          {Icon && <Icon color='action' fontSize="small"></Icon>}
        </span>
        <p>{topic}</p>
      </div>
    )
  }

  return (
    <div className='sidebar'>
      {/* <h1>I am sidebar</h1> */}
      <div className="sidebar__top">
        <img src="https://imageio.forbes.com/blogs-images/josephliu/files/2019/06/1-office-1516329_1920-1200x299.jpg?format=jpg&width=960" alt="" />
        <Avatar src={user.photoURL} className='sidebar__avatar' sx={{ bgcolor: cyan[600] }}>{initials}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who's viewed your profile</p>
          <p className='sidebar__statNumber'>256</p>
        </div>

        <div className="sidebar__stat">
          <p>Impressions of your posts</p>
          <p className='sidebar__statNumber'>1458</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        Recent
        <div className="sidebar__recentItemList">
          {resentItems("Programming", PeopleRoundedIcon)}
          {resentItems("Developer", PeopleRoundedIcon)}
          {resentItems("AWS", PeopleRoundedIcon)}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
