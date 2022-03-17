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
        <section className="flex justify-around my-5 py-4 bg-lorange w-3/4 m-auto">
          <ul className="bg-salmon p-3 rounded">
            <h3 className="font-primary text-xl text-center pb-3">Waiting</h3>
            {waiting.map((client, index) => (
              <li key={index} className="bg-white rounded-full p-1 text-center m-1 font-special text-xl">{client.name}</li>
            ))}
          </ul>
          <ul className="bg-salmon p-3 rounded">
            <h3 className="font-primary text-xl text-center pb-3">Working</h3>
            {working.map((client, index) => (
              <li key={index} className="bg-white rounded-full p-1 text-center m-1 font-special text-xl">{client.name}</li>
            ))}
          </ul>
          <ul className="bg-salmon p-3 rounded">
            <h3 className="font-primary text-xl text-center pb-3">On Hold</h3>
            {onHold.map((client, index) => (
              <li key={index} className="bg-white rounded-full p-1 text-center m-1 font-special text-xl">{client.name}</li>
            ))}
          </ul>
        </section>
        <section className="w-2/3 m-auto mb-7">
          <ul className="bg-salmon p-3 rounded max-h-10 overflow-y-scroll">
            <h3 className="font-primary text-xl text-center pb-3">Complete</h3>
            {complete.map((client, index) => (
              <li key={index} className="bg-white rounded-full p-1 text-center m-1 font-special text-xl mx-8">{client.name} - {client.work}</li>
            ))}
          </ul>
        </section>
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