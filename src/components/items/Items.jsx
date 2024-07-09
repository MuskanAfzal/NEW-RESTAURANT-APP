import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Items.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Items = () => {
  const items = useSelector((state) => state.items.items);
  const navigate = useNavigate();

  console.log("Items from Redux:", items);

  const handleDishClick = (dish) => {
    console.log("Dish clicked:", dish);
    navigate(`/dish/${dish.id}`, { state: { dish } });
  };

  return (
    <div className="items-container">
      <h1>Our Dishes</h1>
      <Carousel
        responsive={responsive}
        showDots={false}
        arrows={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {items.map((dish) => (
          <div
            key={dish.id}
            className="carousel-item"
            onClick={() => handleDishClick(dish)}
          >
            <div className="item-card">
              <img
                src={`${process.env.PUBLIC_URL}/${dish.image}`}
                alt={dish.name}
                className="carousel-image"
                onError={(e) => {
                  console.error("Failed to load image:", dish.image, e);
                }}
              />
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Items;
