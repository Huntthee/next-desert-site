import Image from "next/image"
import whale from "../../public/lil-whale.png"

export default function About() {
  return (
    <>
      <section className="text-center px-3">
        <Image 
          src={whale}
          width="200"
          height="200"
          className="rounded-full"
        />

        <h2 className="my-4 font-bold">Hi, I'm Jess!</h2>

        <p>I am a freelance digital artist and have been certified in <strong>Adobe Illustrator</strong>, <strong>Photoshop</strong> and <strong>InDesign</strong> since 2015; Currently pursuing freelance graphic design, commissions and streaming on Twitch.</p>

        <p className="py-2">I am also skilled in traditional art and painting, and am currently experimenting with new and alternative programs to create stream elements, overlays, emote designs and animations.</p>

        <ul className="text-left list-disc px-4 my-7 bg-lorange rounded">
          <li className="text-center font-bold p-3 list-none">Skills:</li>
          <li>Graduated from the Graphic Communications and Print Technology program at SAIT.</li>
          <li>Certified in Adobe Illustrator, Photoshop and InDesign.</li>
          <li>Currently working with a mix of new and old programs such as Clip Studio Paint, Krita and Adobe Illustrator.</li>
          <li>Graphic Design, banners, backgrounds, posters, panels, resumes, avatars, emotes and much more.</li>
          <li>Branding, logos, themes, character and background design.</li>
          <li>Large canvases, Acrylic paint, colored pencil, graphite, markers, oil paint, pen and ink, pencils watercolors etc.</li>
          <li>Main focus is gaining experience and expanding my portfolio while I pursue the ability to work from home and follow my passion.</li>
        </ul>

        <ul className="bg-lorange rounded">
          <li className="font-bold p-3">Interests:</li>
          <li>Traditional and Digital Art</li>
          <li>Video Game Design</li>
          <li>Graphic Design, Layout & Typography</li>
          <li>Business Cards, Advertisements, Logos & Resume Design</li>
          <li>Posters & Illustration</li>
          <li>Emotes & Streaming Art</li>
          <li>Animation & Video making</li>
        </ul>

        <p className="m-5 p-4 font-bold rounded">Supporting me here will allow me to continue pursuing my dreams creating content working from home, I love you, and your support is appreciated more than you know.</p>

        <a href="https://www.paypal.com/paypalme/desertwhale"       id="donation-link" 
        target="_blank" 
        rel="noreferrer"
        className="px-7 py-3 bg-highlight rounded"
        >
          Donate!
        </a>

      </section>
    </>
  ) 
}