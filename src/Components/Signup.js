import React, { useRef, useState } from 'react'
import { Card, Button, Form, FormGroup, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'


export default function Signup () {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit (e) {
    e.preventDefault()
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history('/')
    } catch {
      setError('Error signing up')
    }
    setLoading(false)
  }

  return (
    <>
      <Container className='d-flex align-items-center justify-content-center h-100' style={{ minHeight: '80vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Card>
            <Card.Body className='text-dark'>
              <h2 className='text-center mb-4'>Sign Up</h2>
              {error && <Alert variant='danger' className='text-center'>{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <FormGroup id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' ref={emailRef} required />
                </FormGroup>

                <FormGroup id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' ref={passwordRef} required />
                </FormGroup>

                <FormGroup id='password-confirm'>
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type='password' ref={confirmPasswordRef} required />
                </FormGroup>
                <Button disabled={loading} className='w-100 mt-2 btn btn-dark' type='submit'>Sign Up</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
            Already have an account? <Link to='/login' className='text-var'>Log In</Link>
          </div>
        </div>
      </Container>
    </>
  )
}
