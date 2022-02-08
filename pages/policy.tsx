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
      <PolicyContent></PolicyContent>
      <nav>
        <Navigation></Navigation>
      </nav>
      <Footer></Footer>
    </>
  );
}