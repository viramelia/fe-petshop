import React from 'react'
import {Container, Row, Col, Button, Image} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom'

import CardProduk from '../../components/CardProduk'
import CardLayanan from '../../components/CardLayanan'
import Produk from './Produk'

function BagianLayanan(){
  const history = useHistory()
  return(
    <Container >
      <Row className="justify-content-md-center mt-3">
        <Col md={3} align="center">
          <CardLayanan/>
        </Col>
      </Row>
      <center>
      <Button className="mt-3" style={{backgroundColor: '#7435AB', border: 'none'}}  onClick={()=> history.push('/petshop/upload-layanan')}>Tambah Layanan</Button>
      </center>
    </Container>
  )
}

function BagianProduk(){
  const history = useHistory()
  return(
    <Container>
      <Row className="justify-content-md-center mt-3">
        <Col md={3} align="center">
          <CardProduk/>
        </Col>
      </Row>
      <center>
      <Button className="mt-3" style={{backgroundColor: '#7435AB', border: 'none' }} 
      onClick={()=> history.push('/petshop/upload-produk')}>Tambah Produk</Button>
      </center>
    </Container>
  )
}

function ProfilP() {
  const history = useHistory()
  return (
    <div>
      <div style={{backgroundColor: '#7435AB', padding: '100px'}} ></div>
      <div align="center">
        <Image className="img-profil-update" src={require('../../assets/petshop.png').default} roundedCircle></Image>
        <p style={{fontSize: '48px', color: '#46397e'}}>Momo petshop</p> 
        <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
        <p style={{color: '#848484', fontSize: 18+'px'}}>Jl. Sunu | 082190494097 | momopet@gmail.com</p>
        <Button className="mt-3" style={{backgroundColor: '#7435AB', border: 'none'}} 
          onClick={()=> history.push('/petshop/edit-profil')}>Update profil</Button>
      <Container>
      <Link to="/petshop/profil">
        <Button as="Link" className="mt-3 mr-3"  style={{backgroundColor: '#7435AB', border: 'none'}}>Produk</Button>
         {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      </Link>
      <Link to="/petshop/profil/layanan">
        <Button className="mt-3 ml-3" style={{backgroundColor: 'white', borderColor:'#7435AB', color:'#7435AB'}}>Layanan</Button>
      </Link>
      </Container>
      </div>
      <Switch>
        <Route exact path="/petshop/profil">
          <BagianProduk />
        </Route>
        <Route path="/petshop/profil/layanan">
          <BagianLayanan/>
        </Route>
      </Switch>
    </div>
  )
}

export default ProfilP
