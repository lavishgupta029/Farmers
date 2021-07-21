import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/layout";
import { isAuthenticate } from "../auth";
import seller_image from "./undraw_product_teardown_elol.png";
import "./sellproducts.css";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
function Sellproducts() {
  const [values, setvalues] = useState({
    name: "",
    description: "",
    price: "",
    error: "",
    image: "",
    phone_no: "",
    success: false,
  });
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00a152",
      },
    },
  });
  const {
    result: { f_id },
  } = isAuthenticate();
  const { name, description, price, error, image, success, phone_no } = values;
  const handleChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value });
  };
  const handleChangeimage = (event) => {
    setvalues({ ...values, error: false, image: event.target.files[0] });
  };
  const Product = (user) => {
    const data = new FormData();
    data.append("name", user.name);
    data.append("image", user.image);
    data.append("price", user.price);
    data.append("description", user.description);
    data.append("phone_no", user.phone_no);
    data.append("f_id", user.f_id);
    return fetch(`http://localhost:3001/api/createproduct`, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    setvalues({ ...values, error: false });
    Product({ name, image, description, price, phone_no, f_id }).then(
      (data) => {
        if (data?.message) {
          setvalues({ ...values, error: data.message, success: false });
        } else {
          setvalues({
            ...values,
            name: "",
            description: "",
            image: "",
            price: "",
            error: "",
            phone_no: "",
            success: true,
          });
        }
      }
    );
  };
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      product added
    </div>
  );
  const productForm = () => {
    return (
      <div style={{ paddingTop: "70px" }} class="addProduct_container">
        <div class="addProduct__img">
          <img src={seller_image} />
        </div>
        <div class="add_product-content">
          <form className="form__seller-page">
            <h2 class="addProduct__title">Add Product</h2>
            {showError()}
            {showSuccess()}
            <div class="input-div input-div__one">
              <div class="i">
                <i
                  style={{ marginRight: "10px", marginTop: "20px" }}
                  class="fas fa-seedling"
                ></i>
              </div>
              <div class="div">
                <TextField
                  style={{ width: "20rem" }}
                  id="standard-basic"
                  label="Product name"
                  type="text"
                  className="form-control"
                  value={values.name}
                  name="name"
                  onChange={handleChange("name")}
                />
              </div>
            </div>

            <div class="input-div input-div__one">
              <div class="i">
                <i
                  style={{ marginRight: "10px", marginTop: "20px" }}
                  class="fas fa-phone"
                ></i>
              </div>
              <div class="div">
                <TextField
                  type="text"
                  style={{ width: "20rem" }}
                  id="standard-basic"
                  label="Phone number"
                  value={values.phone_no}
                  name="phone_no"
                  onChange={handleChange("phone_no")}
                />
              </div>
            </div>

            <div class="input-div input-div__one">
              <div class="i">
                <i
                  style={{ marginRight: "10px", marginTop: "20px" }}
                  class="fas fa-images"
                ></i>
              </div>
              <div class="div">
                <TextField
                  type="file"
                  style={{ width: "20rem", marginTop: "10px" }}
                  id="standard-basic"
                  name="image"
                  onChange={handleChangeimage}
                />
              </div>
            </div>

            <div class="input-div input-div__one">
              <div class="i">
                <i
                  style={{ marginRight: "10px", marginTop: "20px" }}
                  class="fas fa-audio-description"
                ></i>
              </div>
              <div class="div">
                <TextField
                  type="text"
                  style={{ width: "20rem" }}
                  id="standard-basic"
                  label="Description"
                  value={values.description}
                  name="description"
                  onChange={handleChange("description")}
                />
              </div>
            </div>

            <div class="input-div input-div__one">
              <div class="i">
                <i
                  style={{ marginRight: "10px", marginTop: "20px" }}
                  class="fas fa-rupee-sign"
                ></i>
              </div>
              <div class="div">
                <TextField
                  type="number"
                  style={{ width: "20rem" }}
                  id="standard-basic"
                  label="cost"
                  name="price"
                  value={values.price}
                  onChange={handleChange("price")}
                />
              </div>
            </div>
            <button onClick={clickSubmit} className="btn btn__seller-form">
              add product
            </button>
            <Link to="/yourselledproducts">
              <button className="btn btn-primary">
                if you want to delete your existing product click here
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>{productForm()}</Layout>
      </ThemeProvider>
    </div>
  );
}

export default Sellproducts;
