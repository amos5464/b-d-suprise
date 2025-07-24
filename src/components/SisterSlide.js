import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';

function SisterSlide({ sister, onBack }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="sister-slide">
      <button className="back-button" onClick={onBack}>Back to Selection</button>
      <h2>Happy Birthday {sister.name}!</h2>
      <Slider {...settings}>
        {sister.images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`${sister.name} ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SisterSlide;