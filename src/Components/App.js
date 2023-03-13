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
import Profile from './Profile'
import Chat from './Chatroom'
import 'firebase/firestore'
import Todo from './Todo'
import AboutUs from './AboutUs'
import '../assets/css/style.css'

// import Header from './Navbar'
// import { auth } from '../firebase'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route
              path='/update-profile'
              element={
                <RequireAuth redirectTo='/login'>
                  <UpdateProfile />
                </RequireAuth>
              }
            />
            <Route
              path='/chat-room'
              element={
                <RequireAuth redirectTo='/login'>
                  <Chat />
                </RequireAuth>
              }
            />
            <Route
              path='/todos'
              element={
                <RequireAuth redirectTo='/login'>
                  <Todo />
                </RequireAuth>
              }
            />
            <Route
              path='/login'
              element={
                <IsLoggedIn redirectTo='/profile'>
                  <Login />
                </IsLoggedIn>
              }
            />



            <Route path='/signup' caseSensitive={false} element={<Signup />} />

            <Route path='/login' caseSensitive={false} element=
              {<Login />} />

            <Route path='/profile' caseSensitive={false} element={<Profile />} />

            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
      </Router>

    </>
  )
}

function RequireAuth({ children, redirectTo }) {
  const { currentUser } = useAuth()
  return currentUser ? children : <Navigate to={redirectTo} />
}
function IsLoggedIn({ children, redirectTo }) {
  const { currentUser } = useAuth()
  return currentUser ? <Navigate to={redirectTo} /> : children
}

export default App
