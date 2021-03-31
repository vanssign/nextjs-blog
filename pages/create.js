import CreatePost from '../components/CreatePost';
import Head from 'next/head'
import Layout from '../components/layout';
import fire from '../config/fire-config';
import Link from "next/link";
import {useState} from 'react';

export default function Create() {
    const [LoginStatus, setLoginStatus] = useState(false);
    fire.auth()
        .onAuthStateChanged((user) => {
            if (user) {
                setLoginStatus(true)
            }
            else {
                setLoginStatus(false)
            }
        })
    return (
        <Layout create>
            <Head>
                <title>Create Post | Blog</title>
            </Head>
            {LoginStatus?(<CreatePost />):(<><h4>You are not logged in! </h4> <Link href="/auth/login">Login here</Link></>)}
        </Layout>
    )
}