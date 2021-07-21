const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const shortid = require("shortid");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images");
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
const {
  createProduct,
  getproducts,
  yourorders,
  cancelorder,
  yourselledproducts,
  cancelSelledProducts,
} = require("../controller/products");
router.post("/createproduct", upload.single("image"), createProduct);
router.get("/getproducts", getproducts);
router.post("/yourorders", yourorders);
router.post("/cancelorder", cancelorder);
router.post("/yourselledproducts", yourselledproducts);
router.post("/cancelselledproduct", cancelSelledProducts);
module.exports = router;
