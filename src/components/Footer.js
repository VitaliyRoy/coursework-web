import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="contacts" className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6 contacts">
            <h5>Контактна інформація</h5>
            <p>Телефон: +380 123 456 789</p>
            <p>Email: info@tourism-ukraine.com</p>
            <h5>Соціальні мережі</h5>
            <p>
              <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            </p>
          </div>
          <div className="col-md-6 map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.7697316396743!2d34.56664891883307!3d49.575738568648006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f64cd0cbd85%3A0x528a08266c1d4938!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgwqvQn9C-0LvRgtCw0LLRgdGM0LrQsCDQv9C-0LvRltGC0LXRhdC90ZbQutCwINGW0LzQtdC90ZYg0K7RgNGW0Y8g0JrQvtC90LTRgNCw0YLRjtC60LDCuw!5e0!3m2!1sru!2sua!4v1717325771168!5m2!1sru!2sua"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="col-md-12 copyright">
          <p className='text-center'>© 2024 Туризм України. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;