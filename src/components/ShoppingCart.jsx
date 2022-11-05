import React, { useContext } from "react";
import iClose from "../assets/icons/icon_close.png";
import AppContext from "../context/AppContext";

const ShoppingCart = ({ product, indexValue }) => {
  const { title, price, images, category } = product;
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (product) => {
    removeFromCart(product);
  };
  return (
    <div className="shopping-cart">
      <figure>
        <img
          src={images[0] === "" || "string" ? category.image : images[0]}
          alt="bike"
        />
      </figure>
      <p>{title}</p>
      <p>{price}</p>
      <img src={iClose} alt="close" onClick={() => handleRemove(indexValue)} />
    </div>
  );
};

export default ShoppingCart;
