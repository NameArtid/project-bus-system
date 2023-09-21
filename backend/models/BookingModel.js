const db = require("../config/db");
// const db = require("../config/db2");

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
    "SELECT *,DATE_FORMAT(travel_date,'%Y-%m-%d') AS travel_date FROM booking";

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

Booking.create = (newBooking, result) => {
  db.query("INSERT INTO booking SET ?", newBooking, (err, res) => {
    if (err) {
      console.log("error", err);
      result(err, null);
      return;
    }

    // console.log("create bus:", { id: res.insertId, ...newBus });
    result(null, { id: res.insertId, ...newBooking });
  });
};

Booking.getById = (id, result) => {
  db.query(`SELECT * FROM booking WHERE booking_id = ${id}`, (err, res) => {
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

Booking.updateById = (id, booking, result) => {
  db.query(
    "UPDATE booking SET travel_date = ? ,travel_time = ?,origin_point=?,destination_point=?,price=?,bus_id=? WHERE booking_id=?",
    [
      booking.travel_date,
      booking.travel_time,
      booking.origin_point,
      booking.destination_point,
      booking.price,
      booking.bus_id,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error:", err);
        result(null, err);
        return;
      }
      if (res.affectedRow == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      // console.log("updated bus:", { id: id, ...bus });
      result(null, { id: id, ...booking });
    }
  );
};

Booking.remove = (id, result) => {
  db.query("DELETE FROM booking WHERE booking_id = ? ", id, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }

    if (res.affectedRow == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    //   console.log("deleted bus with id:", id);
    result(null, res);
  });
};

module.exports = Booking;
