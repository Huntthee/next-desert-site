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
      <h1 className="text-2xl text-center font-bold mt-5">Waitlist</h1>
      <WaitlistContent></WaitlistContent>
      <nav>
        <Navigation></Navigation>
      </nav>
      <Footer></Footer>
      <Script
        id="scripts"
        src="/scripts/waitlist.js"
        strategy="lazyOnload"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
      />
    </>
  );
}