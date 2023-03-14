import './assets/css/App.css'
import 'react-bootstrap'
import React from 'react'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ForgotPassword from './Components/ForgotPassword'
import UpdateProfile from './Components/UpdateProfile'
import Profile from './Components/Profile'
import Chat from './Components/Chatroom'
import Todo from './Components/Todo'
import AboutUs from './Components/AboutUs'
import './assets/css/style.css'
import Notes from './notes/Notes'
import PageNotFound from './Components/PageNotFound'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/notes' element={<Notes />} />
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
            <Route path="*" element={<PageNotFound />} />
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
