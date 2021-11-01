import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Carousal() {
  return (
    <div className='relative'>
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        swipeable
        className=''
      >
        <div>
          <img src='https://links.papareact.com/gi1' loading='lazy' />
        </div>
        <div>
          <img src='https://links.papareact.com/6ff' loading='lazy' />
        </div>
        <div>
          <img src='https://links.papareact.com/7ma' loading='lazy' />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousal;
