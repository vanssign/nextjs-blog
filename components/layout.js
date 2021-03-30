import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const BLOG_NAME = "Life Via Window";
export const siteTitle = "Life Via Window | Blog";

export default function Layout({ children, home, create }) {
  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'black', color: 'white', position: 'fixed', top: 0 }} className="flexContainer">
        <div>
          <Link href="/"><a style={{ color: 'white' }}>Blog</a>
          </Link>
          {" | "}
          <Link href="/apiinfo"><a style={{ color: 'white' }}>API Info</a>
          </Link></div>
        <div>
          <div>
            {/* <Image src="/images/user-icon-white.jpg" alt="Login accessory icon"
        width={30}
        height={30}/> */}
            <Link href="/create"><a style={{ color: 'white' }}>+ New Post</a>
            </Link>
          </div></div>
      </div>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={BLOG_NAME}
              />
              <h1 className={utilStyles.heading2Xl}>{BLOG_NAME}</h1>
            </>
          ) : (
            create ? (<></>) :
              (<>
                <Link href="/">
                  <a>
                    <Image
                      priority
                      src="/images/profile.jpg"
                      className={utilStyles.borderCircle}
                      height={108}
                      width={108}
                      alt={BLOG_NAME}
                    />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{BLOG_NAME}</a>
                  </Link>
                </h2>
              </>)
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
