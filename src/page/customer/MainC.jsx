import React, {useState, useEffect} from 'react'
import {Nav, Navbar, Form, FormControl, Button, NavDropdown, Image} from 'react-bootstrap'
import { BrowserRouter as Router,
        Switch,
        Route,
        Link, useHistory} from 'react-router-dom'
// IMPORT HALAMAN
import About from '../About'
import BerandaC from '../BerandaC'
import MyChart from './MyChart'
import ProfilC from './ProfilC'
import TransaksiProduk from './TransaksiProduk'
import TransaksiLayanan from './TransaksiLayanan'
import Payment from './Payment'
import MyChartLayanan from './MyChartLayanan'
import Layanandetail from '../LayananDetail'
import Produkdetail from '../ProdukDetail'
import UpdateProfil from './UpdateProfil'
import ProdukLainnya from '../ProdukLainnya'
import LayananLainnya from '../LayananLainnya'
import DetailPetshop from '../DetailPetshop'

function MainC() {
  const history = useHistory()

  useEffect(()=>{
    const role = localStorage.getItem('role')

    if(role != 'customer'){
      history.push('/')
    }
  }, [])

  const handleLogout = () =>{
    localStorage.removeItem('role')
    history.push('/')
  }

  return (
    <Router>
      <div id="main" className="main-page">
        <Navbar className="bg-primary-c" variant="light">
          <Navbar.Brand>
            <img className="navbar-logo" src={require('../../assets/LOGO PNG.png').default} alt="logo"/>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/customer">
              Home
            </Nav.Link>
            <NavDropdown title="My Chart" id="basic-nav-dropdown">
              <NavDropdown.Item href="/customer/my-chart">Produk</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/customer/pesanan-layanan">Layanan</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Riwayat transaksi" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/customer/riwayat-transaksi-produk">Produk</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/customer/riwayat-transaksi-layanan">Layanan</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link as={Link} to="/customer/transaksi">
              Transaksi
            </Nav.Link> */}
            <Nav.Link as={Link} to="/customer/about">
              About
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
          <Image className="img-profil" src={require('../../assets/profil.JPG').default} roundedCircle />
          <NavDropdown title="Viramelia" id="basic-nav-dropdown">
          <NavDropdown.Item href="/customer/profil-customer">Profil</NavDropdown.Item>
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
        </Navbar>
        <Switch>
          <Route exact path="/customer">
            <BerandaC/>
          </Route>
          <Route path ="/customer/products">
            <ProdukLainnya/>
          </Route>
          <Route path ="/customer/services">
            <LayananLainnya/>
          </Route>
          <Route path="/customer/detail-petshop">
            <DetailPetshop/>
          </Route>
          <Route path="/customer/detail-produk">
            <Produkdetail/>
          </Route>
          <Route path="/customer/detail-layanan">
            <Layanandetail/>
          </Route>
          <Route path="/customer/my-chart">
            <MyChart/>
          </Route>
          <Route path="/customer/pesanan-layanan">
            <MyChartLayanan/>
          </Route>
          <Route path="/customer/profil-customer">
            <ProfilC/>
          </Route>
          <Route path="/customer/payment">
            <Payment/>
          </Route>
          <Route path="/customer/riwayat-transaksi-layanan">
            <TransaksiLayanan/>
          </Route>
          <Route path="/customer/riwayat-transaksi-produk"> 
            <TransaksiProduk/>
          </Route>
          <Route path="/customer/about">
            <About/>
          </Route>
          <Route path="/customer/update-profil">
            <UpdateProfil/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default MainC
