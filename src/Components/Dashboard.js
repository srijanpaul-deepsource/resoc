import React from 'react'
import Footer from './Footer'
import Landingsegment from './Landingsegment'
import Boxes from './Boxes'
import Header from './Navbar'
import Message from './Alert'
import firebase from 'firebase/compat/app'
import '../assets/css/dashboard.css'
// import About from './About'
var counter = false


export default function Dashboard() {


  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      counter = true
      }
      else{
      counter = false
      }
    }
  )
  return (
    <>
      {counter ? <Message /> : null}
      <Header />
      <Landingsegment />
      <Boxes />
      {/* <About /> */}
      <Footer />
    </>
  )
  
}
