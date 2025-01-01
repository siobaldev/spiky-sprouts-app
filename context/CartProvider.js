"use client";

import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);

      if (existingItem) {
        if (existingItem.quantity >= plant.quantity) return prevCart;

        return prevCart.map((item) =>
          item.id === plant.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...prevCart,
        { ...plant, quantity: 1, plantStock: plant.quantity },
      ];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      const plant = prevCart.find((item) => item.id === productId);

      if (newQuantity > plant.plantStock) {
        return prevCart;
      }

      if (newQuantity < 1) {
        return prevCart;
      }

      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      );
    });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
