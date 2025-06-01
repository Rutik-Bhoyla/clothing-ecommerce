import { useParams } from 'react-router-dom'
import { useState } from 'react'
import mockProducts from '../../public/data/products.json'
import ProductCard from '../components/ProductCard'

export default function ProductListPage() {
  const { category } = useParams()
  const [selectedSizes, setSelectedSizes] = useState([])
  const [priceRange, setPriceRange] = useState([0, 1000])

  function toggleSize(size) {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    )
  }

  const priceOptions = [
    { label: 'Under $30', range: [0, 30] },
    { label: '$30 - $60', range: [30, 60] },
    { label: 'Above $60', range: [60, 1000] }
  ]

  const filteredProducts = mockProducts.filter(product => {
    if (category) {
      const catLower = category.toLowerCase()
      const inCategory = product.category.toLowerCase() === catLower
      const inTags = product.tags?.some(tag => tag.toLowerCase() === catLower)
      if (!inCategory && !inTags) return false
    }

    if (
      selectedSizes.length > 0 &&
      !product.sizes.some(size => selectedSizes.includes(size))
    )
      return false

    if (
      product.price < priceRange[0] ||
      product.price > priceRange[1]
    )
      return false

    return true
  })

  return (
    <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 dark:text-dark-text">
      <h1 className="text-4xl font-serif uppercase tracking-wide text-primary-dark mb-12 animate-fade-in">
        {category || 'All'} Collection
      </h1>

      {/* Filters */}
      <div className="mb-14 flex flex-wrap gap-10 animate-fade-in delay-100">
        {/* Size Filters */}
        <div>
          <h3 className="font-medium text-sm uppercase mb-3 text-text-dark">Sizes</h3>
          <div className="flex gap-2 flex-wrap">
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={`px-4 py-1.5 rounded-full border transition-all duration-200 text-sm uppercase tracking-wide
                  ${
                    selectedSizes.includes(size)
                      ? 'bg-accent-dark text-white border-transparent'
                      : 'bg-transparent border-border-light text-text-dark hover:bg-accent-light hover:text-white'
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price Filters */}
        <div>
          <h3 className="font-medium text-sm uppercase mb-3 text-text-dark">Price</h3>
          <div className="flex gap-2 flex-wrap">
            {priceOptions.map(({ label, range }) => (
              <button
                key={label}
                onClick={() => setPriceRange(range)}
                className={`px-4 py-1.5 rounded-full border transition-all duration-200 text-sm uppercase tracking-wide
                  ${
                    priceRange[0] === range[0] && priceRange[1] === range[1]
                      ? 'bg-accent-dark text-white border-transparent'
                      : 'bg-transparent border-border-light text-text-dark hover:bg-accent-light hover:text-white'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-border-dark">No products found with these filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 animate-fade-in delay-200">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
