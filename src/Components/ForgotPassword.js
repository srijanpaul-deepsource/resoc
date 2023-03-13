import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import Header from './Navbar'
import Footer from './Footer'

export default function ForgotPassword () {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault()

    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions')
    } catch {
      setError('Failed to reset password')
    }

    setLoading(false)
  }

  return (
    <>
      <Header />
      <Container className='d-flex align-items-center justify-content-center h-100' style={{ minHeight: '80vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Card>
            <Card.Body className='text-dark'>
              <h2 className='text-center mb-4'>Password Reset</h2>
              {error && <Alert variant='danger'>{error}</Alert>}
              {message && <Alert variant='success'>{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' ref={emailRef} required />
                </Form.Group>
                <Button disabled={loading} className='w-100 mt-2 btn btn-dark' type='submit'>
                  Reset Password
                </Button>
              </Form>
              <div className='w-100 text-center mt-3'>
                <Link to='/login' className='text-dark'>Login</Link>
              </div>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-3'>
            Need an account? <Link to='/signup' className='text-var'>Sign Up</Link>
          </div>
        </div>
      </Container>
      <Footer/>
    </>
  )
}
