import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from './components/navigation'
import HomeContent from './components/home'
import About from './components/about'
import Footer from './components/footer'
import Header from './components/header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TheDesertWhale - Art & Commissions</title>
        <meta
          name="description"
          content="Digital Artwork for Streaming, Social Media, Websites, Personal Use & More!"
        />
        <link rel="icon" href="/images/lil-whale.png" />
      </Head>
      <main>
        <Header></Header>
        <nav>
          <Navigation></Navigation>
        </nav>
        <HomeContent></HomeContent>
        <About></About>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default Home