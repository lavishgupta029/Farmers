import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { isAuthenticate, signout } from "./container/auth/index";
import { useStateValue } from "./serviceProvider";
import "./navbar.css";
function Navbar() {
  const [{ basket }] = useStateValue();
  return (
    <header>
      <div className="container home__container">
        <nav className="navbar navbar-expand-lg">
          <NavLink className="navbar-brand home__nav-brand" to="/">
            <strong>Farmer</strong>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
              style={{ fill: "#000000" }}
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#0ecf5f">
                  <path d="M21.5,32.25c-2.58456,-0.03655 -4.98858,1.32136 -6.29153,3.55376c-1.30295,2.2324 -1.30295,4.99342 0,7.22582c1.30295,2.2324 3.70697,3.59031 6.29153,3.55376h129c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376zM21.5,78.83333c-2.58456,-0.03655 -4.98858,1.32136 -6.29153,3.55376c-1.30295,2.2324 -1.30295,4.99342 0,7.22582c1.30295,2.2324 3.70697,3.59031 6.29153,3.55376h129c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376zM21.5,125.41667c-2.58456,-0.03655 -4.98858,1.32136 -6.29153,3.55376c-1.30295,2.2324 -1.30295,4.99342 0,7.22582c1.30295,2.2324 3.70697,3.59031 6.29153,3.55376h129c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376z"></path>
                </g>
              </g>
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto">
              {!isAuthenticate() && (
                <Fragment>
                  <li className="nav-item  home__nav-item">
                    <NavLink className="nav-link home__nav-link" to="./signup">
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item  home__nav-item">
                    <NavLink className="nav-link home__nav-link" to="./signin">
                      Signin
                    </NavLink>
                  </li>
                </Fragment>
              )}
              {isAuthenticate() && (
                <Fragment>
                  <li className="nav-item   home__nav-item">
                    <NavLink
                      className="nav-link home__nav-link"
                      to="./products"
                    >
                      <span>Products</span>
                    </NavLink>
                  </li>
                  <li className="nav-item   home__nav-item">
                    <NavLink
                      className="nav-link home__nav-link"
                      to="./yourorders"
                    >
                      <span>Your orders</span>
                    </NavLink>
                  </li>
                  <li className="nav-item   home__nav-item">
                    <NavLink className="nav-link home__nav-link" to="./reviews">
                      <span>Reviews</span>
                    </NavLink>
                  </li>
                  <li className="nav-item  home__nav-item">
                    <NavLink
                      onClick={() => signout()}
                      className="nav-link home__nav-link"
                      to="/"
                    >
                      <span>Signout</span>
                    </NavLink>
                  </li>
                  <li className="nav-item   home__nav-item">
                    <NavLink
                      className="nav-link home__nav-link"
                      to="./subtotal"
                    >
                      <i
                        className="fa fa-shopping-cart"
                        style={{ fontSize: "1.5rem", marginRight: "4px" }}
                      ></i>
                      <span> {basket.length} </span>
                    </NavLink>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
