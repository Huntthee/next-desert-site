import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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

      <main>
        <section>
          <h1>DesertWhale</h1>
          <div>
            <p>Commission Status:</p>
          </div>

          <div>
            <a href="/portfolio">View My Work</a>
            <a href="/commissions">Hire Me!</a>
          </div>

          <div>
            <a
              href="https://twitter.com/TheDesertWhale"
              target="_blank"
              title="Twitter"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.twitch.tv/thedesertwhale"
              target="_blank"
              title="Twitch"
              rel="noreferrer"
            >
              <i className="fab fa-twitch"></i>
            </a>
            <a
              href="https://www.instagram.com/dessertwhale/"
              target="_blank"
              title="Instagram"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@the_desertwhale?lang=en"
              target="_blank"
              title="TikTok"
              rel="noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://desertwhale.threadless.com/"
              target="blank"
              title="Threadless"
            >
              <i className="fas fa-tshirt"></i>
            </a>
          </div>
          <div>
            <p>More about me!</p>
            <i className="fas fa-arrow-down"></i>
          </div>
        </section>
      </main>

      <footer>&copy; TheDesertWhale 2022</footer>
    </div>
  );
}

export default Home
