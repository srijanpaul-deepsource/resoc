import React, { useRef, useState, useEffect } from 'react'
import { Card, Button, Form, FormGroup, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase'
import '../assets/css/chatApp.css'
import { Google } from 'react-bootstrap-icons'
import Loader from './Loader'

var dark = false;
export default function Login() {
  const history = useNavigate()
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) dark = true;
  const [isDark, setIsDark] = useState(dark);

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

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch(e) {
      setError('Failed to log in')
      setErrorDef(e.message)
    }
    setLoading(false)
  }
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
                borderRadius: '1rem',
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
                fontStyle: 'italic'
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