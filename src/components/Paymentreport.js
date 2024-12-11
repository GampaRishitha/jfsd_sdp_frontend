import React, { useEffect, useState } from "react";
import "./PaymentReport.css"; // Add the CSS file for styling

const PaymentReport = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Retrieve orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  // Function to handle the dispatch action
  const handleDispatch = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = "Dispatched"; // Change the order status to "Dispatched"
    setOrders(updatedOrders);
    // Update orders in localStorage
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="payment-report">
      <h1>Payment Report - New Orders</h1>
      {orders.length > 0 ? (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Artwork Name</th>
              <th>Customer Name</th>
              <th>Customer Address</th>
              <th>Customer Pincode</th>
              <th>Customer Phone</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th>Action</th> {/* New Action column for Dispatch button */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.artworkName}</td>
                <td>{order.customerName}</td>
                <td>{order.customerAddress}</td>
                <td>{order.customerPincode}</td>
                <td>{order.customerPhone}</td>
                <td>{order.paymentMethod}</td>
                <td>{order.status}</td>
                <td>
                  {order.status === "Pending" && (
                    <button
                      onClick={() => handleDispatch(index)}
                      className="dispatch-button"
                    >
                      Dispatch
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No new orders yet.</p>
      )}
    </div>
  );
};

export default PaymentReport;
