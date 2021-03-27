import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDhbPfo0d31JAAGzKP0deQ7EO6TV05Ln00",
    authDomain: "nextjs-blog-ca7a5.firebaseapp.com",
    projectId: "nextjs-blog-ca7a5",
    storageBucket: "nextjs-blog-ca7a5.appspot.com",
    messagingSenderId: "419825086280",
    appId: "1:419825086280:web:3b48afe7154db831c90d7d"
  };

  try {
    firebase.initializeApp(firebaseConfig);
  } catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)}
  }
  const fire = firebase;
  
  export default fire;