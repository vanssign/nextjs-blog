import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import fire from '../config/fire-config';
import { useState } from 'react';

const BLOG_NAME = "Life Via Window";
export const siteTitle = "Life Via Window | Blog";

export default function Layout({ children, home, create }) {
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
  const handleLogout = () => {
    fire.auth()
      .signOut()
  }
  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'black', color: 'white', position: 'fixed', top: 0, zIndex: 2 }} className="flexContainer">
        <div style={{fontSize:'0.8em'}}>
          <Link href="/"><a style={{ color: 'white' }}> Blog</a>
          </Link>
          {" | "}
          <Link href="/apiinfo"><a style={{ color: 'white' }}>API</a>
          </Link></div>
        <button onClick={() => document.documentElement.scrollTop = 0} style={{ backgroundColor: 'transparent', color: 'white', paddingLeft: '5px', paddingRight: '5px', paddingTop: '0px', paddingBottom: '0px', fontSize: '24px' }}>
          <strong> ᨑ </strong></button>
        <div>
          {LoginStatus ? (<>
            <Link href="/create"><a style={{ color: 'white',fontSize:'0.75em' }}>+ New Post</a>
            </Link>{" | "}<button onClick={() => handleLogout()} style={{fontSize:'0.75em'}}>Logout</button>
          </>) : (<>
            <Link href="/auth/register"><a style={{ color: 'white',fontSize:'0.75em' }}>Register</a></Link>{" | "}<Link href="/auth/login"><a style={{ color: 'white',fontSize:'0.75em' }}>Login</a></Link>
          </>)}
        </div>
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
