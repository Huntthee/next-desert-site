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
      <h1 className="text-center font-bold text-2xl mt-4">Portfolio</h1>
      <section id="portfolio-gallery" className="text-center p-2"></section>
      <p className="text-center my-5">
        If content fails to load, refresh the page.
      </p>
      <nav>
        <Navigation></Navigation>
      </nav>
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