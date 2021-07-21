const HttpError = require("../error");
const connection = require("../config");
exports.createProduct = (req, res, next) => {
  const { name, description, price, phone_no, f_id } = req.body;
  if (!name) {
    const error = new HttpError("please enter name", 500);
    return next(error);
  }
  if (!description) {
    const error = new HttpError("please enter description", 500);
    return next(error);
  }
  if (!price) {
    const error = new HttpError("please enter price", 500);
    return next(error);
  }
  if (!phone_no) {
    const error = new HttpError("please enter phone number", 500);
    return next(error);
  }
  const user = {
    product_name: req.body.name,
    product_description: req.body.description,
    product_price: req.body.price,
    seller_phone_no: req.body.phone_no,
    seller_id: req.body.f_id,
  };
  if (req.file) {
    user.product_image = req.file.path;
  } else {
    const error = new HttpError("please select image", 500);
    return next(error);
  }
  try {
    connection.query("insert into products set ?", user);
  } catch (err) {
    if (err) console.log(err);
  }

  res.status(200).json({ user });
};

exports.getproducts = (req, res) => {
  connection.query("SELECT * FROM PRODUCTS", function (err, result, fields) {
    if (err) throw err;
    res.status(200).json({ result });
  });
};
exports.yourorders = (req, res) => {
  const { f_id } = req.body;
  var sql = "select * from orders where buyer_id=?";
  connection.query(sql, f_id, function (error, result) {
    if (error) console.log(error);
    res.status(200).json({ result });
  });
};
exports.yourselledproducts = (req, res) => {
  const { f_id } = req.body;

  var sql = "select * from products where seller_id=?";
  connection.query(sql, f_id, function (error, result) {
    if (error) console.log(error);
    res.status(200).json({ result });
  });
};
exports.cancelorder = (req, res) => {
  const { id } = req.body;

  var sql = "select * from orders where product_id=?";
  connection.query(sql, id, function (error, result) {
    if (error) console.log(error);

    const {
      buyer_id,
      product_description,
      product_id,
      product_image,
      product_name,
      product_price,
      seller_phone_no,
      seller_id,
    } = result[0];
    result[0].product_image = result[0].product_image.replace(/\\/g, "\\\\");
    var sql2 = `insert into products(seller_id,product_name,product_price,product_description,seller_phone_no,product_image)values(${result[0].seller_id},"${result[0].product_name}",${result[0].product_price},"${result[0].product_description}",${result[0].seller_phone_no},"${result[0].product_image}")`;
    connection.query(sql2, function (err, result2) {
      if (err) console.log(err);
      console.log(result2);
    });
    res.status(200).json({
      buyer_id,
      product_description,
      product_id,
      product_image,
      product_name,
      product_price,
      seller_phone_no,
      seller_id,
    });
  });
  var sql = "delete from orders where product_id=?";
  connection.query(sql, id, function (error, result) {
    if (error) console.log(error);
    console.log(result);
  });
};
exports.cancelSelledProducts = (req, res) => {
  const { id } = req.body;
  var sql = "delete from products where product_id=?";
  connection.query(sql, id, function (error, result) {
    if (error) console.log(error);
    res.status(200).json({ result });
  });
};
