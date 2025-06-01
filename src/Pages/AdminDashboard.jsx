import { useState, useEffect } from 'react'

export default function AdminDashboard() {
  const [products, setProducts] = useState([])
  const [form, setForm] = useState({ title: '', price: '', image: '', category: '' })

  useEffect(() => {
    // Load mock products (replace with real API call)
    const dummyProducts = [
      { id: 1, title: 'Fit Trouser', price: '40', image: '/Images/FitTrouser.webp', category: 'kids' },
      { id: 2, title: 'Light Jacket', price: '120', image: '/Images/LightJacket.webp', category: 'men' },
    ]
    setProducts(dummyProducts)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAddProduct = () => {
    const newProduct = {
      ...form,
      id: Date.now(),
    }
    setProducts([...products, newProduct])
    setForm({ title: '', price: '', image: '', category: '' })
  }

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 dark:text-dark-text">
      <h1 className="text-3xl font-serif mb-8">Admin Dashboard</h1>

      {/* Product Form */}
      <div className="bg-white dark:bg-dark-bg border p-6 rounded mb-12 shadow">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="border p-2 rounded"
          />
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-2 rounded"
          />
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border p-2 rounded"
          />
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="mt-4 bg-black  text-white px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-accent-light"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow-sm dark:bg-dark-bg">
              <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-2 rounded" />
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">Price: ${product.price}</p>
              <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
              <button
                onClick={() => handleDelete(product.id)}
                className="text-red-600 hover:underline text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
