import { Icon } from '@mui/material'
import React from 'react'
import './InputOption.css'

function InputOption({ name, Icon, color }) {
  return (
    <div className='inputOption'>
      {Icon && <Icon style={{ color: color }} className='inputOption__icon' />}
      <h4 className='inputOption__name'>{name}</h4>
    </div>
  )
}

export default InputOption
