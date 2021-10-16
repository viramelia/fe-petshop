import React from 'react'
import {Navbar, Nav, Button, NavDropdown} from 'react-bootstrap'
import {Switch, Route, Link, useHistory} from 'react-router-dom'

import Home from './Home'
import KonfirmasiPetshop from './KonfirmasiPetshop'
import TransaksiProduk from './TransaksiProduk'
import Customer from './Customer'
import Petshop from './Petshop'
import Produk from './Produk'
import Layanan from './Layanan'

function MainAdmin() {
  const history = useHistory()

  const handleLogout = () =>{
    localStorage.clear()
    history.replace('/')
  }

  return (
    <div>
      <Navbar className="bg-primary-c" variant="light">
          <Navbar.Brand>
            <img className="navbar-logo" src={require('../../assets/LOGO PNG.png').default} alt="logo"/>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/admin">
              Home
            </Nav.Link>
            <NavDropdown title="Konfirmasi" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/admin/konfirmasi-petshop">Petshop</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/konfirmasi-transaksi">Transaksi produk</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Users" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/admin/petshop">Petshop</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/customer">Customer</NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Riwayat transaksi" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/admin/riwayat-transaksi-produk">Produk</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/riwayat-transaksi-layanan">Layanan</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          
          <Button style={{backgroundColor:'white' , borderColor:'#7435AB', color:'#7435AB'}} 
          onClick={handleLogout}>Logout</Button>
      </Navbar>
      <Switch>
        <Route exact path="/admin">
          <Home/>
        </Route>
        <Route path="/admin/konfirmasi-petshop">
          <KonfirmasiPetshop/>
        </Route>
        <Route path="/admin/konfirmasi-transaksi">
          <TransaksiProduk/>
        </Route>
        <Route path="/admin/customer">
          <Customer/>
        </Route>
        <Route path="/admin/petshop">
          <Petshop/>
        </Route>
        <Route path="/admin/riwayat-transaksi-produk">
          <Produk/>
        </Route>
        <Route path="/admin/riwayat-transaksi-layanan">
          <Layanan/>
        </Route>
      </Switch>
    </div>
  )
}

export default MainAdmin
