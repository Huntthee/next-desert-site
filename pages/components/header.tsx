import Link from "next/link"

export default function Header() {
  return (
    <>
      <div className="flex">
        <Link href="/">
          <a>
            <img src="images/lil-whale.png" alt="A little whale done up by Alii for DesertWhale" className="ml-4 mt-4"/>
          </a>
        </Link>
        <div className="text-center mt-7 ml-4">
          <h3 className="font-primary text-3xl text-amaranth">TheDesertWhale</h3>
          <p className="font-bold">Digital Artist | Graphic Designer | Streamer</p>
        </div>
      </div>
    </>
  )
}