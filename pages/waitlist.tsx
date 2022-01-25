import Link from "next/link";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import WaitlistContent from "./components/waitlist-content";

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
    </>
  );
}
