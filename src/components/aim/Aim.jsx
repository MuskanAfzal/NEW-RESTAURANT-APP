import React from "react";
import "./Aim.css";
import useGsapAnimation from "../../hooks/useGsapAnimation";

const Aim = () => {
  useGsapAnimation(".aim-title", { opacity: 1, y: 0 });
  useGsapAnimation(".aim-description", { opacity: 1, y: 0 });
  useGsapAnimation(".aim-item", { opacity: 1, y: 0 });

  return (
    <div className="aim-container">
      <h1 className="aim-title">Our Aim</h1>
      <p className="aim-description">
        Our mission is to bring people together through the joy of great food.
        We believe that every meal is an opportunity to create lasting memories
        with family and friends. We strive to offer an exceptional dining
        experience with our delicious dishes, warm atmosphere, and top-notch
        service.
      </p>
      <div className="aim-items">
        <div className="aim-item">
          <i className="fas fa-utensils"></i>
          <h3>Delicious Food</h3>
          <p>We use the freshest ingredients to prepare our mouth-watering dishes.</p>
        </div>
        <div className="aim-item">
          <i className="fas fa-heart"></i>
          <h3>Great Atmosphere</h3>
          <p>Our restaurant provides a cozy and welcoming environment for all.</p>
        </div>
        <div className="aim-item">
          <i className="fas fa-star"></i>
          <h3>Exceptional Service</h3>
          <p>Our staff is dedicated to providing you with the best dining experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Aim;
