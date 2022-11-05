import React, { useContext } from "react";
import ShoppingCart from "../components/ShoppingCart.jsx";
import iArrow from "../assets/icons/flechita.svg";
import AppContext from "../context/AppContext";

const Order = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="shopcart-product-detail">
      <div className="shopcart-title-container">
        <a className="shopcart-title" href="/order-history">
          <img src={iArrow} alt="arrow" />
          My order
        </a>
      </div>

      <div className="my-order-content">
        {state.cart.map((product, index) => (
          <ShoppingCart key={index} indexValue={index} product={product} />
        ))}
      </div>
      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>${sumTotal()}</p>
      </div>

      <button className="shopcart-primary-button">Checkout</button>
    </aside>
  );
};

export default Order;
