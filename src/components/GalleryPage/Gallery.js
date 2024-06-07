import React from 'react';
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import image4 from '../images/img4.jpg';
import image5 from '../images/img5.jpg';
import image6 from '../images/img6.jpg';
import image7 from '../images/img7.jpg';
import image8 from '../images/img8.jpg';
import image9 from '../images/img9.jpg';
import image10 from '../images/img10.jpg';
import image11 from '../images/img11.jpg';
import image12 from '../images/img12.jpg';

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-container">
        <div className="gallery-item">
          <img src={image1} alt="img1" />
          <div className="caption">Бакота</div>
        </div>
        <div className="gallery-item">
          <img src={image2} alt="img2" />
          <div className="caption">Італійський дворик у Львові</div>
        </div>
        <div className="gallery-item">
          <img src={image3} alt="img3" />
          <div className="caption">Скелі Довбуша</div>
        </div>
        <div className="gallery-item">
          <img src={image4} alt="img4" />
          <div className="caption">Дністровський каньйон</div>
        </div>
        <div className="gallery-item">
          <img src={image5} alt="img5" />
          <div className="caption">Актівський каньйон</div>
        </div>
        <div className="gallery-item">
          <img src={image6} alt="img6" />
          <div className="caption">Хотинська фортеця</div>
        </div>
        <div className="gallery-item">
          <img src={image7} alt="img7" />
          <div className="caption">Грот Прийма</div>
        </div>
        <div className="gallery-item">
          <img src={image8} alt="img8" />
          <div className="caption">Протяті Камені</div>
        </div>
        <div className="gallery-item">
          <img src={image9} alt="img9" />
          <div className="caption">Мавринський майдан</div>
        </div>
        <div className="gallery-item">
          <img src={image10} alt="img10" />
          <div className="caption">Село Дземброня</div>
        </div>
        <div className="gallery-item">
          <img src={image11} alt="img11" />
          <div className="caption">Тараканівський форт</div>
        </div>
        <div className="gallery-item">
          <img src={image12} alt="img12" />
          <div className="caption">Стільське городище</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;