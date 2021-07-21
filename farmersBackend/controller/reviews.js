const HttpError = require("../error");
const connection = require("../config");

exports.createReview = (req, res, next) => {
  const { review, f_id, name } = req.body;
  if (!review) {
    const error = new HttpError("please write a review", 500);
    return next(error);
  }
  var sql = `insert into reviews(reviewer_id,name,review)values(${f_id},"${name}","${review}")`;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result);
    }
  });
};

exports.getReviews = (req, res, next) => {
  connection.query("SELECT * FROM REVIEWS where 1=1", function (err, result) {
    if (err) throw err;
    res.status(200).json({ result });
  });
};
