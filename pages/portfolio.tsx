import Footer from './components/footer';
import Navigation from './components/navigation';
import gallery from '../public/scripts/portfolio';
import Header from './components/header'

export default function Portfolio() {
  return (
    <>
      <Header></Header>
      <nav>
        <Navigation></Navigation>
      </nav>
      <h1 className="text-center font-bold text-4xl my-6">Portfolio</h1>
      <h3 className="text-center font-secondary text-xl mt-3">Browse through my past works!</h3>
      <section className="text-center p-2 mb-8 flex">
        <div>
          {gallery.map((image, index) => (
            <div key={index} className="">
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