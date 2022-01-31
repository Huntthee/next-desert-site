import Link from 'next/link'
import Footer from './components/footer';
import Navigation from './components/navigation'
import Script from 'next/script';

export default function Portfolio() {
  return (
    <>
      <nav>
        <Navigation></Navigation>
      </nav>
      <h1>Portfolio</h1>
      <section id="portfolio-gallery"></section>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Footer></Footer>
      <Script
        id="scripts"
        src="/scripts/portfolio.js"
        strategy="lazyOnload"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
      />
    </>
  ); 
}