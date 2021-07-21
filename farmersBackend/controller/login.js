const connection = require("../config");
const bcrypt = require("bcrypt");
const HttpError = require("../error");
const jwt = require("jsonwebtoken");
exports.signup = (req, res, next) => {
  {
    const { name, email, password, password2 } = req.body;
    if (!name) {
      const error = new HttpError("please enter name", 500);
      return next(error);
    }
    if (!email) {
      const error = new HttpError("please enter email", 500);
      return next(error);
    }
    if (password != password2) {
      const error = new HttpError("Passwords do not match", 500);
      return next(error);
    }

    if (password.length < 6) {
      const error = new HttpError(
        "Password must be at least 6 characters",
        500
      );
      return next(error);
    }
    connection.query(
      "SELECT email FROM farmers WHERE email = ?",
      email,
      async function (error, result) {
        if (error) throw error;
        if (result.length === 0) {
          let hashedPassword;
          try {
            hashedPassword = await bcrypt.hash(req.body.password, 10);
          } catch (err) {
            if (err) console.log(err);
          }
          const users = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
          };
          try {
            await connection.query("INSERT INTO farmers SET ?", users);
          } catch (err) {
            if (err) console.log(err);
          }
          res.status(200).json({ users });
        } else {
          const error = new HttpError("email id already exists", 500);
          return next(error);
        }
      }
    );
  }
};
exports.signin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email) {
    const error = new HttpError("please enter email", 500);
    return next(error);
  }
  if (!password) {
    const error = new HttpError("Please enter password", 500);
    return next(error);
  }

  connection.query(
    "select * from farmers where email=?",
    [email],
    function (error, result) {
      if (error) {
        return res.status(200).json({ message: error });
      } else {
        if (result.length > 0) {
          bcrypt.compare(
            password,
            result[0].password,
            function (err, response) {
              if (response == true) {
                const token = jwt.sign(
                  { _id: result.f_id },
                  process.env.JWT_SECRET
                  // { expiresIn: "1h" }
                );

                const [{ f_id, name, email }] = result;
                res.status(200).json({ token, result: { f_id, name, email } });
              } else {
                const error = new HttpError(
                  "email and password does not match",
                  500
                );
                return next(error);
              }
            }
          );
        } else {
          const error = new HttpError("email id does not exist", 500);
          return next(error);
        }
      }
    }
  );
};

exports.signout = (req, res) => {
  res.status(200).json({ message: "signout successful" });
};
