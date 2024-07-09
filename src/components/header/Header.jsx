import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Header.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Header = () => {
  const [images, setImages] = useState([]);
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setImages(data.images))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlur(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`header-container ${isBlur ? 'blur' : ''}`}>
      <Carousel
        responsive={responsive}
        showDots={true}
        arrows={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={`${process.env.PUBLIC_URL}/${image}`} alt={`slide-${index}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>
      <div className="animated-content">
        <img src="images/logo.png" alt="Restaurant Logo" className="logo" />
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the taste of luxury</p>
      </div>
    </div>
  );
};

export default Header;
