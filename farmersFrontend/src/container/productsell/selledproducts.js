import React, { useState } from "react";
import Modal from "react-modal";
import "../../container/product.css";
Modal.setAppElement("#root");
function Selledproduct({
  product_id,
  product_description,
  product_name,
  product_image,
  product_price,
}) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [id, setid] = useState("");
  const cancelOrder = () => {
    return fetch(`http://localhost:3001/api/cancelselledproduct`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const handleClick = (ev) => {
    setmodalIsOpen(true);
    setid(ev.currentTarget.value);
  };
  const callCancel = () => {
    cancelOrder().then((data) => {
      console.log(data);
    });
    window.location.reload();
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
                    onClick={handleClick}
                    value={product_id}
                  >
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    cancel order
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setmodalIsOpen(false)}
                    style={customStyles}
                  >
                    <button
                      className="btn btn-secondary"
                      style={{ padding: "10px" }}
                      onClick={() => setmodalIsOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      class="btn btn-danger"
                      style={{ padding: "10px", marginLeft: "40px" }}
                      onClick={callCancel}
                    >
                      confirm cancel
                    </button>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Selledproduct;
