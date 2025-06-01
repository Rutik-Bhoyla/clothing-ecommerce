import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await login({ email, password })
    setLoading(false)
    if (res.success) {
      navigate('/profile')
    } else {
      setError(res.message)
    }
    setTimeout(() => setError(''), 3000)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-dark-bg px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-accent-dark p-8 rounded-lg shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-serif mb-6 text-center">Login</h2>

        {error && (
          <p className="text-red-600 mb-4 text-center font-semibold">{error}</p>
        )}

        <label className="block mb-2 font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
          placeholder="you@example.com"
        />

        <label className="block mb-2 font-semibold" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-6 w-full"
          placeholder="Your password"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gray-900 text-white py-3 rounded hover:bg-gray-800 transition"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className="mt-4 text-center text-gray-700">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-gray-900 underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}
