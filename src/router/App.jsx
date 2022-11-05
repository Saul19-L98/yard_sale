import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import NewPassword from "../pages/NewPassword.jsx";
import Recoverypassword from "../pages/Recoverypassword.jsx";
import CreateAccount from "../pages/CreateAccount.jsx";
import Login from "../pages/Login.jsx";
import EditAccount from "../pages/EditAccount.jsx";
import Checkout from "../pages/Checkout.jsx";
import Orderlist from "../pages/Orderlist.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContext from "../context/AppContext.js";
import useInitealState from "../hook/useInitialState.js";

const App = () => {
  const initalState = useInitealState();
  return (
    <AppContext.Provider value={initalState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/order-history" element={<Orderlist />} />
            <Route exact path="/edit-account" element={<EditAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/create-account" element={<CreateAccount />} />
            <Route
              exact
              path="/recovery-password"
              element={<Recoverypassword />}
            />
            <Route exact path="/not-fuound" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
