import Link from 'next/link'
import Footer from './components/footer';
import Navigation from './components/navigation'

export default function Portfolio() {
  return (
    <>
      <nav>
        <Navigation></Navigation>
      </nav>
      <h1>Portfolio</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Footer></Footer>
    </>
  ); 
}