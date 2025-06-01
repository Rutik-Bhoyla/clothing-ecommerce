import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useState, useEffect } from 'react'
import products from '../../public/data/products.json' // ✅ Use direct import instead of fetch

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const foundProduct = products.find(p => p.id.toString() === id)
    if (foundProduct) {
      setProduct(foundProduct)
      if (foundProduct.sizes?.length > 0) {
        setSelectedSize(foundProduct.sizes[0])
      }
    }
  }, [id])

  if (!product)
    return <p className="pt-24 text-center text-gray-500">Product not found.</p>

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity,
    })

    alert(`Added ${quantity} x ${product.name} (Size: ${selectedSize}) to cart!`)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-serif font-bold text-light-text dark:text-dark-text mb-4">
            {product.name}
          </h1>

          <p className="text-light-text dark:text-dark-text mb-6 leading-relaxed">{product.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags.map(tag => (
              <span
                key={tag}
                className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-dark-text px-3 py-1 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-8">${product.price.toFixed(2)}</p>

          {/* Size Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-dark-text">
              Select Size
            </label>
            <select
              value={selectedSize}
              onChange={e => setSelectedSize(e.target.value)}
              className="w-40 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              {product.sizes.map(size => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8 flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700 dark:text-dark-text">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
              className="w-20 text-center border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="bg-gray-900 dark:bg-accent-dark dark:text-black hover:bg-gray-800 dark:hover:bg-accent-light text-white px-8 py-3 rounded-lg font-semibold text-sm transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
