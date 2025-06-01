import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

const fakeUserDB = [
  {
    id: 'u1',
    username: 'user1',
    email: 'user1@example.com',
    password: 'password123', // plaintext for demo ONLY!
  },
]

function mockApiCall(data, delay = 1000) {
  return new Promise(resolve => setTimeout(() => resolve(data), delay))
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // On mount, check for stored token
  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    if (token && userData) {
      setUser(JSON.parse(userData))
    }
    setLoading(false)
  }, [])

  async function login({ email, password }) {
    // simulate API call to check credentials
    setLoading(true)
    const foundUser = fakeUserDB.find(
      u => u.email === email && u.password === password
    )
    await mockApiCall(null, 1000)
    setLoading(false)

    if (foundUser) {
      const fakeToken = 'fake-jwt-token-12345'
      localStorage.setItem('token', fakeToken)
      localStorage.setItem('user', JSON.stringify(foundUser))
      setUser(foundUser)
      return { success: true }
    } else {
      return { success: false, message: 'Invalid credentials' }
    }
  }

  async function signup({ username, email, password }) {
    setLoading(true)
    await mockApiCall(null, 1000)

    const exists = fakeUserDB.find(u => u.email === email)
    if (exists) {
      setLoading(false)
      return { success: false, message: 'Email already registered' }
    }

    // Add to fake DB (in memory only)
    const newUser = {
      id: 'u' + (fakeUserDB.length + 1),
      username,
      email,
      password,
    }
    fakeUserDB.push(newUser)
    const fakeToken = 'fake-jwt-token-12345'
    localStorage.setItem('token', fakeToken)
    localStorage.setItem('user', JSON.stringify(newUser))
    setUser(newUser)
    setLoading(false)
    return { success: true }
  }

  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
