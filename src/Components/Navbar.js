import { Nav, NavDropdown, Navbar, Container, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Header (props) {
  var [buttonText, setButtonText] = useState("Login")
  const changeText = (text) => setButtonText(text)
  const  { currentUser }= useAuth()
  var username ='Login'
  if(currentUser){
    username = currentUser.email
    for(var i = 0; i < username.length; i++){
      if(username[i] === '@'){
        username = username.substring(0,i)
      }
    }
  }
  currentUser ? buttonText = username : buttonText = 'Login'
  return (
    <>
      <Navbar className='navbar-dark' bg='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>NOTES.SIT</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='/'>Home</Nav.Link>
              <NavDropdown title='Semester' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#btech1'>B.Tech 1st Year</NavDropdown.Item>
                <NavDropdown.Item href='#btech2'>B.Tech 2nd Year</NavDropdown.Item>
                <NavDropdown.Item href='#btech3'>B.Tech 3rd Year</NavDropdown.Item>
                <NavDropdown.Item href='#btech4'>B.Tech 4th Year</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href='#aboutus'>
                About us
              </Nav.Link>
            </Nav>
            <Form className='d-flex'>
              {/* <FormControl
                type='login'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              /> */}
              <Nav.Link href='/chat-room' className='text-decoration: none' style={{ textDecoration: 'none', color: 'white'}}>Chat</Nav.Link>
              <Button variant='outline-secondary' > <Link to='/login' style={{ textDecoration: 'none', color: 'white'}}> {buttonText} </Link></Button>
              
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

// Header.defaultProps = {
//   title: 'Your title here'
//   // searchbar: true
// }

// Header.propTypes = {
//   title: PropTypes.string,
//   searchbar: PropTypes.bool.isRequired
// }
