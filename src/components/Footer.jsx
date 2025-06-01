// components/Footer.jsx
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#F8F5F2] dark:bg-dark-bg  text-light-text dark:text-dark-text px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-serif mb-2">MinimalCo</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Modern essentials for timeless style.</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <a href="/" className="hover:underline">Home</a>
          <a href="/products" className="hover:underline">Shop</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        {/* Social */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-gray-500 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-500 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-500 transition"><FaFacebookF /></a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-sm text-gray-500 dark:text-light-bg">
        © {new Date().getFullYear()} MinimalCo. All rights reserved.
      </div>
    </footer>
  )
}