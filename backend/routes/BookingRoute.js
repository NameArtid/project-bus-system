const express = require("express");
const BookingController = require("../controllers/BookingController");
const router = express.Router();

router.route("/").get(BookingController.getAll);
router.route("/create").post(BookingController.create);
router.route("/:id").get(BookingController.getById);
router.route("/:id").put(BookingController.updateById);
router.route("/:id").delete(BookingController.remove);

module.exports = router;

