const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

var host = process.env.HOST;
if (process.env.NODE_ENV == "production") {
  host = process.env.SERVER;
}

const connection = mysql.createConnection({
  host: host,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("DB " + connection.state);
});

module.exports = connection;
