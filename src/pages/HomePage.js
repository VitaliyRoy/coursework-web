import React from 'react';
import Header from '../components/Header';
import Slider from '../components/HomePage/Slider';
import News from '../components/HomePage/News';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <Slider />
      <News />
      <Footer />
    </div>
  );
}

export default HomePage;