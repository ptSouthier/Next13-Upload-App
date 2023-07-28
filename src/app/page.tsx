'use client';
import Head from "next/head";
import Link from "next/link";
import UploadButton from "./components/uploadButton/UploadButton";
import styles from './styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js forms</title>
        <meta name="description" content="Learn forms with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UploadButton>Upload a CSV file</UploadButton>

          <Link href="/no-js-form" className={styles.card}>
            <h2>Form without JavaScript &rarr;</h2>
            <p>Learn to handle forms without JavaScript in Next.js.</p>
          </Link>
      </main>

      <footer className={styles.footer}>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Built with Next.js | Powered by{' '}
        </a>
      </footer>
    </div>
  )
}
