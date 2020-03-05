import React from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Home from './components/common/Home';
import Register from './components/users/Register';
import Login from './components/users/Login';

import ContactsList from './components/contacts/List';
import ContactNew from './components/contacts/New';

import {startLogoutUser} from './actions/user';

function App(props) {
  function handleLogout(){
    props.dispatch(startLogoutUser())
  }
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
                <Link to="#" onClick={handleLogout} className="ml-2">Logout</Link>
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
          <Route path="/users/register" component={Register} />
          <Route path="/users/login" component={Login} />

          <Route path="/contacts" component={ContactsList} exact={true} />
          <Route path="/contacts/new" component={ContactNew} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)