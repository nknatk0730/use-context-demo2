import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItems = (title, price) => {
    setItems((prev) => [...prev, { title, price }]);
  };

  return (
      <CartContext.Provider value={{items, addItems}}>
        {children}
    </CartContext.Provider>
  )
};