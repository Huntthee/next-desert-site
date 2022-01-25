import Link from 'next/link'
import Navigation from './components/navigation';

export default function Policy() {
  return (
    <>
      <nav>
        <Navigation></Navigation>
      </nav>
      <h1>Policy</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}