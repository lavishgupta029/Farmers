const connection = require("../config");
const stripe = require("stripe")(
  "sk_test_51HXNwbGzL8FQ6xW2hSDogEZ1Dh3pV9uxPjeqe2JHG1OJ7PSqt7W4z8NkcsWBHpvP5klpUR60B0WOHWWX3GRbRNFC00tG3rPGUY"
);
const { v4: uuidv4 } = require("uuid");
const HttpError = require("../error");
exports.payment = (req, res, next) => {
  const { token, basket, totalAmount, f_id } = req.body;

  const idempotencyKey = uuidv4();
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      return stripe.charges.create(
        {
          amount: Math.round(totalAmount * 100),
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase successful`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              country: token.card.address_country,
            },
          },
        },
        { idempotencyKey }
      );
    })
    .then((result) => {
      const user = {
        buyer_id: f_id,
        name: token.card.name,
        address: {
          line1: token.card.address_line1,
          country: token.card.address_country,
        },
      };

      var sql = `insert into buyer(buyer_id,name,address)values(${
        user.buyer_id
      },"${user.name}","${user.address.line1 + user.address.country}")`;
      connection.query(sql, function (err, result) {
        if (err) {
          console.log(err);
        }
        for (var i = 0; i < basket.length; i++) {
          var sql = ` delete from products where product_id=?`;
          connection.query(sql, basket[i].product_id, function (err, result2) {
            if (err) {
              console.log(err);
            }
            connection.commit(function (err) {
              if (err) {
                console.log(error);
              }
              console.log("success");
            });
          });
        }
        for (var i = 0; i < basket.length; i++) {
          basket[i].product_image = basket[i].product_image.replace(
            /\\/g,
            "\\\\"
          );
          var sql = `insert into orders(buyer_id,seller_id,product_id,product_name,product_price,product_description,seller_phone_no,product_image)values(${f_id},${basket[i].seller_id},${basket[i].product_id},"${basket[i].product_name}",${basket[i].product_price},"${basket[i].product_description}",${basket[i].seller_phone_no},"${basket[i].product_image}")`;
          connection.query(sql, function (err, result2) {
            if (err) {
              console.log(err);
            }
            connection.commit(function (err) {
              if (err) {
                console.log(error);
              }
              console.log("success");
            });
          });
        }
      });
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.Codpayment = (req, res, next) => {
  const { user, basket, f_id, name } = req.body;
  if (!user.line1) {
    const error = new HttpError("please enter your address", 500);
    return next(error);
  }
  if (!user.city) {
    const error = new HttpError("please enter your city", 500);
    return next(error);
  }
  if (!user.pincode || user.pincode.length != 6) {
    const error = new HttpError("please enter valid pincode", 500);
    return next(error);
  }
  var sql = `insert into buyer(buyer_id,name,address)values(${f_id},"${name}","${
    user.line1 + user.city
  }")`;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    for (var i = 0; i < basket.length; i++) {
      var sql = ` delete from products where product_id=?`;
      connection.query(sql, basket[i].product_id, function (err, result2) {
        if (err) {
          console.log(err);
        }
        connection.commit(function (err) {
          if (err) {
            console.log(error);
          }
        });
      });
    }
    for (var i = 0; i < basket.length; i++) {
      basket[i].product_image = basket[i].product_image.replace(/\\/g, "\\\\");
      var sql = `insert into orders(buyer_id,seller_id,product_id,product_name,product_price,product_description,seller_phone_no,product_image)values(${f_id},${basket[i].seller_id},${basket[i].product_id},"${basket[i].product_name}",${basket[i].product_price},"${basket[i].product_description}",${basket[i].seller_phone_no},"${basket[i].product_image}")`;
      connection.query(sql, function (err, result2) {
        if (err) {
          console.log(err);
        }
        connection.commit(function (err) {
          if (err) {
            console.log(error);
          }
        });
      });
    }
    res.status(200).json(result);
  });
};
