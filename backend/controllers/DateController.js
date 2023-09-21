const Booking = require('../models/DateModel')

exports.getAll = (req, res) => {
    Booking.getAll((err, data) => {
      if (err) res.status(500).send({ message: err.message || "some error" });
      else res.send(data);
    });
  };

  exports.getById = (req, res) => {
    Booking.getById(req.params.date, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found ${req.params.date}.`,
          });
        } else {
          res.status(500).send({
            message: "Error " + req.params.date,
          });
        }
      } else res.send(data);
    });
  };