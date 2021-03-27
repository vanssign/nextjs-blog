import CreatePost from "../components/CreatePost";
import Layout from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function Create() {
  return (
    <Layout>
      <Head>
        <title>Create Post</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Create a Post</h2>
      </section>
      <CreatePost/>
    </Layout>
  );
}
