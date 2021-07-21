import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../layout/layout";
import { isAuthenticate } from "./auth/index";
import "./buyorsell.css";
function UserPage() {
  function BuyOrSell() {
    const {
      result: { name },
    } = isAuthenticate();
    return (
      <div>
        {" "}
        <div class="container buy-sell__card">
          <div class="row buy-sell__form__container">
            <div class="col-md-3 buy-sell__card-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 172 172"
                style={{ fill: "#000000;" }}
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#ffffff">
                    <path d="M20.5325,17.2c-5.63031,0 -10.2125,4.66281 -10.2125,10.32v56.4375c-1.35719,0.94063 -2.70094,1.935 -3.9775,3.01c-1.53187,1.29 -1.72,3.62813 -0.43,5.16c1.29,1.53188 3.62813,1.70656 5.16,0.43c8.73438,-7.35031 19.76656,-11.395 31.175,-11.395c26.78094,0 48.59,21.80906 48.59,48.59c0,2.00219 1.65281,3.5475 3.655,3.5475c2.00219,0 3.5475,-1.54531 3.5475,-3.5475c0,-0.81969 -0.06719,-1.65281 -0.1075,-2.4725h49.88c5.21375,0 11.90563,-4.79719 13.76,-9.89l9.9975,-27.305c0.86,-2.365 0.55094,-4.75687 -0.86,-6.7725c-1.77375,-2.52625 -5.22719,-4.1925 -8.815,-4.1925h-62.8875l-14.19,-52.3525c-1.24969,-5.89906 -5.21375,-9.5675 -10.2125,-9.5675zM141.04,34.185c-15.18437,0 -24.295,8.82844 -24.295,23.65v14.405h21.07v-13.76c0,-8.0625 2.35156,-10.01094 3.01,-10.105c0.99438,0.06719 1.94844,-0.28219 2.6875,-0.9675c0.73906,-0.68531 1.1825,-1.67969 1.1825,-2.6875v-6.88c0,-2.00219 -1.65281,-3.655 -3.655,-3.655zM27.52,34.4h42.8925l8.385,30.96h-51.2775zM41.28,89.44c-22.76312,0 -41.28,18.51688 -41.28,41.28c0,22.76313 18.51688,41.28 41.28,41.28c22.76313,0 41.28,-18.51687 41.28,-41.28c0,-22.76312 -18.51687,-41.28 -41.28,-41.28zM41.28,115.24c8.53281,0 15.48,6.94719 15.48,15.48c0,8.53281 -6.94719,15.48 -15.48,15.48c-8.53281,0 -15.48,-6.94719 -15.48,-15.48c0,-8.53281 6.94719,-15.48 15.48,-15.48zM158.1325,131.0425c-3.25187,1.935 -6.90687,3.1175 -10.32,3.1175h-4.6225c2.88906,2.52625 4.73,6.19469 4.73,10.32c0,7.57875 -6.18125,13.76 -13.76,13.76c-7.57875,0 -13.76,-6.18125 -13.76,-13.76c0,-4.12531 1.84094,-7.79375 4.73,-10.32h-16.4475c-1.31687,3.225 -2.0425,6.70531 -2.0425,10.32c0,15.17094 12.34906,27.52 27.52,27.52c15.17094,0 27.52,-12.34906 27.52,-27.52c0,-4.78375 -1.24969,-9.36594 -3.5475,-13.4375z"></path>
                  </g>
                </g>
              </svg>

              <h3>Welcome</h3>
              <h5>
                <em>{name}</em>
              </h5>
              <p>You are always just a story away!</p>
              <br />
            </div>
            <div class="col-md-9 buy-sell__card-right">
              <ul
                class="nav nav-tabs buy-sell__nav-tabs nav-justified"
                id="myTab"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link buy-sell__nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#buyer"
                    role="tab"
                  >
                    Buyer
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link buy-sell__nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#seller"
                    role="tab"
                  >
                    Seller
                  </a>
                </li>
              </ul>

              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane buy-sell__tab-pane fade show active"
                  id="buyer"
                  role="tabpanel"
                >
                  <h3 class="buy-sell__card__heading">Join as a Buyer</h3>

                  <div class="row buy-sell__perks">
                    <div class="col-md-6 buy-sell--flex__row">
                      <img
                        src="https://img.icons8.com/color/48/000000/package.png"
                        alt="8"
                      />
                      <div class="buy-sell--flex-perks">
                        <h3 class="buy-sell__perks__header">Your orders</h3>
                        <p class="buy-sell__perks__info">
                          Packed with great care
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 buy-sell--flex__row">
                      <img
                        src="https://img.icons8.com/fluent/48/000000/mobile-shop-secured-login.png"
                        alt="9"
                      />
                      <div class="buy-sell--flex-perks">
                        <h3 class="buy-sell__perks__header">
                          Join and Security
                        </h3>
                        <p class="buy-sell__perks__info">
                          Secured as if its ours
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 buy-sell--flex__row buy-sell__mobile__bottom">
                      <img
                        class="img1-2"
                        src="https://img.icons8.com/fluent/48/000000/order-delivered.png"
                        alt="3"
                      />
                      <div class="buy-sell--flex-perks">
                        <h3 class="buy-sell__perks__header">Your Adresses</h3>
                        <p class="buy-sell__perks__info">
                          Orders deliverd to your exact address
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 buy-sell--flex__row">
                      <img
                        src="https://img.icons8.com/fluent/48/000000/online-payment-.png"
                        alt="4"
                      />
                      <div class="buy-sell--flex-perks">
                        <h3 class="buy-sell__perks__header">Payment</h3>
                        <p class="buy-sell__perks__info">
                          Provide most secure payment process
                        </p>
                      </div>
                    </div>

                    <div>
                      <form action="">
                        <NavLink to="/products">
                          <button className="btn buy-sell__btn--customize buy-sell__btn-seller">
                            Apply as Buyer
                          </button>
                        </NavLink>
                      </form>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane buy-sell__tab-pane fade show"
                  id="seller"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h3 class="buy-sell__card__heading">Join as a Seller</h3>

                  <div class="row buy-sell__perks">
                    <div class="col-md-6 buy-sell--flex__row">
                      <img
                        src="https://img.icons8.com/fluent/48/000000/online-order.png"
                        alt="5"
                      />
                      <div class="buy-sell--flex-perks">
                        <h3 class="buy-sell__perks__header">E-Commerce</h3>
                        <p class="buy-sell__perks__info">
                          Your next big sales channel
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 buy-sell--flex__row">
                      <img
                        src="https://img.icons8.com/fluent/48/000000/anchor-nodes.png"
                        alt="6"
                      />
                      <div class="buy-sell--flex-perks">
                        <h3 class="buy-sell__perks__header">Increased Reach</h3>
                        <p class="buy-sell__perks__info">
                          Reach crores of customers
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 buy-sell--flex__row buy-sell__mobile__bottom">
                      <img
                        class="buy-sell__img2-3"
                        src="https://img.icons8.com/fluent/48/000000/initiate-money-transfer.png"
                        alt="7"
                      />
                      <div class="buy-sell--flex-perks">
                        <h3 class="buy-sell__perks__header">Payment</h3>
                        <p class="buy-sell__perks__info">
                          Receive timely payments
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 buy-sell--flex__row">
                      <img
                        src="https://img.icons8.com/fluent/48/000000/reseller.png"
                        alt="2"
                      />
                      <div class="buy-sell--flex-perks">
                        <h3 class="buy-sell__perks__header">Business</h3>
                        <p class="buy-sell__perks__info">
                          Business expansion like never before
                        </p>
                      </div>
                    </div>

                    <form action="">
                      <NavLink to="/sellproducts">
                        <button className="btn buy-sell__btn--customize buy-sell__btn-buyer">
                          Apply as Seller
                        </button>
                      </NavLink>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Layout>{BuyOrSell()}</Layout>
    </div>
  );
}

export default UserPage;
