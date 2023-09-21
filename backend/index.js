const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const db = require("./config/db.js");
// const db2 =require('./config/db2')
const routesDriver = require("./routes/DriverRoute");
const routesBus = require("./routes/BusRoute");
const routesBooking = require("./routes/BookingRoute");
const routesOrders = require("./routes/OrdersRoute");
const routesDate = require("./routes/DateRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Hello API" });
});

app.use("/api/driver", routesDriver);
app.use("/api/bus", routesBus);
app.use("/api/booking", routesBooking);
app.use("/api/orders", routesOrders);
app.use("/api/dates", routesDate);

app.listen(process.env.PORT, () => {
  console.log("Server Running!!!");
});
