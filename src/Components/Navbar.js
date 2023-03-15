import {
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import logo1 from '../assets/img/moon.png'
import logo2 from '../assets/img/sun.png'

export default function Header(props) {
  var [buttonText, setButtonText] = useState("Login");
  const changeText = (text) => setButtonText(text);
  const { currentUser } = useAuth();
  var username = "Login";

  if (currentUser) {
    if (currentUser.displayName != null) {
      username = currentUser.displayName;
    } else {
      username = currentUser.email;
      for (var i = 0; i < username.length; i++) {
        if (username[i] === "@") {
          username = username.substring(0, i);
        }
      }
    }
  }
  var dark = false;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  dark = true;
}

  currentUser ? (buttonText = username) : (buttonText = "Login");
  const [isDark, setIsDark] = React.useState(dark);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    event.matches ? setIsDark(true) : setIsDark(false);
  });


  if (isDark) {
    return (<>
      <Navbar className='navbar navbar-expand-lg navbar-dark py-4 cdin' expand="lg">
        <Container >
          <Nav >
            <Navbar.Brand href="/">
              <img src={logo1} alt="logo" width="30" height="30" className="d-inline-block align-top" />
            </Navbar.Brand>
          </Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/notes">Notes</Nav.Link>
              <Nav.Link href="/taskboard">Tasks</Nav.Link>
              <Nav.Link href="/community">Community</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link className='text-var' href="/login"> {buttonText}</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>)
  }
  else {
    return (<>
      <Navbar className='navbar navbar-expand-lg py-4 cdin' expand="lg">
        <Container >
          <Nav >
            <Navbar.Brand href="/">
              <img src={logo2} alt="logo" width="30" height="30" className="d-inline-block align-top" />
            </Navbar.Brand>
          </Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/notes">Notes</Nav.Link>
              <Nav.Link href="/taskboard">Tasks</Nav.Link>
              <Nav.Link href="/community">Community</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link className='text-var' href="/login"> {buttonText}</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>)
  }
}
