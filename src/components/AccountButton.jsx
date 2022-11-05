import React from "react";

const AccountButton = () => {
  return (
    <div className="desktop-menu account-button">
      <ul>
        <li>
          <a href="/order-history" className="title">
            My orders
          </a>
        </li>

        <li>
          <a href="/edit-account">My account</a>
        </li>

        <li>
          <a href="/login">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default AccountButton;
