import Link from 'next/link'
import Image from 'next/image';
import Navigation from './components/navigation';
import Footer from './components/footer';

export default function Commissions() {
  return (
    <>
      <nav>
        <Navigation></Navigation>
      </nav>
      <h1>Commissions</h1>
      
      <article>
        <h2>Emotes</h2>
        <h3>1x $30 || 3x $90 || 6x $180</h3>
        <hr/>
        <figure>
          <ul>
            <li>Includes PNG Files: (500x500px) image for upload.</li>
            <li>$15 for seasonal/holiday modifications.</li>
          </ul>
        </figure>
        <hr/>
      </article>
      
      <article>
        <h2>Logo</h2>
        <h3>$75 - $300</h3>
        <hr/>
        <figure>
          <ul>
            <li>*With Commercial Rights.</li>
            <li>*Price determined by complexity.</li>
            <li>Includes 1 custom Logo. 2 Revisions.</li>
          </ul>
        </figure>
        <hr/>
      </article>

      <article>
        <h2>Twitch Stream Package</h2>
        <h3>$120</h3>
        <hr/>
        <h3>A set of essential elements for your stream</h3>
        <figure>  
          <ul>
            <li>1 Simple Overlay, 3 Scenes and 6 Panels.</li>
            <li>Includes PNG files: (1920x1080)(320x100) etc.</li>
          </ul>
        </figure>
        <hr/>
      </article>

      <article>
        <h2>Subscriber & Bit Badges</h2>
        <h3>1x $20-30 || 3x $75 || 6x $150</h3>
        <hr/>
        <figure>
          <ul>
            <h4>Unique Styles $30/ea</h4>
            <li>Each badge is different from the last with changes in line art or completely new images.</li>
            <h4>Recolor Style $20/ea</h4>
            <li>Badges vary in appearance with color changes, but the line art remains the same.</li>
            <li>Includes 3 sizes for Twitch (72px, 36px, 18px)</li>
          </ul>
        </figure>
        <hr/>
      </article>

      <article>
        <h2>Basic Scenes, Overlays or Banners</h2>
        <h3>1x $20 || 3x $60 || 6x $110</h3>
        <hr/>
        <figure>
          <ul>
            <li>*Starting Soon, Be Right Back/Intermission, Just Chatting, Stream Ending, Offline, etc</li>
            <li>Includes PNG Files: (1920x1080 Other resolutions must be discussed prior to ordering.</li>
          </ul>
        </figure>
        <hr/>
      </article>

      <article>
        <h2>Illustrated Scene</h2>
        <h3>$80 - $150 / Scene</h3>
        <hr/>
        <figure>
          <ul>
            <li>*Scenes are hand-drawn and can include characters, background, and other misc. objects.</li>
            <li>Prices will vary based on complexity and level of detail.</li>
            <li>Includes PNG Files(1920x1080) Other resolutions must be discussed prior to ordering.</li>
          </ul>
        </figure>
        <hr/>
      </article>

      <article>
        <h2>Basic Panels</h2>
        <h3>1x $10 || 6x $60</h3>
        <hr/>
        <figure>
          <ul>
            <li>*Panels only change text and or color. Your mascots or logos can be added as a feature.</li>
            <li>An Artist or Credit panel can be made free of charge.</li>
            <li>IncludesPNG Files: (320x100)</li>
          </ul>
        </figure>
        <hr/>
      </article>

      <article>
        <h2>Illustrated Panels</h2>
        <h3>$30/ea</h3>
        <hr/>
        <figure>
          <ul>
            <li>*Panels are hand drawn and can include any subject you like. Mascots and logos can be included as a feature.</li>
            <li>Prices will vary based on complexity and level of detail.</li>
            <li>Includes PNG Files(1920x1080) Other resolutions must be discussed prior to ordering.</li>
          </ul>
        </figure>
        <hr/>
      </article>

      <article>
        <h2>Decorative Stream Schedule</h2>
        <h3>$40</h3>
        <hr/>
        <figure>
          <ul>
            <li>*Can be designed for other purposes as well.</li>
            <li>Dimensions: (2050x780)</li>
          </ul>
        </figure>
        <hr/>
      </article>

      <article>
        <h2>Poster or Graphic</h2>
        <h3>$30</h3>
        <hr/>
        <figure>
          <ul>
            <li>Includes: 2 Revisions.</li>
            <li>PNG Files: (1920x1080) or requested size.</li>
          </ul>
        </figure>
        <hr/>
      </article>

      <article>
        <h2>Profile Picture / Avatar / Icon</h2>
        <h3>$35</h3>
        <hr/>
        <figure>
          <ul>
            <li>*Visual references are required for portraits.</li>
            <li>Includes 1 custom Profile Picture. 2 Revisions. PNG Files: (800x800)</li>
          </ul>
        </figure>
        <hr/>
      </article>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Footer></Footer>
    </>
  );
}