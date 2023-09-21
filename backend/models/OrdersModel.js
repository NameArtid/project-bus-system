const db = require("../config/db");

const Orders = function (orders) {
  this.order_id = orders.order_id;
  this.F_name = orders.F_name;
  this.L_name = orders.L_name;
  this.phone = orders.phone;
  this.booking_id = orders.booking_id;
  this.seat_number = orders.seat_number;
  // this.status = orders.status;
};

Orders.getAll = (result) => {
  let query = "SELECT * FROM orders";

  db.query(query, (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Orders.create = (newOrder, result) => {
  db.query("INSERT INTO orders SET ?", newOrder, (err, res) => {
    if (err) {
      console.log("error", err);
      result(err, null);
      return;
    }

    // console.log("create bus:", { id: res.insertId, ...newBus });
    result(null, { id: res.insertId, ...newOrder });
  });
};

Orders.getById = (id, result) => {
  db.query(`SELECT * FROM orders WHERE order_id = ${id}`, (err, res) => {
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

Orders.updateById = (id, orders, result) => {
  db.query(
    "UPDATE orders SET F_name = ? ,L_name = ?,phone=?,booking_id=?,seat_number=?,status=? WHERE order_id=?",
    [
      orders.F_name,
      orders.L_name,
      orders.phone,
      orders.booking_id,
      orders.seat_number,
      orders.status,
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
      result(null, { id: id, ...orders });
    }
  );
};

Orders.remove = (id, result) => {
  db.query("DELETE FROM orders WHERE order_id = ? ", id, (err, res) => {
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

module.exports = Orders;
