import React, { createContext, useContext, useState } from 'react'

// Create Cart Context
const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  // Add item or update quantity if already exists (same productId + size)
  function addToCart(item) {
    setCartItems(prevItems => {
      const existingIndex = prevItems.findIndex(
        i => i.id === item.id && i.size === item.size
      )
      if (existingIndex !== -1) {
        const updated = [...prevItems]
        updated[existingIndex].quantity += item.quantity
        return updated
      } else {
        return [...prevItems, item]
      }
    })
  }

  // Update quantity of an item by id and size
  function updateQuantity(id, size, quantity) {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    )
  }

  // Remove an item by id and size
  function removeFromCart(id, size) {
    setCartItems(prevItems =>
      prevItems.filter(item => !(item.id === id && item.size === size))
    )
  }

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
