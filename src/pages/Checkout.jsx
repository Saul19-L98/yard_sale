import React from "react";
import CheckoutItem from "../components/CheckoutItem.jsx";

const Checkout = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="my-order-title">My order</h1>

        <div className="my-order-content">
          <div className="order-content">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
