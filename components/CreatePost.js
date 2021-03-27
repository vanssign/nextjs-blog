import React, { useState } from 'react';
import fire from '../config/fire-config';
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
      {notification}
      <form onSubmit={handleSubmit}>
        <div>
          Title<br />
          <input type="text" value={title} 
           onChange={({target}) => setTitle(target.value)} />
        </div>
        <div>
          Content<br />
          <textarea value={content} 
           onChange={({target}) => setContent(target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
export default CreatePost;