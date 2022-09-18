import { Avatar } from '@mui/material'
import React from 'react'
import './stylesheets/Post.css'
import RecommendTwoToneIcon from '@mui/icons-material/RecommendTwoTone';
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import useStringUtility from '../hooks/useStringUtility';
import { useEffect } from 'react';
import { cyan } from '@mui/material/colors';


function Post({ name, description, message, photoUrl }) {

  const user = useSelector(selectUser);
  const [initials, setInitials] = useStringUtility(name);

  useEffect(() => {
    setInitials(initials)
  }, [])

  return (
    <div className='post'>
      <div className="post__header">
        <Avatar src={photoUrl} sx={{ bgcolor: cyan[600] }}>{initials}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
          <p></p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      {/* like to left  and no of comments to right*/}
      <div className="post__data">
        <div className="post__like">
          <RecommendTwoToneIcon style={{ color: "#378FE9", fontSize: 'medium' }} />
          <p>120</p>
        </div>
        <div className="post__comment">
          <p>26 comments</p>
        </div>
      </div>


      <div className="post__buttons">
        <InputOption name={"Like"} Icon={ThumbUpOutlinedIcon} />
        <InputOption name={"Comment"} Icon={ChatOutlinedIcon} />
        <InputOption name={"Share"} Icon={ShareOutlinedIcon} />
        <InputOption name={"Send"} Icon={SendOutlinedIcon} />
      </div>
    </div>
  )
}

export default Post
