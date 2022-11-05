import React, { useContext, useState } from "react";
import btAddCart from "../assets/icons/bt_add_to_cart.svg";
import btAddedCart from "../assets/icons/bt_added_to_cart.svg";
import AppContext from "../context/AppContext";
import ProdductDetail from "./ProductDetail.jsx";

const ProductItem = ({ product }) => {
  const { state, addToCart, removeFromCart } = useContext(AppContext);
  const [toggle, setToggle] = useState(false);

  const handleClick = (item) => {
    !state.cart.includes(item) ? addToCart(item) : removeFromCart(item);
  };

  const handleProductDetail = () => {
    setToggle(!toggle);
  };

  //console.log(product?.images[0]);
  console.log(product.images[0] === "");

  return (
    <div className="product-card">
      <img
        src={
          product.images[0] === "" || "string"
            ? product.category.image
            : product.images[0]
        }
        alt="image"
        onClick={handleProductDetail}
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img
            src={state.cart.includes(product) ? btAddedCart : btAddCart}
            alt="logo"
          />
        </figure>
      </div>
      {toggle ? (
        <ProdductDetail
          key={product.id}
          product={product}
          handleToggle={handleProductDetail}
        />
      ) : null}
    </div>
  );
};

export default ProductItem;
