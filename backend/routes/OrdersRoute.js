const express = require("express");
const OrdersController = require("../controllers/OrdersController");
const router = express.Router();

router.route("/").get(OrdersController.getAll);
router.route("/create").post(OrdersController.create);
router.route("/:id").get(OrdersController.getById);
router.route("/:id").put(OrdersController.updateById);
router.route("/:id").delete(OrdersController.remove);

module.exports = router;
