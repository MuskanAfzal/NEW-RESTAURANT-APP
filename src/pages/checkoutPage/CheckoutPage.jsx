import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './CheckoutPage.css';

export default function CheckoutPage() {
  const cart = useSelector(state => state.cart.items);
  const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <>
      <Navbar />
      <div className="final-checkout-container">
        <div className="final-checkout-details">
          <h1>Checkout</h1>
          <form className="final-checkout-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip Code</label>
              <input type="text" id="zip" name="zip" required />
            </div>
            <button type="submit" className="place-order-button">Place Order</button>
          </form>
        </div>
        <div className="final-checkout-summary">
          <div className="total-section">
            <p className="cart-total-heading">Order Summary</p>
            <div>
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <hr />
            <div>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="final-checkout-button">Proceed to Payment</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
