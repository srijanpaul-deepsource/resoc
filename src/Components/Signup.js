import React, { useEffect, useRef, useState } from 'react'
import { Card, Button, Form, FormGroup, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import Loader from './Loader'


export default function Signup () {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [errorDef, setErrorDef] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit (e) {
    e.preventDefault()
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setErrorDef('')
      setLoading(true)
      const name = nameRef.current.value
      const user = await signup(emailRef.current.value, passwordRef.current.value)
      
      await user.user.updateProfile({
        displayName: name
      })
      history('/')
    } catch(e) {
      setError('Error signing up')
      setErrorDef(e.message)
    }
    setLoading(false)
  }
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError('')
      setErrorDef('')
    }, 3000)
  
    return () => {
      clearTimeout(timeoutId)
    }
  }, [error, errorDef])

  if(loading) return (<Loader />)
  else return (
    <>
      <Container className='d-flex align-items-center justify-content-center h-100' style={{ minHeight: '80vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Card style={{
            borderRadius: '1rem',
            borderColor: 'var(--text-var)',
            borderWidth: '1px',
            borderStyle: 'dashed',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--bg-dark)'
          }}>
            <Card.Body className='text-var'>
              <h2 className='text-center mb-4'>Sign Up</h2>
              {error && <Alert variant='danger' className='text-center'>{error}</Alert>}
              {errorDef && <p style={{
                fontStyle: 'italic'
              }}>{errorDef}</p>}

              <Form onSubmit={handleSubmit}>

                <FormGroup id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' ref={nameRef} required />
                </FormGroup>


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
                <Button disabled={loading} className='w-100 mt-2 btn btn-primary' type='submit'>Sign Up</Button>
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
