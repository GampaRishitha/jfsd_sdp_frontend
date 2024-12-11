import React, { createContext, useContext, useState } from 'react';

// Create the Orders Context
const OrdersContext = createContext();

// Create a provider component
export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

// Custom hook to use OrdersContext
export const useOrders = () => {
  const context = useContext(OrdersContext);

  if (!context) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }

  return context;
};
