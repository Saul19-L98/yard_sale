import React, { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import useGetProducts from "../hook/useGetProducts.js";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductsContainer = () => {
  const products = useGetProducts(API);
  const [toggle, setToggle] = useState(false);
  const handleClickDetail = () => {
    setToggle(!toggle);
  };
  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map((product, index) => (
          <ProductCard
            product={product}
            key={product.id}
            handleClickDetail={handleClickDetail}
          />
        ))}
        {toggle ? (
          <ProdductDetail
            key={product.id}
            product={product}
            handleToggle={handleProductDetail}
          />
        ) : null}
      </div>
    </section>
  );
};

export default ProductsContainer;
