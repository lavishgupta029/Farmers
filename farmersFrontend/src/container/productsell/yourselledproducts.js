import React, { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import { isAuthenticate } from "../auth";
import Selledproducts from "./selledproducts";
function Yourselledproducts() {
  const [products, setproducts] = useState();
  const {
    result: { f_id, name },
  } = isAuthenticate();
  async function fetchorders() {
    const res = await fetch(`http://localhost:3001/api/yourselledproducts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ f_id }),
    });
    res
      .json()
      .then((product) => {
        setproducts(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchorders();
  }, []);
  let myorders;
  if (products) {
    myorders = products.result.map((item) => {
      return (
        <Selledproducts
          product_id={item.product_id}
          seller_id={item.seller_id}
          product_description={item.product_description}
          product_name={item.product_name}
          product_image={item.product_image}
          product_price={item.product_price}
          seller_phone_no={item.seller_phone_no}
        />
      );
    });
  } else {
    myorders = "..loading";
  }
  return (
    <div>
      <Layout>
        <h2>hello {name}</h2>
        <div>{myorders}</div>
      </Layout>
    </div>
  );
}

export default Yourselledproducts;
