import React from "react";

const CreateAccount = () => {
  return (
    <div className="login">
      <div className="createAccount-form-container">
        <h1 className="createAccount-title">My account</h1>

        <form action="/" className="createAccount-form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Teff"
              className="login-input login-input-name"
            />

            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="platzi@example.com"
              className="login-input login-input-email"
            />

            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="login-input login-input-password"
            />
          </div>

          <input
            type="submit"
            value="Create"
            className="login-primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
