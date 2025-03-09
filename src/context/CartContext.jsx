import { createContext, useContext, useState, useMemo, useEffect } from "react";
import toast from "react-hot-toast";

// Preserve context reference during HMR
let CartContext;
if (import.meta.hot && import.meta.hot.data?.cartStore) {
  CartContext = import.meta.hot.data.cartStore;
} else {
  CartContext = createContext();
}

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastAction, setLastAction] = useState(null);

  // Toast handling effect
  useEffect(() => {
    if (!lastAction) return;

    const { type, product } = lastAction;
    const messages = {
      add: () => toast.success(`${product.title} added to cart`),
      increment: () => toast.success("Quantity increased"),
      decrement: () => toast.success("Quantity decreased"),
      remove: () => toast.error(`${product.title} removed from cart`),
    };

    messages[type]?.();
    setLastAction(null);
  }, [lastAction]);

  // Memoized context value
  const contextValue = useMemo(
    () => ({
      cartItems,
      addToCart: (product) => {
        setCartItems((prev) => {
          const existing = prev.find((item) => item.id === product.id);
          setLastAction({ type: existing ? "increment" : "add", product });
          return existing
            ? prev.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...prev, { ...product, quantity: 1 }];
        });
      },
      removeFromCart: (productId) => {
        setCartItems((prev) => {
          const product = prev.find((item) => item.id === productId);
          setLastAction({ type: "remove", product });
          return prev.filter((item) => item.id !== productId);
        });
      },
      incrementQuantity: (productId) => {
        setCartItems((prev) => {
          const product = prev.find((item) => item.id === productId);
          setLastAction({ type: "increment", product });
          return prev.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        });
      },
      decrementQuantity: (productId) => {
        setCartItems((prev) => {
          const product = prev.find((item) => item.id === productId);
          const newItems = prev
            .map((item) => {
              if (item.id === productId) {
                return item.quantity > 1
                  ? { ...item, quantity: item.quantity - 1 }
                  : null;
              }
              return item;
            })
            .filter(Boolean);

          setLastAction({
            type: newItems.length < prev.length ? "remove" : "decrement",
            product,
          });
          return newItems;
        });
      },
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [cartItems, isCartOpen]
  );

  // HMR preservation
  if (import.meta.hot) {
    import.meta.hot.dispose((data) => {
      data.cartStore = CartContext;
    });
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

// Custom hook with stable reference
function useCartContext() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCartContext used outside CartProvider");
  return context;
}

export { CartProvider, useCartContext };
