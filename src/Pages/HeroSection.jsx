// components/Hero.jsx
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-[#F8F5F2] dark:bg-black text-[#111] dark:text-white min-h-screen flex items-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">

        {/* Text Left */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">
            Refined Essentials <br />
            for the Modern Minimalist
          </h1>
          <p className="text-base md:text-lg font-light max-w-md">
            Discover timeless silhouettes crafted with purpose. Clothing that feels like a second skin, designed for people who appreciate quality, subtlety, and sustainability.
          </p>
          <Link
            to="/products"
            className="inline-block border border-black dark:border-dark-border px-12 py-3 text-sm tracking-[0.2em] font-serif uppercase text-black dark:text-dark-text hover:bg-black dark:hover:bg-accent-dark hover:text-white dark:hover:text-black transition-all duration-300"
          >
            Explore Collection
          </Link>
        </div>

        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Hero"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
