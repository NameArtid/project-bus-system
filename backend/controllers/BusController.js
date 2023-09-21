const Bus = require("../models/BusModel");

exports.getAll = (req, res) => {
  Bus.getAll((err, data) => {
    if (err) res.status(500).send({ message: err.message || "some error" });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  const bus = new Bus({
    bus_number: req.body.bus_number,
    bus_seat: req.body.bus_seat,
    driver_id: req.body.driver_id,
  });

  Bus.create(bus, (err, data) => {
    if (err) res.status(500).send({ message: err.message || "Some error" });
    else res.send(data);
  });
};

exports.getById = (req, res) => {
  Bus.getById(req.params.id, (err, data) => {
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

  Bus.updateById(req.params.id, new Bus(req.body), (err, data) => {
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
  Bus.remove(req.params.id, (err, data) => {
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
    } else res.send({ message: "Bus was deleted successfully" });
  });
};
