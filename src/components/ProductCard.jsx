import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || null)

  const handleAddToCart = () => {
    if (!selectedSize) return alert('Please select a size.')

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: 1,
      image: product.image,
    })

    alert(`Added 1 x ${product.name} (Size: ${selectedSize}) to cart!`)
  }

  return (
    <div className="group relative bg-primary-light dark:bg-dark-bg border border-border-light dark:border-border-dark p-4 transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Info */}
      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-serif mb-1 group-hover:underline dark:group-hover:underline transition-transform">
            {product.name}
          </h3>
        </Link>

        {/* Price & Cart Button */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-base font-medium">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white dark:bg-white dark:text-black w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <FaPlus className="text-xs" />
          </button>
        </div>

        {/* Size Selector */}
        {product.sizes?.length > 0 && (
          <div className="mt-3 flex gap-2">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`text-xs px-2 py-1 border rounded-full transition ${
                  selectedSize === size
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-white text-black border-black dark:bg-dark-bg dark:text-white dark:border-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
