// AdminDashboard.js (or another parent component)
import React, { useState } from "react";
import Payments from "./Payments";
import PaymentReport from "./Paymentreport";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  // Callback to handle order placement
  const handleOrderPlaced = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <div>
      <Payments onOrderPlaced={handleOrderPlaced} />
      <PaymentReport orders={orders} />
    </div>
  );
};

export default AdminDashboard;
