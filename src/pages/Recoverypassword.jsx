import React from "react";
import logo from "../assets/logos/logo_yard_sale.svg";
import iEmail from "../assets/icons/email.svg";

const Recoverypassword = () => {
  return (
    <div className="login">
      <div className="form-container-recoverypassword">
        <img
          src={logo}
          alt="logo"
          className="form-container-recoverypassword-logo"
        />

        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>

        <div className="email-image">
          <img src={iEmail} alt="email" />
        </div>

        <button className="primary-button login-button">Login</button>

        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default Recoverypassword;
