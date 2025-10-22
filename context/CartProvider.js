"use client";

import { useState, useEffect, createContext, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [setConfirmedOrders] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

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

  const confirmedOrders = () => {
    setConfirmedOrders([...cart]);
    setCart([]);
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

  const getOrderTotal = () => {
    return confirmedOrders.reduce((total, item) => {
      const price = item.salePrice !== null ? item.salePrice : item.price;
      return total + price * item.quantity;
    }, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = item.salePrice !== null ? item.salePrice : item.price;
      return total + price * item.quantity;
    }, 0);
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
        getOrderTotal,
        isLoaded,
        confirmedOrders,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
