import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { HashLink as HLink } from "react-router-hash-link";

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
  return (
    <>
      <Navbar className="navbar-dark" sticky="top" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">RESOC</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Semester" id="navbarScrollingDropdown">
                <NavDropdown.Item>

                  <HLink
                    to="/#btech1"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    B.Tech 1st Year
                  </HLink>
                </NavDropdown.Item>
                <NavDropdown.Item>

                  <HLink
                    to="/#btech2"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    B.Tech 2nd Year
                  </HLink>
                </NavDropdown.Item>
                <NavDropdown.Item>

                  <HLink
                    to="/#btech3"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    B.Tech 3rd Year
                  </HLink>
                </NavDropdown.Item>
                <NavDropdown.Item>

                  <HLink
                    to="/#btech4"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    B.Tech 4th Year
                  </HLink>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <HLink
                  to="/#learnaboutus"
                  style={{ textDecoration: "none", color: "darkgray" }}
                >
                  About us
                </HLink>
              </Nav.Link>
              <Nav.Link href="/todos">Tasks</Nav.Link>
              <Nav.Link href="/chat-room">Chat</Nav.Link>
            </Nav>
            <Button variant="outline-secondary" href="/login">

              <span style={{ textDecoration: "none", color: "white" }}>

                {buttonText}
              </span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
