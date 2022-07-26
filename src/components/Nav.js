import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "gatsby"
import NavDropdown from "react-bootstrap/NavDropdown"

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="d-flex justify-content-between">
                <Link style={{ margin: "1rem" }} to="/Signup">
                  SignUp
                </Link>
                <Link style={{ margin: "1rem" }} to="/Billing">
                  Billing
                </Link>
                <Link style={{ margin: "1rem" }} to="/Dashboard">
                  Dashboard
                </Link>
              </div>
              {/* 
              <Nav.Link href="/Home">Home</Nav.Link>

              <Nav.Link href="/Signup">Signup</Nav.Link>
              <Nav.Link href="/Billing">Billing</Nav.Link>
              <Nav.Link href="/Dashboard">Dashboard</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
