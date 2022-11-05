import React, { useState, useContext } from "react";
import iMenu from "../assets/icons/icon_menu.svg";
import logo from "../assets/logos/logo_yard_sale.svg";
import iShoppingCart from "../assets/icons/icon_shopping_cart.svg";
import AccountButton from "./AccountButton.jsx";
import AppContext from "../context/AppContext";
import Order from "../containers/Order.jsx";

const Header = () => {
  const [toggle, setToogle] = useState(false);
  const [toogleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToogle(!toggle);
  };
  return (
    <nav>
      <img src={iMenu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo-nav" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toogleOrders)}
          >
            <img src={iShoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle ? <AccountButton /> : null}
      {toogleOrders && <Order />}
    </nav>
  );
};

export default Header;
