const express = require("express");
const router = express.Router();

const { payment, Codpayment } = require("../controller/payment");

router.post("/payment", payment);
router.post("/Codpayment", Codpayment);
module.exports = router;
