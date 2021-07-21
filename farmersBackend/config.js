const mysql = require("mysql");
const env = require("dotenv");
env.config();

const con = mysql.createConnection({
  host: `${process.env.host}`,
  user: `${process.env.user}`,
  password: `${process.env.password}`,
  database: `${process.env.database}`,
});

con.connect(function (err) {
  if (err) throw err;
  {
    console.log("Connected!");
  }
});

module.exports = con;
