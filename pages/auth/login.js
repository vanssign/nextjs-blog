import { useState } from 'react';
import fire from '../../config/fire-config';
import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import Link from "next/link";
export default function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notify, setNotification] = useState('');
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    fire.auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {
        console.log(err.code, err.message)
        setNotification(err.message)
        setTimeout(() => {
          setNotification('')
        }, 2000)
      })
    setUsername('')
    setPassword('')
    router.push("/")
  }
  return (
    <Layout>
      <h1>Login</h1>
      {notify}
      <form onSubmit={handleLogin}>
        <input type="text" value={username} placeholder="Email" 
        onChange= {({target}) => setUsername(target.value)} />
        <br />
        <input type="password" value={password} placeholder="password"
        onChange={({target}) => setPassword(target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
      <small>Don't have an account? <Link href="/auth/register">Register now !</Link></small>
    </Layout>
  )
}