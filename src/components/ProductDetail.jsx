import React, { useContext } from "react";
import addCart from "../assets/icons/bt_add_to_cart.svg";
import iClose from "../assets/icons/icon_close.png";

const ProdductDetail = ({ product, handleToggle }) => {
  const { images, price, title, category, description } = product;
  return (
    <aside className="product-detail">
      <div className="product-detail-close" onClick={handleToggle}>
        <img src={iClose} alt="close" />
      </div>
      <img
        src={
          images[0] === "" || images[0] === "string"
            ? category.image
            : images[0]
        }
        alt="image"
      />
      <div className="product-detail-info">
        <p>${price}</p>
        <p>{title}</p>
        <p>{description}</p>
        <button className="primary-button-details add-to-cart-button">
          {/* <img src={addCart} alt="add to cart" /> */}
          Add to cart
        </button>
      </div>
    </aside>
  );
};

export default ProdductDetail;
