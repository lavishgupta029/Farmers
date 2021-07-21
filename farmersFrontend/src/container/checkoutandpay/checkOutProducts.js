import React from "react";
import "../product.css";
import { useStateValue } from "../../serviceProvider";
function CheckOutProducts({
  product_id,
  seller_id,
  product_description,
  product_name,
  product_image,
  product_price,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      product_id: product_id,
    });
  };
  return (
    <div class="shop__body" style={{ overflowX: "hidden" }}>
      <section id="shop-layout">
        <div class="container shop__container">
          <div class="shop__grid shop__grid-2 row shop__row--modify">
            <div class="shop__img__grid col-md-4">
              <img
                className="shop__img"
                src={`http://localhost:3001/${product_image}`}
                alt=""
              />
            </div>
            <div class="shop__product__info col-md-7">
              <h4>{product_name}</h4>
              <p>{product_description}</p>
              <div class="shop__pricing-cart">
                <h5>
                  <span>&#8377;</span>
                  {product_price}
                </h5>
                <button
                  class="btn shop__btn--customize"
                  onClick={removeFromBasket}
                >
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i> remove
                  from cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CheckOutProducts;
