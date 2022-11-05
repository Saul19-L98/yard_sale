import React from "react";
import logo from "../assets/logos/logo_yard_sale.svg";

const NewPassword = () => {
  return (
    <div className="login">
      <div className="login-form-container">
        <img src={logo} alt="logo" className="login-logo" />
        <h1 className="login-title">Create a new password</h1>
        <p className="login-subtitle">Enter a new passwrd for yue account</p>
        <form action="/" className="login-form">
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="login-input input-password"
          />
          <label htmlFor="new-password" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="login-input input-password"
          />
          <input
            type="submit"
            value="Confirm"
            className="login-primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
