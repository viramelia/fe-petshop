import React, {useState, useEffect} from 'react'
import {Nav, Navbar, Form, FormControl, Button, NavDropdown, Image} from 'react-bootstrap'
import { BrowserRouter as Router,
        Switch,
        Route,
        Link, useHistory, useLocation} from 'react-router-dom'
import Axios from 'axios'
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
import CariPetshop from '../CariPetshop'
import MorePetshop from '../MorePetshop'
import Konsultasi from './Konsultasi'

function MainC() {
  const history = useHistory()
  const [customer, setCustomer] = useState([]) 
  const [foto, setFoto] = useState()
  const location = useLocation()
  const [petshop, setPetshop] = useState([])

  const searchPetshop = e =>{
    e.preventDefault()
    if(location.pathname == '/customer/cari-petshop'){
      window.location.reload();
      history.push('/customer/cari-petshop', {keyword: petshop})
    }
    else{
      history.push('/customer/cari-petshop', {keyword: petshop})
    }
  }

  useEffect(()=>{
    const role = localStorage.getItem('role')
    const user = localStorage.getItem('user')

    if(role != 'customer'){
      history.push('/')
    }

    const config = {
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    }

    Axios.get(`http://127.0.0.1:8000/api/user/${user}`, config)
    .then(res=>{
      setCustomer(res.data.data)
    })
    .catch(err=>{})

  }, [])

  const handleLogout = () =>{
    localStorage.clear()
    history.push('/')
  }

  return (
    <div>
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
            <Nav.Link as={Link} to="/customer/konsultasi">
              Konsultasi
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/customer/about">
              About
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex mr-3" onSubmit={searchPetshop}>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={e=>setPetshop(e.target.value)}
              />
              <Button type="submit" style={{backgroundColor:'#7435AB'}} variant="primary">Search</Button>
            </Form>
          <Image className="img-profil" src={customer.foto} roundedCircle />
        <NavDropdown title={customer.nama_lengkap} id="basic-nav-dropdown">
          <NavDropdown.Item  href="/customer/profil-customer">Profil</NavDropdown.Item>
          <NavDropdown.Item  href="/customer/about">About</NavDropdown.Item>
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
        </Navbar>
        <Switch>
          <Route exact path="/customer">
            <BerandaC/>
          </Route>
          <Route path="/customer/cari-petshop">
            <CariPetshop/>
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
          <Route path="/customer/more-petshop">
            <MorePetshop/>
          </Route>
          <Route path="/customer/konsultasi">
            <Konsultasi/>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default MainC
