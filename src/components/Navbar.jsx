import { Link } from 'react-router-dom'
import { FaShoppingBag } from 'react-icons/fa'
import { useEffect, useState, useRef } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const lastScrollY = useRef(0)
  const [loaded, setLoaded] = useState(false)  // for load animation

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY <= 0) {
        setShowNav(true)
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down - hide navbar
        setShowNav(false)
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up - show navbar
        setShowNav(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinkStyle =
    'relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-current after:transition-all after:duration-300 hover:after:w-full'

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text border-b border-light-border dark:border-dark-border
        px-6 py-4 transition-transform duration-300 ease-in-out
        ${showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        ${loaded ? 'opacity-100' : 'opacity-0'}
      `}
      style={{ transitionProperty: 'transform, opacity' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Brand */}
        <Link to="/" className="text-2xl font-serif tracking-wide">
          MinimalCo
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-light">
          <Link to="/products/men" className={navLinkStyle}>MEN</Link>
          <Link to="/products/women" className={navLinkStyle}>WOMEN</Link>
          <Link to="/products/kids" className={navLinkStyle}>KIDS</Link>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-sm font-light">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search"
            className="hidden md:block border border-light-border dark:border-dark-border rounded-full px-4 py-1 text-sm bg-transparent focus:outline-none placeholder:opacity-70"
          />

          <button onClick={() => setDark(!dark)} className="focus:outline-none rounded px-2 py-1 border border-light-border dark:border-dark-border hover:bg-black dark:hover:text-black hover:text-white  dark:hover:bg-accent-dark transition">
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>

          {/* Cart Icon */}
          <Link to="/cart" className="hover:opacity-70 transition">
            <FaShoppingBag className="text-xl" />
          </Link>

          {/* Profile */}
          <Link to="/profile">
            <img
              src="https://i.pravatar.cc/30"
              alt="Profile"
              className="w-7 h-7 rounded-full object-cover hover:ring-2 hover:ring-gray-400 dark:hover:ring-gray-600 transition"
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-sm font-light px-1">
          <Link to="/products/men" className={navLinkStyle}>MEN</Link>
          <Link to="/products/women" className={navLinkStyle}>WOMEN</Link>
          <Link to="/products/kids" className={navLinkStyle}>KIDS</Link>
          <Link to="/cart" className={navLinkStyle}>Cart</Link>
          <Link to="/profile" className={navLinkStyle}>Account</Link>
        </div>
      )}
    </nav>
  )
}
