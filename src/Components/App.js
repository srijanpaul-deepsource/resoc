import './App.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Header from './Navbar'

function App () {
  return (
    <>

      <Router>
    <AuthProvider>
        <Routes>
          <Route
            path='/'
            element={
              <RequireAuth redirectTo='/login'>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path='/update-profile'
            element={
              <RequireAuth redirectTo='/login'>
                <UpdateProfile />
              </RequireAuth>
            }
          />

          <Route path='/signup' caseSensitive={false} element={<Signup />} />
          <Route path='/login' caseSensitive={false} element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
  </Router>

        </>
  )
}

function RequireAuth ({ children, redirectTo }) {
  const { currentUser } = useAuth()
  return currentUser ? children : <Navigate to={redirectTo} />
}

export default App
