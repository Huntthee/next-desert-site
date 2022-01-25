import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navigation from './components/navigation'
import HomeContent from './components/home'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TheDesertWhale - Art & Commissions</title>
        <meta
          name="description"
          content="Digital Artwork for Streaming, Social Media, Websites, Personal Use & More!"
        />
        <link rel="icon" href="/lil-whale.png" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <main className={styles.homepage}>
        <nav>
          <Navigation></Navigation>
        </nav>
        <HomeContent></HomeContent>
      </main>

      <footer>&copy; TheDesertWhale 2022</footer>
    </div>
  );
}

export default Home
