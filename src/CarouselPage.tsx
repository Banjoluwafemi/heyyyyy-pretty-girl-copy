import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const CarouselPage = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="carousel-page">
      <Confetti width={width} height={height} />
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src="/images/image1.jpeg" alt="Image 1" />
        </div>
        <div>
          <img src="/images/image2.jpeg" alt="Image 2" />
        </div>
        <div>
          <img src="/images/image3.jpeg" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
