import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-serif font-bold mb-6 dark:text-dark-text">Your Cart is Empty</h1>
        <p className="text-gray-700 dark:text-dark-text">
          Looks like you haven't added anything to your cart yet.
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-24 max-w-5xl">
      <h1 className="text-3xl font-serif font-bold mb-10 text-gray-900 dark:text-dark-text">Shopping Cart</h1>

      <div className="flex flex-col space-y-6">
        {cartItems.map(item => (
          <div
            key={`${item.id}-${item.size}`}
            className="flex items-center border-b border-gray-300 pb-6"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded mr-6"
            />

            {/* Product Info */}
            <div className="flex-1">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-dark-text">{item.name}</h2>
              <p className="text-gray-700 dark:text-dark-text">Size: {item.size}</p>
              <p className="text-gray-900 font-semibold dark:text-dark-text">${item.price.toFixed(2)}</p>
            </div>

            {/* Quantity */}
            <div>
              <label className="sr-only">Quantity</label>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={e =>
                  updateQuantity(item.id, item.size, Number(e.target.value))
                }
                className="border border-gray-300 rounded px-3 py-1 w-20 text-center"
              />
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.id, item.size)}
              className="ml-6 text-red-600 hover:text-red-800 font-semibold"
              aria-label={`Remove ${item.name} size ${item.size} from cart`}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-10 flex justify-end items-center gap-6">
        <p className="text-xl font-semibold dark:text-dark-text">Total: ${totalPrice.toFixed(2)}</p>
        <button
          onClick={() => alert('Proceeding to checkout (mock)')}
          className="bg-gray-900 text-white dark:bg-light-bg dark:text-black px-6 py-3 rounded hover:bg-gray-800 dark:hover:bg-accent-light transition"
        >
          Checkout
        </button>
      </div>
    </div>
  )
}
