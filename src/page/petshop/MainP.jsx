import React, {useState} from 'react'
import {Nav, Navbar, Form, FormControl, Button, NavDropdown, Image} from 'react-bootstrap'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'

import BerandaC from '../BerandaC'
import ProfilP from './ProfilP'
import EditProfil from './EditProfil'
import TransaksiP from './TransaksiP'
import TransaksioffP from './TransaksioffP'
import TransaksioffL from './TransaksioffL'
import About from '../About'
import DaftarPesanan from './DaftarPesanan'
import AntrianL from './AntrianL'
import MyChartLayanan from '../customer/MyChartLayanan'
import Produkdetail from '../../components/Produkdetail'
import Layanandetail from '../../components/Layanandetail'
import Produk from './Produk'
import Layanan from './Layanan'

function MainP() {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () =>{
    setSidebar(true)
  }  
  const closeSidebar = () =>{
    setSidebar(false)
  }  

  return (
    <Router>
      <div id="mySidenav" className={sidebar? "sidenav open-sidenav": "sidenav" }>
        <h3 className="text-white text-center">Transaksi Offline</h3>
        <Link to="/petshop/offline-produk">Produk</Link>
        <Link to="/petshop/offline-layanan">Layanan</Link>
      </div>
      <div id="main" className={sidebar ? "push-main-page":"main-page"}>
        <Navbar bg="light" variant="light">
          {
            sidebar ?
            <span onClick={closeSidebar} className="close-sidebar">
              <div className="wrap-close">
                <div className="close-strip">
                  <div className="second-close-strip">
                  </div>
                </div>
              </div>
            </span>:
            <div className="sidebar-open" onClick={openSidebar}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          }
          <Navbar.Brand>
            <img className="navbar-logo" src={require('../../assets/LOGO PNG.png').default} alt="logo"/> 
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/petshop">
              Home
            </Nav.Link>
            <NavDropdown title="Daftar Pesanan" id="basic-nav-dropdown">
              <NavDropdown.Item href="/petshop/daftarpesanan">Produk</NavDropdown.Item>
              <NavDropdown.Item href="/petshop/antrian-layanan">Layanan</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/petshop/transaksi">
              Transaksi
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
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
          <Image className="img-profil" src={require('../../assets/petshop.png').default} roundedCircle />
          <NavDropdown title="Viramelia" id="basic-nav-dropdown">
          <NavDropdown.Item href="/petshop/profil">Profil</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
        </NavDropdown>
        </Navbar>
        <Switch>
          <Route exact path="/petshop">
            <BerandaC/>
          </Route>
          <Route path="/petshop/offline-layanan">
            <TransaksioffL/>
          </Route>
          <Route path="/petshop/offline-produk">
            <TransaksioffP/>
          </Route>
          <Route path="/petshop/profil">
            <ProfilP/>
          </Route>
          <Route path="/petshop/transaksi">
            <TransaksiP/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/petshop/daftarpesanan">
            <DaftarPesanan/>
          </Route>
          <Route path="/petshop/pesanan-layanan">
            <MyChartLayanan/>
          </Route>
          <Route path="/petshop/antrian-layanan">
            <AntrianL/>
          </Route>
          <Route path="/petshop/detail-produk">
            <Produkdetail/>
          </Route>
          <Route path="/petshop/detail-layanan">
            <Layanandetail/>
          </Route>
          <Route path="/petshop/upload-produk">
            <Produk/>
          </Route>
          <Route path="/petshop/upload-layanan">
            <Layanan/>
          </Route>
          <Route path="/petshop/edit-profil">
            <EditProfil/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default MainP


