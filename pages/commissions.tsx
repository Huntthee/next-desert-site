import Navigation from './components/navigation';
import Footer from './components/footer';
import CommissionContent from './components/commissions-content';
import Header from './components/header';

export default function Commissions() {
  return (
    <>
      <Header></Header>
      <nav>
        <Navigation></Navigation>
      </nav>
      <div className="text-center">
        <h1 className="font-bold text-4xl my-6">Commissions</h1>
        <CommissionContent></CommissionContent>
      </div>
      <nav>
        <Navigation></Navigation>
      </nav>
      <Footer></Footer>
    </>
  );
}