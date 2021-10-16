import React, {useState, useEffect} from 'react'
import {Nav, Navbar, Form, FormControl, Button, NavDropdown, Image} from 'react-bootstrap'
import { 
        Switch,
        Route,
        Link, useHistory, useLocation} from 'react-router-dom'
import About from './About'
import BerandaC from './BerandaC'
import ProdukLainnya from './ProdukLainnya'
import LayananLainnya from './LayananLainnya'
import ProdukDetail from './ProdukDetail'
import LayananDetail from './LayananDetail'
import DetailPetshop from './DetailPetshop'
import CariPetshop from './CariPetshop'
import MorePetshop from './MorePetshop'
import Footer from '../components/Footer'
import Axios from 'axios'


function MainC() {
  const history = useHistory()
  const location = useLocation()
  const [petshop, setPetshop] = useState([])

  const searchPetshop = e =>{
    e.preventDefault()
    if(location.pathname == '/cari-petshop'){
      window.location.reload();
      history.push('/cari-petshop', {keyword: petshop})
    }
    else{
      history.push('/cari-petshop', {keyword: petshop})
    }
  }

  useEffect(()=>{
    console.log(location.pathname)
  }, [])

  return (
      <div id="main" className="main-page">
        <Navbar className="bg-primary-c" variant="light" expand="lg" collapseOnSelect>
          <Navbar.Brand>
            <img className="navbar-logo" src={require('../assets/LOGO PNG.png').default} alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link >
                <Link className="nav-link" to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/about">About</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex mr-3" onSubmit={searchPetshop}>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                  onChange={e=>setPetshop(e.target.value)}
                />
                <Button style={{backgroundColor:'#7435AB'}} variant="primary" type="submit">Cari</Button>
              </Form>
            <Button style={{backgroundColor:'white' , borderColor:'#7435AB', color:'#7435AB'}} onClick={()=>history.replace('/login')}>Login</Button>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <BerandaC/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/cari-petshop">
            <CariPetshop/>
          </Route>
          <Route path="/products">
            <ProdukLainnya/>
          </Route>
          <Route path="/services">
            <LayananLainnya/>
          </Route>
          <Route path="/detail-produk">
            <ProdukDetail/>
          </Route>
          <Route path="/detail-layanan">
            <LayananDetail/>
          </Route>
          <Route path="/detail-petshop">
            <DetailPetshop/>
          </Route>
          <Route path="/more-petshop">
            <MorePetshop/>
          </Route>
        </Switch>
        {/* <Footer/> */}
      </div>
  )
}

export default MainC
