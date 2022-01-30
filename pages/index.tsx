import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from './components/navigation'
import HomeContent from './components/home'
import About from './components/about'
import Footer from './components/footer'

const Home: NextPage = () => {
  return (
    <div>
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
        <nav className="flex text-torange">
          <Navigation></Navigation>
        </nav>
        <HomeContent></HomeContent>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Home