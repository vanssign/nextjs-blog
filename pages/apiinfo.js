import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function APIIndex({allRoutesData}) {
    return (
        <Layout>
            <Head>
                <title>API Routes Index</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>API Routes</p>
            </section>
            <section>
                <p>Make GET requests at following routes to fetch data</p>
                <ul className={utilStyles.list}>
                    {allRoutesData.map((route) => (
                        <li className={utilStyles.listItem} key={route.id}>
                            <Link href={`/api/${route.rUrl}`}>
                                <a>/api/{route.name}</a>
                            </Link>
                        </li>
                    ))}
                    <li className={utilStyles.listItem}>
                        <a>/api/posts/:postid </a><span>to retrieve a specific post</span>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}
export async function getStaticProps() {
    var allRoutesData = [
        {
            id: 1,
            rUrl: "postsids",
            name: "postsids"
        },
        {
            id: 0,
            rUrl: "posts",
            name: "posts"
        },
    ];
    return {
        props: {
            allRoutesData,
        },
    };
}