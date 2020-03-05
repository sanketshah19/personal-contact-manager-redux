import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Home from './components/common/Home'

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      {
        localStorage.getItem('authToken') ?
        (
          <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/">Contact-Manager</Navbar.Brand>
              <Nav.Item className="ml-auto">
                <Link to="/" className="ml-2">Home</Link>
                <Link to="/contacts" className="ml-2">Contacts</Link>
                <Link to="#" className="ml-2">Logout</Link>
              </Nav.Item>
          </Navbar>
        )
        :
        (
          <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/">Contact-Manager</Navbar.Brand>
              <Nav.Item className="ml-auto">
                <Link to="/" className="ml-2">Home</Link>
                <Link to="/users/register" className="ml-2">Register</Link>
                <Link to="/users/login" className="ml-2">Login</Link>
              </Nav.Item>
          </Navbar>
        )
      }

        <Switch>
          <Route path="/" component={Home} exact={true} />

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App