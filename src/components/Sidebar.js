import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material'
import { cyan } from '@mui/material/colors';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';

function Sidebar({ name, description }) {

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
        <Avatar className='sidebar__avatar' sx={{ bgcolor: cyan[600] }}>{GetInitials(name)}</Avatar>
        <h2>{name}</h2>
        <h4>{description}</h4>
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



  function GetInitials(n) {
    let names = n.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }
}

export default Sidebar
