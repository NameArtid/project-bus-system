const Driver = require("../models/DriverModel.js");

exports.getAll = (req, res) => {
  Driver.getAll((err, data) => {
    if (err) res.status(500).send({ message: err.message || "some error" });
    else res.send(data);
  });
};
