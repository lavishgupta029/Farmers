import React from "react";
import { useStateValue } from "../../serviceProvider";
import "../product.css";

function Products({
  product_id,
  seller_id,
  product_description,
  product_name,
  product_image,
  product_price,
  seller_phone_no,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        product_id: product_id,
        seller_id: seller_id,
        product_description: product_description,
        product_name: product_name,
        product_image: product_image,
        product_price: product_price,
        seller_phone_no: seller_phone_no,
      },
    });
  };
  return (
    <>
      <div className="shop__body" style={{ overflowX: "hidden" }}>
        <section id="shop-layout">
          <div className="container shop__container">
            <div
              className="shop__grid shop__grid-2 row shop__row--modify"
              style={{ backgroundColor: "#DFFFDE" }}
            >
              <div className="shop__img__grid col-md-4">
                <img
                  className="shop__img"
                  src={`http://localhost:3001/${product_image}`}
                  alt=""
                />
              </div>
              <div className="shop__product__info col-md-7">
                <h4>{product_name}</h4>
                <p>{product_description}</p>
                <div className="shop__pricing-cart">
                  <h5>
                    <span>&#8377;</span>
                    {product_price}
                  </h5>
                  <button
                    className="btn shop__btn--customize"
                    onClick={addToBasket}
                  >
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Products;
