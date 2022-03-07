import React from 'react'
// import { useState } from 'react'
// import { useAuth } from '../contexts/AuthContext'
// import { useNavigate } from 'react-router-dom'
// import Header from './Header'
import Footer from './Footer'
import Landingsegment from './Landingsegment'
import Boxes from './Boxes'
import Header from './Navbar'
import { useAuth } from '../contexts/AuthContext'
import Alertnoti from './Alert'

export default function Dashboard() {
  const  { currentUser }= useAuth()
  return (
    <>
    {/* {currentUser ? <Alertnoti/> : null} */}
      <Header />
      <Landingsegment />
      <Boxes />
      <Footer />
    </>
  )
}
