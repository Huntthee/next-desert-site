import Link from "next/link";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import WaitlistContent from "./components/waitlist-content";
import Script from "next/script";

export default function Waitlist() {
  return (
    <>
      <nav>
        <Navigation></Navigation>
      </nav>
      <h1>Waitlist</h1>
      <WaitlistContent></WaitlistContent>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Footer></Footer>
      <Script id="scripts" src="/scripts/scripts.js" strategy="lazyOnload" onError={(e) => {
        console.error('Script failed to load', e)
      }}/>
    </>
  );
}