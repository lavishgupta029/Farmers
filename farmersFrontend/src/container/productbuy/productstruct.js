import React, { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import Products from "./product";

function Productstruct() {
  const [products, setproducts] = useState("");

  async function fetchproducts() {
    const res = await fetch("http://localhost:3001/api/getproducts");
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
    fetchproducts();
  }, []);
  let myproducts;
  if (products) {
    myproducts = products.result.map((item) => {
      return (
        <Products
          key={item.product_id}
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
    myproducts = "..loading";
  }
  return (
    <div style={{ marginTop: "5%" }}>
      <Layout>
        <div>{myproducts}</div>
      </Layout>
    </div>
  );
}

export default Productstruct;
