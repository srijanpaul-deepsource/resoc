import React, { useRef, useState, useEffect } from 'react'
import { Card, Button, Form, FormGroup, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase'
import '../assets/css/chatApp.css'
import { Google } from 'react-bootstrap-icons'
import Loader from './Loader'

export default function Login() {
  const history = useNavigate()
  const [isDark, setIsDark] = React.useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => setIsDark(event.matches ? true : false);

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [errorDef, setErrorDef] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [cancel, setCancel] = useState(null)

  // async function handleSubmit (e) {
  //   e.preventDefault()
  //   try {
  //     setError('')
  //     setErrorDef('')
  //     setLoading(true)
  //     const name = nameRef.current.value
  //     const user = await signup(emailRef.current.value, passwordRef.current.value)
      
  //     await user.user.updateProfile({
  //       displayName: name
  //     })
  //     history('/')
  //   } catch(e) {
  //     setError('Error signing up')
  //     if(e.code === 'auth/email-already-in-use') setErrorDef('Email already in use')
  //     else if(e.code === 'auth/invalid-email') setErrorDef('Invalid email')
  //     else if(e.code === 'auth/operation-not-allowed') setErrorDef('Operation not allowed')
  //     else if(e.code === 'auth/weak-password') setErrorDef('Weak password')
  //     else if(e.code === 'auth/too-many-requests') setErrorDef('Too many requests. Try again later')
  //     else if(e.code === 'auth/user-disabled') setErrorDef('User disabled')
      
  //     else setErrorDef(e.message)
  //   }
  //   setLoading(false)
  // }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setErrorDef('')
      setLoading(true)
      const cancel = await login(emailRef.current.value, passwordRef.current.value)
      setCancel(cancel)
      navigate('/')
    } catch(e) {
      setError('Failed to log in')
      if(e.code === 'auth/user-not-found') setErrorDef('No user found with this email')
      else if(e.code === 'auth/wrong-password') setErrorDef('Wrong password')
      else if(e.code === 'auth/too-many-requests') setErrorDef('Too many requests. Try again later')
      else if(e.code === 'auth/invalid-email') setErrorDef('Invalid email')
      else if(e.code === 'auth/user-disabled') setErrorDef('User disabled')
      else setErrorDef(e.message)
      
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
  
  
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

if(loading) return (<Loader />)
else return (
    <>
      <Container className='d-flex align-items-center justify-content-center h-100' style={{ minHeight: '80vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Card  style={{
                borderRadius: '0.5rem',
                borderColor: 'var(--text-var)',
                borderWidth: '1px',
                borderStyle: 'dashed',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'var(--bg-dark)'
            
          }}>
            <Card.Body className='text-var'>
              <h2 className='text-center mb-4'>Log In</h2>
              {error && <Alert variant='danger'>{error}</Alert>}
              {errorDef && <p style={{
                // fontStyle: 'italic'
                color: '#ff5e5b',
              }}>{errorDef}</p>}

              <Form onSubmit={handleSubmit}>
                <FormGroup id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' ref={emailRef} required />
                </FormGroup>

                <FormGroup id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' ref={passwordRef} required />
                </FormGroup>
                <Button disabled={loading} className=' w-100 mt-3 btn btn-primary' type='submit'>Log In</Button>
              </Form>
              {isDark &&
              <button style={{
                color: 'var(--text-var)',
              }} className="btn w-100 mt-2" onClick={signInWithGoogle}> <Google/>  Sign In With Google</button>
              }
              {!isDark &&
              <button  className="btn w-100 mt-2" onClick={signInWithGoogle}> <Google/>  Sign In With Google</button>
              }
              
              <div className='w-100 text-center mt-3'>
                <Link to='/forgot-password' style={{
                  color: '#ff5e5b',
                }}>Forgot Password</Link>
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