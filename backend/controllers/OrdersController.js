const Orders = require("../models/OrdersModel");

exports.getAll = (req, res) => {
  Orders.getAll((err, data) => {
    if (err) res.status(500).send({ message: err.message || "some error" });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  const orders = new Orders({
    F_name: req.body.F_name,
    L_name: req.body.L_name,
    phone: req.body.phone,
    booking_id: req.body.booking_id,
    seat_number: req.body.seat_number,
    status: req.body.status,
  });

  Orders.create(orders, (err, data) => {
    if (err) res.status(500).send({ message: err.message || "Some error" });
    else res.send(data);
  });
};

exports.getById = (req, res) => {
  Orders.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.updateById = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content con not empty",
    });
  }
  console.log(req.body);

  Orders.updateById(req.params.id, new Orders(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error update" + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.remove = (req, res) => {
  Orders.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete" + req.params.id,
        });
      }
    } else res.send({ message: "Orders was deleted successfully" });
  });
};
