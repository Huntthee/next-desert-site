import Link from "next/link";

export default function HomeContent() {
  return (
    <>
      <section className="flex-column text-center">
        <h1 className="text-6xl font-primary text-amaranth my-8">
          DesertWhale
        </h1>
        <div>
          <p>
            Commission Status:{" "}
            <strong className="text-highlight">Closed</strong>
          </p>
        </div>

        <div className="my-8">
          <Link href="/portfolio">
            <a className="font-special text-2xl bg-lorange p-2 m-1 rounded-full">
              View My Work
            </a>
          </Link>
          <Link href="/commissions">
            <a className="font-special text-2xl bg-lorange p-2 m-1 rounded-full">
              Hire Me!
            </a>
          </Link>
        </div>

        <div className="my-6 flex justify-around">
          <a
            href="https://twitter.com/TheDesertWhale"
            target="_blank"
            title="Twitter"
            rel="noreferrer"
          >
            <i className="fab fa-twitter text-3xl text-[#1da1f2]"></i>
          </a>
          <a
            href="https://www.twitch.tv/thedesertwhale"
            target="_blank"
            title="Twitch"
            rel="noreferrer"
          >
            <i className="fab fa-twitch text-3xl text-[#6441a5]"></i>
          </a>
          <a
            href="https://www.instagram.com/dessertwhale/"
            target="_blank"
            title="Instagram"
            rel="noreferrer"
          >
            <i className="fab fa-instagram text-3xl text-[#cd486b]"></i>
          </a>
          <a
            href="https://www.tiktok.com/@the_desertwhale?lang=en"
            target="_blank"
            title="TikTok"
            rel="noreferrer"
          >
            <i className="fab fa-tiktok text-3xl"></i>
          </a>
          <a
            href="https://desertwhale.threadless.com/"
            target="blank"
            title="Threadless"
          >
            <i className="fas fa-tshirt text-3xl text-amaranth"></i>
          </a>
        </div>
        <div className="my-6">
          <p className="font-bold">More about me!</p>
          <i className="fas fa-arrow-down"></i>
        </div>
      </section>
    </>
  ); 
}