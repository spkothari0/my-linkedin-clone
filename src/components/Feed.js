import React from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

function Feed() {
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form >
            <input type="text" placeholder='Start a post' />
            <button type="submit" />
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption name={"Photo"} Icon={ImageIcon} color="#378FE9" />
          <InputOption name={"Video"} Icon={SubscriptionsIcon} color="#5F9B41" />
          <InputOption name={"Event"} Icon={EventIcon} color="#C68423" />
          <InputOption name={"Write article"} Icon={ArticleIcon} color="#E16745" />
        </div>
      </div>
    </div>
  )
}

export default Feed
