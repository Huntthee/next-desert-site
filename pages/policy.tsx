import Link from 'next/link'
import Footer from './components/footer';
import Navigation from './components/navigation';
import PolicyContent from './components/policy-content';

export default function Policy() {
  return (
    <>
      <nav>
        <Navigation></Navigation>
      </nav>
      <h1>Policy</h1>
      <PolicyContent></PolicyContent>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Footer></Footer>
    </>
  );
}