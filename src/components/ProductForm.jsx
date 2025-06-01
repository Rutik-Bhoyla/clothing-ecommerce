// components/ProductForm.jsx
import { useState, useEffect } from 'react'

export default function ProductForm({ onSubmit, editingProduct }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name)
      setPrice(editingProduct.price)
      setCategory(editingProduct.category)
    } else {
      setName('')
      setPrice('')
      setCategory('')
    }
  }, [editingProduct])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !price || !category) return
    onSubmit({
      id: editingProduct?.id || null,
      name,
      price: parseFloat(price),
      category,
    })
    setName('')
    setPrice('')
    setCategory('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">
        {editingProduct ? 'Edit Product' : 'Add New Product'}
      </h2>
      <input
        className="block w-full border rounded px-3 py-2"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="block w-full border rounded px-3 py-2"
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        className="block w-full border rounded px-3 py-2"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        {editingProduct ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  )
}
