import React from 'react'
import './stylesheets/HeaderOption.css'
import { Avatar } from '@mui/material';
import { cyan } from '@mui/material/colors';


function HeaderOption({ title, Icon, avatar }) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && <Avatar className='headerOption__icon' sx={{ bgcolor: cyan[600] }}>{avatar}</Avatar>}
      {<h3 className='headerOption__title'>{title}</h3>}
    </div>
  )
}

export default HeaderOption
