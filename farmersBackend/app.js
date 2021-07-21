const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv");
const HttpError = require("./error");
const path = require("path");
env.config();
const bodyparser = require("body-parser");
const authuser = require("./routes/login");
const paymentuser = require("./routes/payment");
const productuser = require("./routes/products");
const reviewuser = require("./routes/reviews");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use("/api", authuser);
app.use("/api", paymentuser);
app.use("/api", productuser);
app.use("/api", reviewuser);
app.use((req, res, next) => {
  const error = new HttpError("Could Not Find this Route", 404);
  throw error;
});

// Error Handling Middleware
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An Unknown Error has Occured" });
});
app.listen(process.env.PORT, () => {
  console.log(`server in on port ${process.env.PORT}`);
});
