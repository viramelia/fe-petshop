import React, {useState} from 'react'
import {Nav, Navbar, Form, FormControl, Button, NavDropdown, Image} from 'react-bootstrap'
import { BrowserRouter as Router,
        Switch,
        Route,
        Link, useHistory} from 'react-router-dom'
import About from './About'
import BerandaC from './BerandaC'

function MainC() {
  const history = useHistory()

  return (
    <Router>
      <div id="main" className="main-page">
        <Navbar bg="light" variant="light">
          <Navbar.Brand>
            <img className="navbar-logo" src={require('../assets/LOGO PNG.png').default} alt="logo"/>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link >
              <Link className="nav-link" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/about">About</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex mr-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          <Button variant="info" onClick={()=>history.push('/login')}>Login</Button>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <BerandaC/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default MainC
