import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import fire from "../../config/fire-config";
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingLg}>{postData.title}</h1>
      <p style={{whiteSpace: 'pre-wrap'}}>{postData.content}</p>
    </Layout>
  )
}

export async function getStaticPaths() {
  var paths = [];
  const blogsRef = fire.firestore().collection('blog')
  const snapshot = await blogsRef.get();
  snapshot.forEach(doc => {
    paths.push({
      params: { id: doc.id },
    })
  });
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  var postData;
  const blogRef = fire.firestore().collection('blog').doc(params.id);
  const doc = await blogRef.get();
  if (!doc.exists) {
    postData={
      content:'Do  not exist',
      title:'error'
    }
  } else {
    postData=doc.data();
  }
  return {
    props: {
      postData
    }
  }
}