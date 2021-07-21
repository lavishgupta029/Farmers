const express = require("express");
const { createReview, getReviews } = require("../controller/reviews");
const router = express.Router();

router.post("/createreview", createReview);
router.get("/getreview", getReviews);

module.exports = router;
