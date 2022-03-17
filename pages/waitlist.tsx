import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Script from "next/script";
import Header from "./components/header";
import waiting from '../public/scripts/waitlist';
import working from '../public/scripts/worklist';
import onHold from '../public/scripts/holdlist';
import complete from '../public/scripts/donelist';

export default function Waitlist() {
  return (
    <>
      <Header></Header>
      <nav>
        <Navigation></Navigation>
      </nav>
      <h1 className="text-2xl text-center font-bold mt-5">Waitlist</h1>
        <section className="flex justify-around my-5 py-4 bg-lorange">
          <ul>
            <h3>Waiting</h3>
            {waiting.map(client => (
              <li>{client.name}</li>
            ))}
          </ul>
          <ul>
            <h3>Working</h3>
            {working.map(client => (
              <li>{client.name}</li>
            ))}
          </ul>
          <ul>
            <h3>On Hold</h3>
            {onHold.map(client => (
              <li>{client.name}</li>
            ))}
          </ul>
        </section>
        <section>
          <ul>
            <h3>Complete</h3>
            {complete.map(client => (
              <li>{client.name} - {client.work}</li>
            ))}
          </ul>
        </section>
      <p className="text-center my-5">If content fails to load, refresh the page.</p>
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