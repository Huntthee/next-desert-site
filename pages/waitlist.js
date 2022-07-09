/* Import all the necessary peices */

import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Header from "./components/header";
import waiting from "../public/scripts/waitlist";
import working from "../public/scripts/worklist";
import complete from "../public/scripts/donelist";


/* Create Waitlist Page */

export default function Waitlist() {
  return (
    <>
      {/* Insert the Header Component */}
      <Header></Header>
      <nav>
        {/* Insert the Navigation Component */}
        <Navigation></Navigation>
      </nav>

      <h1 className="text-4xl text-center font-bold my-6">Waitlist</h1>

      <section className="lg:flex xl:flex justify-around my-5 p-4 bg-lorange w-3/4 m-auto xl:w-1/2">
        {/* Wait List */}
        <div>
          <h3 className="font-primary text-xl text-center pb-3 bg-salmon w-fit rounded-t p-1 m-auto">
            Waiting
          </h3>
          <ul className="bg-salmon p-3 rounded mb-3 xl:px-6">
            {waiting.map((client, index) => (
              <li
                key={index}
                className="bg-white rounded-full p-1 text-center m-1 font-special text-xl"
              >
                {client.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Working List */}
        <div>
          <h3 className="font-primary text-xl text-center pb-3 bg-salmon w-fit rounded-t p-1 m-auto">
            Working
          </h3>
          <ul className="bg-salmon p-3 rounded mb-3  xl:px-6">
            {working.map((client, index) => (
              <li
                key={index}
                className="bg-white rounded-full p-1 text-center m-1 font-special text-xl"
              >
                {client.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-2/3 m-auto mb-7 bg-lorange p-4 xl:p-6">
        {/* Complete List */}
        <div>
          <h3 className="font-primary text-xl text-center pb-3 bg-salmon w-fit rounded-t px-6 py-1 m-auto">
            Complete
          </h3>
          <ul className="bg-salmon p-3 rounded max-h-10 overflow-y-scroll">
            {complete.map((client, index) => (
              <li
                key={index}
                className="bg-white rounded-full px-2 py-1 text-center m-1 font-special text-xl xl:mx-8"
              >
                {client.name} - {client.work}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav>
        {/* Insert Navigation Component */}
        <Navigation></Navigation>
      </nav>

      {/* Insert Footer Component */}
      <Footer></Footer>
    </>
  );
}
