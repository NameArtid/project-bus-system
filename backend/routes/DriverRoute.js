const express = require("express");
const DriverController = require("../controllers/DriverController.js");
const router = express.Router();

router.route("/").get(DriverController.getAll);

module.exports = router;
