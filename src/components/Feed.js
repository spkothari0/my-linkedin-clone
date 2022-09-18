import React, { useEffect, useState } from 'react';
import './stylesheets/Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from './firebaseInfo';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Feed() {

  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL ?? null,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  useEffect(() => {
    db.collection("posts").orderBy("timeStamp", "desc").onSnapshot(s => (
      setPosts(s.docs.map(d => (
        {
          id: d.id,
          data: d.data()
        }
      )))
    ))
  }, [])


  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form >
            <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Start a post' />
            <button onClick={sendPost} type="submit" />
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption name={"Photo"} Icon={ImageIcon} color="#378FE9" />
          <InputOption name={"Video"} Icon={SubscriptionsIcon} color="#5F9B41" />
          <InputOption name={"Event"} Icon={EventIcon} color="#C68423" />
          <InputOption name={"Write article"} Icon={ArticleIcon} color="#E16745" />
        </div>
      </div>

      {posts.map(({ id, data }) => (
        <Post key={id}
          name={data.name}
          description={data.description}
          message={data.message}
          photoUrl={data.photoUrl}
        />
      ))}
    </div>
  )
}

export default Feed
