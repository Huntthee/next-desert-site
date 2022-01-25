import Link from "next/link";
import Navigation from "./components/navigation";

export default function Waitlist() {
  return (
    <>
      <nav>
        <Navigation></Navigation>
      </nav>
      <h1>Waitlist</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}
