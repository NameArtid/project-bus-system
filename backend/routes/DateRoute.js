const express = require("express");
const BookingDate = require("../controllers/DateController");
const router = express.Router();

router.route("/").get(BookingDate.getAll);
router.route("/:date").get(BookingDate.getById);

module.exports = router;