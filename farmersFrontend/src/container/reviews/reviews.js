import React, { useState, useEffect } from "react";
import Layout from "../../layout/layout";
import { isAuthenticate } from "../auth";
import "./reviews.css";
function Reviews() {
  const [reviews, setreview] = useState({
    review: "",
    error: "",
    success: false,
  });
  const [fetchReviews, setFetchReviews] = useState("");
  const {
    result: { name, f_id },
  } = isAuthenticate();
  const { review, error, success } = reviews;
  async function getReviews() {
    const res = await fetch("http://localhost:3001/api/getreview");
    res
      .json()
      .then((fetchedreviews) => {
        setFetchReviews(fetchedreviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getReviews();
  }, []);
  let myreviews;
  if (fetchReviews) {
    myreviews = fetchReviews.result.map((item) => {
      return (
        <div className="reviews_single">
          <p className="reviews__name">{item.name}</p>
          <p className="reviews__review">{item.review}</p>
        </div>
      );
    });
  } else {
    myreviews = "..loading";
  }
  const handleChange = (name) => (event) => {
    setreview({ ...reviews, error: false, [name]: event.target.value });
  };

  const submittingReview = ({ review }) => {
    const body = {
      review,
      name,
      f_id,
    };
    return fetch(`http://localhost:3001/api/createreview`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submitReview = (event) => {
    event.preventDefault();
    setreview({ ...reviews, error: false });
    submittingReview({ review }).then((data) => {
      if (data?.message) {
        setreview({ ...reviews, error: data.message, success: false });
      } else {
        setreview({
          ...reviews,
          error: "",
          review: "",
          success: true,
        });
      }
    });
  };
  const showError = () => (
    <div
      className="alert alert-danger "
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  const showSuccess = () => (
    <div
      className="alert alert-info "
      style={{ display: success ? "" : "none" }}
    >
      <p>Thank you for your valuable feedback</p>
    </div>
  );
  function User_reviews() {
    return (
      <div style={{ marginTop: "6rem" }} className="container">
        <div className="review__tabs">
          <ul
            className="nav nav-tabs review__nav-tabs nav-justified"
            id="reviewTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link review__nav-link"
                id="home-tab"
                data-toggle="tab"
                href="#customer_reviews"
                role="tab"
              >
                Customer Reviews
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link review__nav-link active active__tab"
                id="profile-tab"
                data-toggle="tab"
                href="#write_reviews"
                role="tab"
              >
                Create Review
              </a>
            </li>
          </ul>
          <div className="tab-content" id="tabReview">
            <div
              class="tab-pane reviews__tab-pane fade show reviews__byuser"
              id="customer_reviews"
              role="tabpanel"
            >
              {myreviews}
            </div>
            <div
              className="tab-pane reviews__tab-pane fade show active"
              id="write_reviews"
              role="tabpanel"
            >
              <h4 class="review__header">Review this product</h4>
              {showError()}
              {showSuccess()}
              <textarea
                value={review}
                className="reviews__textarea"
                placeholder="Description..."
                cols="105"
                rows="7"
                name="review"
                onChange={handleChange("review")}
              ></textarea>
              <button onClick={submitReview} className="btn btn__review">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Layout>{User_reviews()}</Layout>;
}

export default Reviews;
