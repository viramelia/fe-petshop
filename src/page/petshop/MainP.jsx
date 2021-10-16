import React, {useState, useEffect} from 'react'
import {Nav, Navbar, Form, FormControl, Button, NavDropdown, Image} from 'react-bootstrap'
import {BrowserRouter as Router, Link, Switch, Route, useHistory, useLocation} from 'react-router-dom'
import Axios from 'axios'

import BerandaC from '../BerandaC'
import ProfilP from './ProfilP'
import EditProfil from './EditProfil'
import TransaksiP from './TransaksiP'
import TransaksiL from './TransaksikL'
import TransaksioffP from './TransaksioffP'
import TransaksioffL from './TransaksioffL'
import About from '../About'
import DaftarPesanan from './DaftarPesanan'
import AntrianL from './AntrianL'
import MyChartLayanan from '../customer/MyChartLayanan'
import ProdukDetail from '../ProdukDetail'
import LayananDetail from '../LayananDetail'
import Produk from './Produk'
import Layanan from './Layanan'
import ProdukLainnya from '../ProdukLainnya'
import LayananLainnya from '../LayananLainnya'
import DetailPetshop from '../DetailPetshop'
import Checkout from './Checkout'
import CariPetshop from '../CariPetshop'
import EditProduk from './EditProduk'
import EditLayanan from './EditLayanan'
import MorePetshop from '../MorePetshop'
import JadwalKonsultasi from './JadwalKonsultasi'

function MainP() {
  const location = useLocation()
  const history = useHistory()
  const [sidebar, setSidebar] = useState(false);
  const [petshop, setPetshop] = useState([])
  const [foto, setFoto] = useState()
  const [keyword, setKeyword] = useState()
  const [petshopName, setPetshopName] = useState()

  const searchPetshop = e =>{
    e.preventDefault()
    console.log(location.pathname)
    if(location.pathname == '/petshop/cari-petshop'){
      window.location.reload();
      history.push('/petshop/cari-petshop', {keyword: petshopName})
    }
    else{
      history.push('/petshop/cari-petshop', {keyword: petshopName})
    }
  }

  const openSidebar = () =>{
    setSidebar(true)
  }  
  const closeSidebar = () =>{
    setSidebar(false)
  }  

  const handleLogout = () =>{
    localStorage.clear()
    history.push('/')
  }

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    
    const user = localStorage.getItem('user')

    Axios.get(`http://127.0.0.1:8000/api/user/${user}`, config)
    .then(res=>{
      setPetshop(res.data.data)
    })
    .catch(err=>{})

  }, [])

  return (
    <div>
      <div id="mySidenav" className={sidebar? "sidenav open-sidenav": "sidenav" }>
        <h3 className="text-center" style={{color:'#512D6D', fontWeight: '600', marginTop:'50px', fontSize:20}}>Transaksi Offline</h3>
        
        <Link to="/petshop/offline-produk" style={{color:'#512D6D', marginLeft: '30px', textDecoration: 'none', fontWeight: '400', fontSize:16, marginTop:'25px'}}>
        <img width="23" src={require('../../assets/pet-food.png').default} alt="produk" />
          &nbsp;Produk</Link>
        <Link to="/petshop/offline-layanan" style={{color:'#512D6D', marginLeft: '30px', textDecoration: 'none', fontWeight: '400',fontSize:16, marginTop:'10px'}}>
        <img width="23" src={require('../../assets/checkup.png').default} alt="layanan" />
        &nbsp;Layanan</Link>
      </div>
      <div id="main" className={sidebar ? "push-main-page":"main-page"}>
        <Navbar className="navbar" expand="lg"  >
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
            <NavDropdown title="Riwayat Transaksi" id="basic-nav-dropdown">
              <NavDropdown.Item href="/petshop/transaksi">Produk</NavDropdown.Item>
              <NavDropdown.Item href="/petshop/transaksi-layanan">Layanan</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/petshop/konsultasi">
              Konsultasi
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/petshop/about">
              About
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex mr-3" onSubmit={searchPetshop}>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={e=>setPetshopName(e.target.value)}
              />
              <Button style={{backgroundColor:'#7435AB'}} variant="primary" type="submit">Search</Button>
            </Form>
          <Image className="img-profil" src={petshop.foto} roundedCircle />
          <NavDropdown title={petshop.nama_lengkap} id="basic-nav-dropdown">
          <NavDropdown.Item href="/petshop/profil">Profil</NavDropdown.Item>
          <NavDropdown.Item href="/petshop/about">About</NavDropdown.Item>
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
        </Navbar>
        <Switch>
          <Route exact path="/petshop">
            <BerandaC/>
          </Route>
          <Route path="/petshop/cari-petshop">
            <CariPetshop/>
          </Route>
          <Route path="/petshop/products">
            <ProdukLainnya/>
          </Route>
          <Route path="/petshop/services">
            <LayananLainnya/>
          </Route>
          <Route path="/petshop/offline-layanan">
            <TransaksioffL/>
          </Route>
          <Route exact path="/petshop/offline-produk">
            <TransaksioffP/>
          </Route>
          <Route path="/petshop/offline-produk/checkout">
            <Checkout/>
          </Route>
          <Route exact path="/petshop/profil">
            <ProfilP/>
          </Route>
          <Route path="/petshop/profil/edit-produk">
            <EditProduk/>
          </Route>
          <Route path="/petshop/profil/edit-layanan">
            <EditLayanan/>
          </Route>
          <Route path="/petshop/transaksi">
            <TransaksiP/>
          </Route>
          <Route path="/petshop/about">
            <About/>
          </Route>
          <Route path="/petshop/konsultasi">
            <JadwalKonsultasi/>
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
            <ProdukDetail/>
          </Route>
          <Route path="/petshop/detail-layanan">
            <LayananDetail/>
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
          <Route path="/petshop/transaksi-layanan">
            <TransaksiL/>
          </Route>
          <Route path="/petshop/detail-petshop">
            <DetailPetshop/>
          </Route>
          <Route path="/petshop/more-petshop">
            <MorePetshop/>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default MainP


