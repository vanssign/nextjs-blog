import { useState, useEffect } from 'react';
import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import fire from "../config/fire-config";

export default function Home({allPostsData}) { 
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Poetry | Thoughts | Ideas</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((post) => (
            <li className={utilStyles.listItem} key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
              <br />
              <small>{post.content}</small>
              {/* <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small> */}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  var allPostsData=[];
  const blogsRef=fire.firestore().collection('blog')
  const snapshot=await blogsRef.get();
  snapshot.forEach(doc => {
    allPostsData.push({id:doc.id,
    ...doc.data()})
  });
  return {
    props: {
      allPostsData,
    },
  };
}
