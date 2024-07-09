import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import "./DishDetailPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const DishDetailPage = () => {
  const location = useLocation();
  const { dish } = location.state || {};
  const items = useSelector((state) => state.items.items);
  const [relatedDishes, setRelatedDishes] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dish || !dish.id) {
      console.error("Dish data is incomplete or missing:", dish);
      return;
    }

    console.log("Dish details received:", dish);
    const related = items.filter((d) => d.id !== dish.id).slice(0, 3);
    setRelatedDishes(related);
    console.log("Filtered related dishes:", related);
  }, [dish, items]);

  if (!dish || !dish.id) {
    return <div>Dish not found</div>;
  }

  const handleAddToCart = () => {
    console.log("Processing add to cart:", dish);
    dispatch(addToCart(dish));
  };

  const handleRelatedDishClick = (relatedDish) => {
    navigate(`/dish/${relatedDish.id}`, { state: { dish: relatedDish } });
  };

  return (
    <>
      <Navbar />
      <div className="dish-detail-container">
        <div className="dish-detail">
          <img
            src={`${process.env.PUBLIC_URL}/${dish.image}`}
            alt={dish.name}
            className="dish-image"
            onError={(e) => {
              console.error("Failed to load image:", dish.image, e);
            }}
          />
          <div className="dish-info">
            <h1>{dish.name}</h1>
            <p>{dish.description}</p>
            <h3>Price: {dish.price}$</h3>
            <button onClick={handleAddToCart} className="add-to-cart-button">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="related-dishes">
          <h2>Related Dishes</h2>
          <div className="related-dishes-list">
            {relatedDishes.map((relatedDish) => (
              <div
                key={relatedDish.id}
                className="related-dish-item"
                onClick={() => handleRelatedDishClick(relatedDish)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/${relatedDish.image}`}
                  alt={relatedDish.name}
                  className="related-dish-image"
                  onError={(e) => {
                    console.error(
                      "Failed to load related image:",
                      `${process.env.PUBLIC_URL}/${relatedDish.image}`,
                      e
                    );
                  }}
                />
                <h3 className="realated-dishes-h3">{relatedDish.name}</h3>
                <p>{relatedDish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DishDetailPage;
