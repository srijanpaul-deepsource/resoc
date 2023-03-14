import React, { useRef, useState } from 'react'
import { Card, Button, Form, FormGroup, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch {
      setError('Failed to log in')
    }
    setLoading(false)
  }
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }


  return (
    <>
      <Container className='d-flex align-items-center justify-content-center h-100' style={{ minHeight: '80vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Card>
            <Card.Body className='text-dark'>
              <h2 className='text-center mb-4'>Log In</h2>
              {error && <Alert variant='danger'>{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <FormGroup id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' ref={emailRef} required />
                </FormGroup>

                <FormGroup id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' ref={passwordRef} required />
                </FormGroup>
                <Button disabled={loading} className='w-100 mt-2 btn btn-dark' type='submit'>Log In</Button>
              </Form>
              <Button disabled={loading} className='w-100 mt-2 btn btn-dark' type='submit' onClick={signInWithGoogle}> <i className="bi bi-google mx-2"></i>  Sign In With Google </Button>
              <div className='w-100 text-center mt-3'>
                <Link to='/forgot-password' className='text-dark'>Forgot Password</Link>
              </div>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
            Need an account? <Link to='/signup' className='text-var'>Sign up </Link>
          </div>
        </div>
      </Container>
    </>
  )
}