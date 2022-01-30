import Link from "next/link";

export default function HomeContent() {
  return (
    <>
      <section className="flex-column text-center">
        <h1 className="mt-1 text-lg font-semibold">DesertWhale</h1>
        <div>
          <p>Commission Status:</p>
        </div>

        <div>
          <Link href="/portfolio">
            <a>View My Work</a>
          </Link>
          <Link href="/commissions">
            <a>Hire Me!</a>
          </Link>
        </div>

        <div>
          <a
            href="https://twitter.com/TheDesertWhale"
            target="_blank"
            title="Twitter"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.twitch.tv/thedesertwhale"
            target="_blank"
            title="Twitch"
            rel="noreferrer"
          >
            <i className="fab fa-twitch"></i>
          </a>
          <a
            href="https://www.instagram.com/dessertwhale/"
            target="_blank"
            title="Instagram"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@the_desertwhale?lang=en"
            target="_blank"
            title="TikTok"
            rel="noreferrer"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            href="https://desertwhale.threadless.com/"
            target="blank"
            title="Threadless"
          >
            <i className="fas fa-tshirt"></i>
          </a>
        </div>
        <div>
          <p>More about me!</p>
          <i className="fas fa-arrow-down"></i>
        </div>
      </section>
    </>
  ); 
}