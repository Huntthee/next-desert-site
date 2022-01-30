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
      <Script src="/scripts/scripts.js" strategy="lazyOnload"/>
    </>
  );
}
