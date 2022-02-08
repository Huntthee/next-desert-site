import Link from 'next/link'
import Navigation from './components/navigation';
import Footer from './components/footer';
import CommissionContent from './components/commissions-content';

export default function Commissions() {
  return (
    <>
      <nav>
        <Navigation></Navigation>
      </nav>
      <div className="text-center">
        <h1 className="font-bold text-2xl mt-5">Commissions</h1>
        <CommissionContent></CommissionContent>
      </div>
      <nav>
        <Navigation></Navigation>
      </nav>
      <Footer></Footer>
    </>
  );
}