const express = require("express");
const BusController = require("../controllers/BusController");
const router = express.Router();

router.route("/").get(BusController.getAll);
router.route("/create").post(BusController.create);
router.route("/:id").get(BusController.getById);
router.route("/:id").put(BusController.updateById);
router.route("/:id").delete(BusController.remove);

module.exports = router;
