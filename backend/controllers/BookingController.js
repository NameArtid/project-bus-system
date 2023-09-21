const Booking = require("../models/BookingModel");

exports.getAll = (req, res) => {
  Booking.getAll((err, data) => {
    if (err) res.status(500).send({ message: err.message || "some error" });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  const booking = new Booking({
    travel_date: req.body.travel_date,
    travel_time: req.body.travel_time,
    origin_point: req.body.origin_point,
    destination_point: req.body.destination_point,
    price: req.body.price,
    bus_id: req.body.bus_id,
  });

  Booking.create(booking, (err, data) => {
    if (err) res.status(500).send({ message: err.message || "Some error" });
    else res.send(data);
  });
};

exports.getById = (req, res) => {
  Booking.getById(req.params.id, (err, data) => {
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

  Booking.updateById(req.params.id, new Booking(req.body), (err, data) => {
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
  Booking.remove(req.params.id, (err, data) => {
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
    } else res.send({ message: "Booking was deleted successfully" });
  });
};
