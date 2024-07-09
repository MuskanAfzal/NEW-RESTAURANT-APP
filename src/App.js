import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItems } from "./features/itemsSlice";
import { setBlogs } from "./features/blogSlice";
import HomePage from "./pages/homePage/HomePage";
import DishDetailPage from "./pages/dishDetailPage/DishDetailPage";
import CartPage from "./pages/cartPage/CartPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage"; 
import BlogDetailPage from "./pages/blogDetailPage/BlogDetailPage"
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setItems(data.dishes));
        dispatch(setBlogs(data.blogs));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dish/:id" element={<DishDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} /> 
          <Route path="/blog/:id" element={<BlogDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
