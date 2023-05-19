/* eslint-disable react/jsx-key */

import './Gallery.css';
//Install and import the library
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function Gallery() {

  //Responsiveness 
  const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 6 },
  };


  //The carousel items 
  const items = [

      // eslint-disable-next-line react/jsx-key
      <div className="item">
        <img src="/cat1.png" alt="cute cat" />
      </div>,
      <div className="item">
        <img src="/cat2.png" alt="cute cat" />
      </div>,
      <div className="item">
        <img src="/cat3.png" alt="cute cat" />
      </div>,
      <div className="item">
        <img src="/cat1.png" alt="cute cat" />
      </div>,
      <div className="item">
        <img src="/cat2.png" alt="cute cat" />
      </div>,
      


  ];


  return (
    <div className="App">

      <h1>Cats list</h1>

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
}

export default Gallery;