import React, { useState } from 'react'

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Order placed successfully!')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-6">Checkout</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shipping Address */}
        <div>
          <h3 className="text-xl font-medium mb-4">Shipping Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 border p-3 rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full mb-4 border p-3 rounded"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full mb-4 border p-3 rounded"
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={formData.zip}
            onChange={handleChange}
            required
            className="w-full mb-4 border p-3 rounded"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full mb-4 border p-3 rounded"
          />
        </div>

        {/* Order Summary */}
        <div>
          <h3 className="text-xl font-medium mb-4">Order Summary</h3>
          <div className="border p-4 rounded space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$120.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$130.00</span>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  )
}
