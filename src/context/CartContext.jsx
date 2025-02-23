import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const contextValue = useMemo(
    () => ({
      cartItems,
      addToCart: (product) => {
        setCartItems((prev) => {
          const existingItem = prev.find((item) => item.id === product.id);
          if (existingItem) {
            return prev.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }
          return [...prev, { ...product, quantity: 1 }];
        });
      },
      removeFromCart: (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
      },
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [cartItems, isCartOpen]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
