import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      {
        localStorage.getItem('authToken') ?
        (
          <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/">Contact-Manager</Navbar.Brand>
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Contacts</Nav.Link>
                <Nav.Link href="#pricing">Logout</Nav.Link>
              </Nav>
          </Navbar>
        )
        :
        (
          <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/">Contact-Manager</Navbar.Brand>
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Register</Nav.Link>
                <Nav.Link href="#pricing">Login</Nav.Link>
              </Nav>
          </Navbar>
        )
      }
      </BrowserRouter>
    </div>
  );
}

export default App