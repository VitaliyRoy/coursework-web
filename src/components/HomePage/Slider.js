import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/slider-img1.jpg';
import image2 from '../images/slider-img2.jpg';
import image3 from '../images/slider-img3.jpg';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="slider-image-container">
          <img
            className="slider-image"
            src={image1}
            alt="Перший слайд"
          />
        </div>
        <Carousel.Caption className="caption-outline">
          <p>Велич і міць Кам'янець-Подільської фортеці – відчуйте дух минулого!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-image-container">
          <img
            className="slider-image"
            src={image2}
            alt="Другий слайд"
          />
        </div>
        <Carousel.Caption className="caption-outline">
          <p>Скельний комплекс Тустань – незабутня мандрівка у минуле!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-image-container">
          <img
            className="slider-image"
            src={image3}
            alt="Третій слайд"
          />
        </div>
        <Carousel.Caption className="caption-outline">
          <p>Монумент Батьківщина-мати – символ непохитної сили та волі України.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;