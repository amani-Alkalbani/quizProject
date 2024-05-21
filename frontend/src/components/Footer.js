import React from 'react'
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
  } from "react-bootstrap";
function Footer() {
  return (
    <Navbar fixed="bottom" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container>
        <Navbar.Text>
          &copy; 2024 Amani Alkalbani
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default Footer
