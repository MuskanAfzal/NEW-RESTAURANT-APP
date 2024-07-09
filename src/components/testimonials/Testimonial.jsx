import React from "react";
import "./Testimonials.css";
import useGsapAnimation from "../../hooks/useGsapAnimation";

const Testimonials = () => {
  useGsapAnimation(".testimonial-title", { opacity: 1, y: 0 });
  useGsapAnimation(".testimonial-item", { opacity: 1, y: 0 });

  const testimonials = [
    {
      id: 1,
      text: "The food was absolutely wonderful, from preparation to presentation, very pleasing.",
      name: "John Doe",
    },
    {
      id: 2,
      text: "We especially enjoyed the special bar drinks, the cucumber cooler was delightful.",
      name: "Jane Smith",
    },
    {
      id: 3,
      text: "We have tried various dishes and each of them was delicious. The atmosphere is cozy.",
      name: "Robert Brown",
    }
  ];

  return (
    <div className="testimonial-container">
      <h1 className="testimonial-title">What Our Customers Say</h1>
      <div className="testimonial-items">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <i className="fas fa-user-circle testimonial-icon"></i>
            <p>"{testimonial.text}"</p>
            <h3>- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
