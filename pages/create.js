import CreatePost from '../components/CreatePost';
import Head from 'next/head'
import Layout from '../components/layout';

export default function Create(){
    return(
        <Layout create>
            <Head>
                <title>Create Post | Blog</title>
            </Head>
            <CreatePost/>
        </Layout>
    )
}