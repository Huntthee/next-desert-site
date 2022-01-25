import Link from 'next/link'
import Navigation from './components/navigation';

export default function Commissions() {
  return (
    <>
      <nav>
        <Navigation></Navigation>
      </nav>
      <h1>Commissions</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}