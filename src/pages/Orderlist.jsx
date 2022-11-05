import React from "react";
import OrderListItem from "../components/OrderListItem.jsx";
import Header from "../components/Header.jsx";

const Orderlist = () => {
  return (
    <>
      <Header />
      <div className="my-order">
        <div className="my-order-container">
          <h1 className="my-order-title">My orders</h1>

          <div className="my-order-content">
            <OrderListItem />
            <OrderListItem />
            <OrderListItem />
            <OrderListItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Orderlist;
