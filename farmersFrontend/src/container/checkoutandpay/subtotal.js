import React from "react";
import CurrencyFormat from "react-currency-format";
import { NavLink } from "react-router-dom";
import CheckOutProducts from "./checkOutProducts";
import Layout from "../../layout/layout";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../serviceProvider";

import "./Subtotal.css";
function Sub() {
  const [{ basket }] = useStateValue();
  return (
    <div style={{ margin: "5%" }}>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="subtotal__basketLength">
                Subtotal ({basket.length} items):
                <strong style={{ marginLeft: "5px" }}>&#8377;{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
        />
        <NavLink to="/CODpayment">
          <button className="subtotal__button">proceed to checkout</button>
        </NavLink>
      </div>
      {basket.map((item) => (
        <CheckOutProducts
          product_id={item.product_id}
          seller_id={item.seller_id}
          product_description={item.product_description}
          product_name={item.product_name}
          product_image={item.product_image}
          product_price={item.product_price}
        />
      ))}
    </div>
  );
}

function Subtotal() {
  return (
    <div>
      <Layout>{Sub()}</Layout>
    </div>
  );
}
export default Subtotal;
