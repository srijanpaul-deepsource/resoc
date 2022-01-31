import React from 'react'
// import { useState } from 'react'
// import { useAuth } from '../contexts/AuthContext'
// import { useNavigate } from 'react-router-dom'
// import Header from './Header'
import Footer from './Footer'
import Landingsegment from './Landingsegment'
import Boxes from './Boxes'
import Header from './Navbar'

export default function Dashboard() {
  // const [error, setError] = useState('')
  // const { currentUser, logout } = useAuth()
  // const history = useNavigate()

  // async function handleLogout () {
  //   setError('')

  //   try {
  //     await logout()
  //     history('/login')
  //   } catch {
  //     setError('Failed to log out')
  //   }
  // }

  return (
    <>
      <Header />
      <Landingsegment />
      <Boxes />
      <Footer />

      {/* <Container className='d-flex align-items-center justify-content-center h-100' style={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Card>
            <Card.Body>
              <h2 className='text-center mb-4'>Profile</h2>
              {error && <Alert variant='danger'>{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
              <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
                Update Profile
              </Link>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
            <Button variant='link' onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </Container> */}
    </>
  )
}
