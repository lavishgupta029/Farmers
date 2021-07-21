import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signin from "./container/signinandsignup/signin";
import Home from "./container/home";
import signup from "./container/signinandsignup/signup";
import subtotal from "./container/checkoutandpay/subtotal";
import productstruct from "./container/productbuy/productstruct";
import PrivateRoute from "./container/auth/privateRoute";
import Checkout from "./container/checkoutandpay/checkout";
import buyorsell from "./container/buyorsell";
import Sellproducts from "./container/productsell/sellproducts";
import yourorders from "./container/productbuy/yourorders";
import Yourselledproducts from "./container/productsell/yourselledproducts";
import Cod from "./container/checkoutandpay/cod";
import Reviews from "./container/reviews/reviews";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signin" component={signin}></Route>
          <Route path="/signup" component={signup}></Route>
          <PrivateRoute
            path="/products"
            component={productstruct}
          ></PrivateRoute>
          <PrivateRoute path="/buyorsell" component={buyorsell}></PrivateRoute>
          <PrivateRoute path="/subtotal" component={subtotal}></PrivateRoute>
          <PrivateRoute path="/checkout" component={Checkout}></PrivateRoute>
          <PrivateRoute
            path="/sellproducts"
            component={Sellproducts}
          ></PrivateRoute>
          <PrivateRoute
            path="/yourorders"
            component={yourorders}
          ></PrivateRoute>
          <PrivateRoute
            path="/yourselledproducts"
            component={Yourselledproducts}
          ></PrivateRoute>
          <PrivateRoute path="/CODpayment" component={Cod}></PrivateRoute>
          <PrivateRoute path="/reviews" component={Reviews}></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
