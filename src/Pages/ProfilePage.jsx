import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {
  const navigate = useNavigate()

  // Simulated user data (replace with real auth/user data)
  const [user, setUser] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
  })

  // Simulated order history data (replace with real API call)
  const [orders, setOrders] = useState([
    {
      id: 'ORD12345',
      date: '2025-05-01',
      total: '$150.00',
      status: 'Delivered',
    },
    {
      id: 'ORD12346',
      date: '2025-04-15',
      total: '$85.00',
      status: 'Processing',
    },
  ])

  // Logout function (clear auth tokens/session)
  const handleLogout = () => {
    // clear tokens/session here
    alert('Logged out!')
    navigate('/login')
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 dark:text-dark-text">
      <h1 className="text-3xl font-serif mb-8">Your Account</h1>

      {/* User Info */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <div className="space-y-2">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </section>

      {/* Order History */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        {orders.length === 0 ? (
          <p className="text-gray-500 dark:text-dark-text">You have no orders yet.</p>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300 dark:text-dark-text">
                <th className="py-2">Order ID</th>
                <th className="py-2">Date</th>
                <th className="py-2">Total</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(({ id, date, total, status }) => (
                <tr key={id} className="border-b border-gray-200">
                  <td className="py-3 font-mono">{id}</td>
                  <td className="py-3">{date}</td>
                  <td className="py-3">{total}</td>
                  <td className="py-3">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 dark:hover:bg-accent-light dark:text-dark-text transition"
      >
        Logout
      </button>
    </div>
  )
}
