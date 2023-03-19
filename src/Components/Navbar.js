import {
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import logo1 from '../assets/img/moon.png'
import logo2 from '../assets/img/sun.png'
import { Link } from "react-router-dom";

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
  currentUser ? (buttonText = username) : (buttonText = "Login");
  const [isDark, setIsDark] = React.useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => setIsDark(event.matches ? true : false);

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  if (isDark) {
    return (<>
      <Navbar className='navbar navbar-expand-lg navbar-dark py-4 cdin' expand="lg">
        <Container >
          <Nav >
          <Navbar.Brand>
          <Link to="/">
              <img src={logo1} alt="logo" width="30" height="30" className="d-inline-block align-top" />
            </Link>
          </Navbar.Brand>
          </Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/notes" className="nav-link">Notes</Link>
              {currentUser && <Link to="/taskboard" className="nav-link">Tasks</Link>}
              {!currentUser && <Link to="/login" className="nav-link">Tasks</Link>}
              {currentUser && <Link to="/community" className="nav-link">Community</Link>}
              {!currentUser && <Link to="/login" className="nav-link">Community</Link>}
              
            </Nav>
            <Nav>
               <Link to="/aboutus" className="nav-link">About Us</Link>
               {currentUser && <Link to="/profile" className="nav-link">{buttonText}</Link>}
              {!currentUser && <Link to="/login" className="nav-link">{buttonText}</Link>}
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
            <Navbar.Brand>
              <Link to="/">
                <img src={logo2} alt="logo" width="30" height="30" className="d-inline-block align-top" />
              </Link>
            </Navbar.Brand>
          </Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/notes" className="nav-link">Notes</Link>
              {currentUser && <Link to="/taskboard" className="nav-link">Tasks</Link>}
              {!currentUser && <Link to="/login" className="nav-link">Tasks</Link>}
              {currentUser && <Link to="/community" className="nav-link">Community</Link>}
              {!currentUser && <Link to="/login" className="nav-link">Community</Link>}
            </Nav>
            <Nav>
            <Link to="/aboutus" className="nav-link">About Us</Link>
            {currentUser && <Link to="/profile" className="nav-link">{buttonText}</Link>}
            {!currentUser && <Link to="/login" className="nav-link">{buttonText}</Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>)
  }
}
