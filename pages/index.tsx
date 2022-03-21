import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from './components/navigation'
import HomeContent from './components/home'
import About from './components/about'
import Footer from './components/footer'
import Header from './components/header'
import Script from 'next/script'

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

        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
        </Script>
        
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