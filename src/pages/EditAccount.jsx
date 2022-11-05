import React from "react";
import Header from "../components/Header.jsx";

const EditAccount = () => {
  return (
    <>
      <Header />
      <div className="login">
        <div className="login-form-container">
          <h1 className="login-title-edit">My account</h1>

          <form action="/" className="login-form">
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <p className="login-value">Camila Yokoo</p>

              <label htmlFor="email" className="label">
                Email
              </label>
              <p className="login-value">camilayokoo@gmail.com</p>

              <label htmlFor="password" className="label">
                Password
              </label>
              <p className="login-value">*********</p>
            </div>

            <input
              type="submit"
              value="Edit"
              className="login-secondary-button login-button"
              href="/"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAccount;
