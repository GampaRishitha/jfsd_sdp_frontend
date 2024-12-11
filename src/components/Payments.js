// Payments.js
import React, { useState } from "react";
import "./Payments.css";

const Payments = () => {
  const [selectedArt, setSelectedArt] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    pincode: "",
    phone: "",
  });

  const [formFilled, setFormFilled] = useState(false);

  const handleArtSelection = (art) => {
    setSelectedArt(art);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!userDetails.name || !userDetails.address || !userDetails.pincode || !userDetails.phone) {
      alert("Please fill in all fields.");
      return;
    }
    setFormFilled(true);
  };

  const handleOrderPlacement = () => {
    if (!selectedArt || !paymentMethod) {
      alert("Please select an artwork and payment method.");
      return;
    }

    const newOrder = {
      artworkName: selectedArt.name,
      customerName: userDetails.name,
      customerAddress: userDetails.address,
      customerPincode: userDetails.pincode,
      customerPhone: userDetails.phone,
      paymentMethod,
      status: "Pending", // Initial status
    };

    // Save the new order in localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    setOrderPlaced(true);
  };

  const sampleArtworks = [
    {
      id: 1,
      name: "Starry Night (7000/-)",
  
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmKWh3VQWNL0dIupNs20o3tpTVBtGgB4yTA&s",
    },
    {
      id: 2,
      name: "Mona Lisa  (10,000/-)",
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "The Scream   (5000/-)",
      image: "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div className="payments-container">
      {orderPlaced ? (
        <div className="order-confirmation">
          <h2>Order Placed Successfully!</h2>
          <p>Your order for <strong>{selectedArt?.name}</strong> has been placed.</p>
          <div className="note"> !!! NOTE: If you have done payment through QR code , ADMIN will verify the PAYMENT done with the Mobile 
            Number you have provided then your order will be Dispatched !!! </div>
        </div>
      ) : (
        <div>
          <h1>Payments</h1>
          {!selectedArt ? (
            <div className="art-selection">
              <h2>Select an Artwork</h2>
              {sampleArtworks.length > 0 ? (
                <div className="art-list">
                  {sampleArtworks.map((art) => (
                    <div key={art.id} className="art-item">
                      <img src={art.image} alt={art.name} className="art-image" />
                      <p>{art.name}</p>
                      <button onClick={() => handleArtSelection(art)}>Buy</button>
                    </div>
                  ))}
                  <div className="note"> !!! NOTE: If you do payment through QR code , ADMIN will verify the PAYMENT done with the Mobile 
                  Number you have provided then your order will be Dispatched !!! </div>
                </div>
              ) : (
                <p>No artworks available at the moment.</p>
              )}
            </div>
          ) : (
            <div>
            
              {!formFilled ? (
                <div className="user-details-form">
                  <h2>Enter Your Details</h2>
                  <form onSubmit={handleFormSubmit}>
                    <div>
                      <label>Name:</label>
                      <input
                        type="text"
                        name="name"
                        value={userDetails.name}
                        onChange={handleUserDetailsChange}
                      />
                    </div>
                    <div>
                      <label>Address:</label>
                      <input
                        type="text"
                        name="address"
                        value={userDetails.address}
                        onChange={handleUserDetailsChange}
                      />
                    </div>
                    <div>
                      <label>Pincode:</label>
                      <input
                        type="text"
                        name="pincode"
                        value={userDetails.pincode}
                        onChange={handleUserDetailsChange}
                      />
                    </div>
                    <div>
                      <label>Phone Number:(**Enter the number with which you are going to pay otherwise the payment will be invalid**)</label>
                      <input
                        type="text"
                        name="phone"
                        value={userDetails.phone}
                        onChange={handleUserDetailsChange}
                      />
                    </div>
                    
                    <button type="submit">Submit</button>
                  </form>
                 
                </div>
              ) : (
                <div className="payment-options">
                  <h2>Selected Artwork: {selectedArt.name}</h2>
                  <h3>Choose Payment Method</h3>
                  <div className="payment-method">
                    <label>
                      <input
                        type="radio"
                        name="payment-method"
                        value="cod"
                        onChange={() => handlePaymentMethodChange("cod")}
                      />
                      Cash on Delivery (COD)
                    </label>
                  </div>
                  <div className="payment-method">
                    <label>
                      <input
                        type="radio"
                        name="payment-method"
                        value="qr"
                        onChange={() => handlePaymentMethodChange("qr")}
                      />
                      Pay via QR Code
                    </label>
                  </div>
                  {paymentMethod === "qr" && (
                    <div className="qr-code">
                      <h4>Scan the QR Code to Pay</h4>
                      <img src="./myqrcode.jpg" alt="QR Code" />
                    </div>
                  )}
                  <button className="finalize-order" onClick={handleOrderPlacement}>
                    Finalize Order
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Payments;
