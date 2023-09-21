const db = require("../config/db");

const Bus = function (bus) {
  this.bus_number = bus.bus_number;
  this.bus_seat = bus.bus_seat;
  this.bus_number = bus.bus_number;
  this.driver_id = bus.driver_id;
};

Bus.getAll = (result) => {
  let query = "SELECT * FROM buses";

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

Bus.create = (newBus, result) => {
  db.query("INSERT INTO buses SET ?", newBus, (err, res) => {
    if (err) {
      console.log("error", err);
      result(err, null);
      return;
    }

    // console.log("create bus:", { id: res.insertId, ...newBus });
    result(null, { id: res.insertId, ...newBus });
  });
};

Bus.getById = (id, result) => {
  db.query(`SELECT * FROM buses WHERE bus_id = ${id}`, (err, res) => {
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

Bus.updateById = (id, bus, result) => {
  db.query(
    "UPDATE buses SET bus_number = ? ,bus_seat = ?,driver_id=? WHERE bus_id=?",
    [bus.bus_number, bus.bus_seat, bus.driver_id, id],
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
      result(null, { id: id, ...bus });
    }
  );
};

Bus.remove = (id, result) => {
  db.query("DELETE FROM buses WHERE bus_id = ? ", id, (err, res) => {
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

module.exports = Bus;
