import { Nav, NavDropdown, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Header (props) {
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
              <Nav.Link href='#home'>Home</Nav.Link>
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
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-secondary'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

Header.defaultProps = {
  title: 'Your title here'
  // searchbar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired
}
