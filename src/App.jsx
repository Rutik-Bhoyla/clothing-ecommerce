import React from 'react'
import CheckoutPage from './pages/CheckoutPage'
import Footer from './components/Footer'
import HomePage from './Pages/HomePage'
import ProductListPage from './Pages/ProductListPage'
import ProductDetailPage from './Pages/ProductDetailPage'
import { Route, Routes } from 'react-router-dom'
import CartPage from './Pages/CartPage'
import AdminDashboard from './Pages/AdminDashboard'
import SummerCollection from './Pages/SummerCollection'
import WinterCollection from './Pages/WinterCollection'
import SpringCollection from './Pages/SpringCollection'
import AutumnCollection from './Pages/AutumnCollection'
import Navbar from './components/Navbar'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import ProfilePage from './Pages/ProfilePage'


function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-dark-bg">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/products/:category" element={<ProductListPage />} />
          <Route path="/products/summerCollection" element={<SummerCollection />} />
          <Route path="/products/winterCollection" element={<WinterCollection />} />
          <Route path="/products/springCollection" element={<SpringCollection />} />
          <Route path="/products/autumnCollection" element={<AutumnCollection />} />

        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App