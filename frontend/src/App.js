import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Customer from "./pages/Customer";
import Bus from "./pages/Bus";
import Navbar from "./components/Navbar";
import CreateBooking from "./pages/CreateBooking";
import Orders from "./pages/Orders";
import SeatBooking from "./components/SeatBooking";

function App() {
  return (
    <>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" />
        <Route index element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/createbooking" element={<CreateBooking />} />
        <Route path="/order" element={<Orders/>}/>
        <Route path="/seatbooking" element={<SeatBooking/>}/>
      </Routes>
    </>
  );
}

export default App;
