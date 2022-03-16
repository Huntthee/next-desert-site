import Footer from './components/footer';
import Navigation from './components/navigation';
import gallery from '../public/scripts/portfolio';

export default function Portfolio() {
  return (
    <>
      <nav>
        <Navigation></Navigation>
      </nav>
      <h1 className="text-center font-bold text-2xl mt-4">Portfolio</h1>
      <h3 className="text-center font-secondary mt-3">Browse through my past works!</h3>
      <section id="portfolio-gallery" className="text-center p-2 mb-8">
        <div id="image-container">
          {gallery.map(image => (
            <div className="display-item">
              <h3>{image.desc}</h3>
              <img src={image.src} alt={image.alt} contextMenu="return false;"/>
            </div>
          ))}
        </div>
      </section>
      <nav>
        <Navigation></Navigation>
      </nav>
      <Footer></Footer>
    </>
  ); 
}