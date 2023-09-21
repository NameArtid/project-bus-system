const db = require("../config/db");

const Booking = function (booking) {
  this.booking_id = booking.booking_id;
  this.travel_date = booking.travel_date;
  this.travel_time = booking.travel_time;
  this.origin_point = booking.origin_point;
  this.destination_point = booking.destination_point;
  this.price = booking.price;
  this.bus_id = booking.bus_id;
};

Booking.getAll = (result) => {
  let query =
    "SELECT  *FROM booking";

  db.query(query, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }
    //   console.log("driver:", res);
    result(null, res);
  });
};
Booking.getById = (date, result) => {
  db.query(`SELECT * FROM booking WHERE  DATE_FORMAT(travel_date,'%Y-%m-%d') AS travel_date = ${date}`, (err, res) => {
    if (err) {
      console.log("error :", err);
      result(err, null);
      return;
    }

    if (res.length) {
      //   console.log("found bus:", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

module.exports = Booking;
