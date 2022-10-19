import { faTwitter, faTwitch, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faTshirt, faArrowDown, faA } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function HomeContent() {
  return (
    <>
      <section id="home-section" className="flex-column text-center ">
        <h1 className="text-6xl font-primary text-white mb-8 pt-8 lg:mb-7 lg:text-7xl xl:mb-8 xl:text-8xl">
          DesertWhale
        </h1>
        <div className="bg-white w-fit m-auto p-1 rounded-full">
          <p className="lg:text-lg">
            Commission Status: <strong className="text-highlight">Open</strong>
          </p>
        </div>

        <div className="my-8">
          <Link href="/portfolio">
            <a className="font-special text-2xl bg-white p-2 m-1 rounded-full lg:hover:animate-pulse">
              View My Work
            </a>
          </Link>
          <Link href="/commissions">
            <a className="font-special text-2xl bg-white p-2 m-1 rounded-full lg:hover:animate-pulse">
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
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-6 text-[#1da1f2] bg-white p-1 rounded hover:text-white hover:bg-[#1da1f2]"
            />
          </a>
          <a
            href="https://www.twitch.tv/thedesertwhale"
            target="_blank"
            title="Twitch"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitch}
              className="w-6 text-[#6441a5] bg-white p-1 rounded hover:text-white hover:bg-[#6641a5]"
            />
          </a>
          <a
            href="https://www.instagram.com/dessertwhale/"
            target="_blank"
            title="Instagram"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 text-[#cd486b] bg-white p-1 rounded hover:text-white hover:bg-[#cd486b]"
            />
          </a>
          <a
            href="https://www.tiktok.com/@the_desertwhale?lang=en"
            target="_blank"
            title="TikTok"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              className="w-6 bg-white p-1 rounded hover:text-white hover:bg-black"
            />
          </a>
          <a
            href="https://desertwhale.threadless.com/"
            target="blank"
            title="Threadless"
          >
            <FontAwesomeIcon
              icon={faTshirt}
              className="w-6 text-amaranth bg-white px-1 py-2 rounded hover:text-white hover:bg-amaranth"
            />
          </a>
        </div>
        <div className="my-6 py-6 xl:my-7">
          <p className="font-bold">More about me!</p>
          <FontAwesomeIcon
            icon={faArrowDown}
            className="w-3 m-auto pt-2 lg:animate-bounce"
          />
        </div>
      </section>
    </>
  ); 
}