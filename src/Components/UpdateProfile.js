import React, { useRef, useState } from 'react'
import { Form, Alert, } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import profile from '../assets/img/profile-page.svg';
import Loader from './Loader';


export default function UpdateProfile () {
  const [isDark, setIsDark] = React.useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => setIsDark(event.matches ? true : false);

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const name =auth.currentUser.displayName? auth.currentUser.displayName : auth.currentUser.email.slice(0, auth.currentUser.email.indexOf('@'));
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState('')
  const [errorDef, setErrorDef] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  function handleSubmit (e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    const promises = []
    setLoading(true)
    setError('')

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history('/profile')
      })
      .catch((e) => {
        setError('Failed to update account')
        setErrorDef(e.message)
      })
      .finally(() => {
        setLoading(false)
      })

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
  if(loading) return <Loader />
  else
  return (
    <>
     <section className="pt-4 px-4 px-sm-1 cdin">
        {error && <Alert variant='danger'>{error}</Alert>}
        {errorDef && <p style={{
                fontStyle: 'italic'
              }}>{errorDef}</p>}
      {/* <div className="container "> */}
        <div className="d-sm-flex align-items-center justify-content-between mainc">
          <div className="img-home">
            <h1 className="heading">{name}</h1>
            <p className="lead my-4">
              Hey {name}, welcome to RESOC!
              Update your password here.
            </p>
          </div>
          <img className="img-fluid w-50 d-none d-sm-block p-5" src={profile} style={{
            marginBlockEnd: "20px",

          }} alt="profiledoc" />
        
      </div>
    </section>
    
      <div className="px-2 px-sm-5"
      style={{
        maxWidth: "500px",
       }}> 

         <Form onSubmit={handleSubmit}>
         <Form.Group id='email' className='mb-2'>
           <Form.Label>Email</Form.Label>
           <Form.Control
             type='email'
             ref={emailRef}
             required
             defaultValue={currentUser.email}
             disabled

           />
         </Form.Group>
         <Form.Group id='password' className='mb-2'>
           <Form.Label>Password</Form.Label>
           <Form.Control
             type='password'
             ref={passwordRef}
             placeholder='Leave blank to keep the same'
           />
         </Form.Group>
         <Form.Group id='password-confirm' className='mb-2'>
           <Form.Label>Password Confirmation</Form.Label>
           <Form.Control
             type='password'
             ref={passwordConfirmRef}
             placeholder='Leave blank to keep the same'
           />
         </Form.Group>
         <button className="btn mt-2"
        style={{
          color: '#ff5e5b',
        }}
        type='submit'>UPDATE</button>  {isDark ? 
          <button className=" mt-2 btn btn-dark" onClick={ () => history('/profile')}
           >CANCEL
         </button> :
         <button className=" mt-2 btn btn-light" onClick={ () => history('/profile')}
         >CANCEL
       </button> }
         </Form>
        
      

    </div>
    </>
      )
}
