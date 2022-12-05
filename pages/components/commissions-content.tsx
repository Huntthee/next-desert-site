export default function CommissionContent() {
  return (
    <>
      <p className="text-xl">
        Take a look at some of the packages on offer, and be sure to read the
        policy if you're seeking a commission.
      </p>

      <article className="bg-salmon p-2 mx-1 rounded lg:mx-7 xl:mx-9 xl:mt-7">
        <video autoPlay loop className="xl:p-6">
          <source src="images/emotes_comm_sheets.mp4" type="video/mp4" />
        </video>
      </article>

      <article className="bg-lorange p-2 mx-1 rounded lg:mx-7 xl:mx-9 xl:mt-7">
        <h2 className="font-bold text-xl xl:pb-2 bg-white rounded-full w-1/2 m-auto mt-2">
          Emotes
        </h2>
        <img
          src="images/new-emote-spread.webp"
          alt="A spread of emotes done for Kamizard on Twitch"
          className="px-4 py-4 xl:px-8 xl:py-4  m-auto"
        />
        <h3 className="mb-2 xl:text-lg font-bold">
          Regular $35ea | Animated $50ea
        </h3>
        <hr />
        <figure className="my-4 px-1">
          <ul>
            <li className="font-bold">Custom Emotes for your Stream!</li>
            <li>$15 for seasonal/holiday modifications.</li>
            <li>Includes 2 Revisions. *PNG Files</li>
          </ul>
        </figure>
        <hr />
      </article>

      <article className="bg-salmon p-2 mx-1 rounded lg:mx-7 xl:mx-9 xl:mb-8">
        <h2 className="font-bold text-xl xl:pb-2 bg-white rounded-full w-3/4 xl:w-2/3 m-auto mt-2">
          Profile Picture / Portrait / Illustration
        </h2>
        <img
          src="images/mateo-smoke.webp"
          alt="A cute little skeletal t-rex for Tbone"
          className="m-auto px-4 py-4 xl:px-8 xl:py-4 "
        />
        <h3 className="mb-2 xl:text-lg font-bold">
          S $35 | M $60 | L $120 - $150
        </h3>
        <hr />
        <figure className="my-4 px-1">
          <ul>
            <li>500x500, 800x800 & 1920x1080 respectively</li>
            <li>Visual references are required for portraits.</li>
            <li>Includes 1 custom Illustration, 2 Revisions</li>
            <li>*PNG files</li>
          </ul>
        </figure>
        <hr />
      </article>

      <article className="bg-lorange p-2 mx-1 rounded lg:mx-7 xl:mx-9">
        <h2 className="font-bold text-xl xl:pb-2 bg-white rounded-full w-1/2 m-auto mt-2">
          Logo
        </h2>
        <img
          src="images/unbound-icon.webp"
          alt="Unbound Icon/Logo for their WorldAnvil site"
          className="p-4 m-auto"
        />
        <h3 className="mb-2 xl:text-lg font-bold">$75 - $300</h3>
        <hr />
        <figure className="my-4 px-1">
          <ul>
            <li>*With Commercial Rights.</li>
            <li>*Price determined by complexity.</li>
            <li>Includes 1 custom Logo. 2 Revisions.</li>
          </ul>
        </figure>
        <hr />
      </article>

      <article className="bg-salmon p-2 mx-1 rounded lg:mx-7 xl:mx-9">
        <h2 className="font-bold text-xl xl:pb-2 bg-white rounded-full w-2/3 m-auto mt-2">
          Subscriber & Bit Badges
        </h2>
        <img
          src="images/smiley-hats.jpg"
          alt="An assortment of sombreros for subscriber badges!"
          className="m-auto p-4"
        />
        <h3 className="mb-2 xl:text-lg font-bold">
          1x $20-30 || 3x $75 || 6x $150
        </h3>
        <hr />
        <figure className="my-4 px-1">
          <ul>
            <h4>Unique Styles $30/ea</h4>
            <li>
              Each badge is different from the last with changes in line art or
              completely new images.
            </li>
            <h4>Recolor Style $20/ea</h4>
            <li>
              Badges vary in appearance with color changes, but the line art
              remains the same.
            </li>
            <li>Includes 3 sizes for Twitch (72px, 36px, 18px)</li>
          </ul>
        </figure>
        <hr />
      </article>

      <article className="bg-lorange p-2 mx-1 rounded lg:mx-7 xl:mx-9">
        <h2 className="font-bold text-xl xl:pb-2 bg-white rounded-full w-2/3 m-auto mt-2">
          Basic Scenes, Overlays or Banners
        </h2>
        <img
          src="images/redrum-set.gif"
          alt="Custom scenes, overlays or banners in the theme of your choice"
          className="m-auto p-4"
        />
        <h3 className="mb-2 xl:text-lg font-bold">$30 Each</h3>
        <hr />
        <figure className="my-4 px-1">
          <ul>
            <li>
              *Starting Soon, Be Right Back/Intermission, Just Chatting, Stream
              Ending, Offline, etc
            </li>
            <li>
              Includes PNG Files: (1920x1080 Other resolutions must be discussed
              prior to ordering)
            </li>
          </ul>
        </figure>
        <hr />
      </article>

      <article className="bg-salmon p-2 mx-1 rounded lg:mx-7 xl:mx-9">
        <h2 className="font-bold text-xl xl:pb-2 bg-white rounded-full w-1/2 m-auto mt-2">
          Illustrated Scene
        </h2>
        <img
          src="images/meeks-starting-soon.jpg"
          alt="A starting soon scene featuring the pokemon blastoise and gengar"
          className="m-auto p-4"
        />
        <h3 className="mb-2 xl:text-lg font-bold">$100 - $200 / Scene</h3>
        <hr />
        <figure className="my-4 px-1">
          <ul>
            <li>
              *Scenes are hand-drawn and can include characters, background, and
              other misc. objects.
            </li>
            <li>Prices will vary based on complexity and level of detail.</li>
            <li>
              Includes PNG Files(1920x1080) Other resolutions must be discussed
              prior to ordering.
            </li>
          </ul>
        </figure>
        <hr />
      </article>

      <article className="bg-lorange p-2 mx-1 rounded lg:mx-7 xl:mx-9">
        <h2 className="font-bold text-xl xl:pb-2 bg-white rounded-full w-1/2 m-auto mt-2">
          Basic & Illustrated Panels
        </h2>
        <img
          src="images/new-panels-image.webp"
          alt="Panels and more for DillThrills"
          className="m-auto px-4 py-4 xl:px-8 xl:py-4"
        />
        <hr />
        <figure className="my-4 px-1">
          <div className="flex justify-center">
            <ul>
              <li className="font-bold">Basic Panels*</li>
              <li>$20ea or Same-Style set of 5 for $50</li>
              <li>*Only change Text/Color</li>
              <li>Mascots/Logos can be added</li>
              <li>PNG file, 320x100px</li>
            </ul>
            <ul>
              <li className="font-bold">Illustrated Panels</li>
              <li>$40ea</li>
              <li>Hand Drawn</li>
              <li>PNG File, 1920x1080px or size of choice</li>
            </ul>
          </div>
        </figure>
        <hr />
      </article>

      <article className="bg-salmon p-2 mx-1 rounded lg:mx-7 xl:mx-9">
        <h2 className="font-bold text-xl xl:pb-2 bg-white rounded-full w-2/3 m-auto mt-2">
          Decorative Stream Schedule
        </h2>
        <img
          src="images/DesSchedule.webp"
          alt="Wonderfully colourful stream schedules in a variety of styles"
          className="m-auto p-4"
        />
        <h3 className="mb-2 xl:text-lg font-bold">$40</h3>
        <hr />
        <figure className="my-4 px-1">
          <ul>
            <li>*Can be designed for other purposes as well.</li>
            <li>Dimensions: (2050x780)</li>
          </ul>
        </figure>
        <hr />
      </article>

      <article className="bg-lorange p-2 mx-1 rounded lg:mx-7 xl:mx-9">
        <h2 className="font-bold text-xl xl:pb-2 bg-white rounded-full w-1/2 m-auto mt-2">
          Poster or Graphic
        </h2>
        <img
          src="images/raft-with-friends.webp"
          alt="Needs Image"
          className="m-auto p-4"
        />
        <h3 className="mb-2 xl:text-lg font-bold">$30</h3>
        <hr />
        <figure className="my-4 px-1">
          <ul>
            <li>Includes: 2 Revisions.</li>
            <li>PNG Files: (1920x1080) or requested size.</li>
          </ul>
        </figure>
        <hr />
      </article>
    </>
  );
}