import React, { useState } from 'react';
import fire from '../config/fire-config';
import utilStyles from "../styles/utils.module.css";

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notification, setNotification] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    fire.firestore()
      .collection('blog')
      .add({
        title: title,
        content: content,
      });
    setTitle('');
    setContent('');
    setNotification('Blogpost created');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span className={`${utilStyles.textSuccess}`}>{notification}</span> <button type="submit" style={{
          float: 'right'
        }} className={`${utilStyles.btnPrimary}`}>Publish</button>
        <div>
          <textarea style={{ width: '100%' }} value={title} className={`${utilStyles.headingLg}`}
            onChange={({ target }) => setTitle(target.value)} placeholder="Title" />
        </div>
        <div>
          <textarea style={{ width: '100%', height: '70vh' }} value={content} className={`${utilStyles.headingMd}`}
            onChange={({ target }) => setContent(target.value)} placeholder="Content" />
        </div>
      </form>
    </div>
  )
}
export default CreatePost;