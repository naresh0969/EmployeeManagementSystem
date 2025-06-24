import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Help from './components/other/Help'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <Login handleLogin={handleLogin} /> : <Navigate to={`/${user}`} />} />
        <Route path="/help" element={<Help />} />
        <Route path="/admin" element={user === 'admin' ? <AdminDashboard changeUser={setUser} /> : <Navigate to="/" />} />
        <Route path="/employee" element={user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
