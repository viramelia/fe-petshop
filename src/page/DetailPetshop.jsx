import React from 'react'
import {Container, Row, Col, Button, Image} from 'react-bootstrap'
import {Switch, Route, Link, useHistory, useRouteMatch} from 'react-router-dom'

import CardProduk from '../components/CardProduk'
import CardLayanan from '../components/CardLayanan'

function BagianLayanan(){
  
  return(
    <Container >
      <Row className="justify-content-md-center mt-3">
        <Col md={3} align="center">
          <CardLayanan/>
        </Col>
      </Row>
    </Container>
  )
}

function BagianProduk(){
  
  return(
    <Container>
      <Row className="justify-content-md-center mt-3">
        <Col md={3} align="center">
          <CardProduk/>
        </Col>
      </Row>
    </Container>
  )
}

function DetailPetshop() {
  const history = useHistory()
  const {url, path} = useRouteMatch()

  const allProduk = () =>{
    const role = localStorage.getItem('role')

    if(role == 'customer'){
      history.push('/customer/detail-petshop')
    }
    else if(role == 'petshop'){
      history.push('/petshop/detail-petshop')
    }
    else{
      history.push('/detail-petshop')
    }
  }
  
  const allServices = () =>{
    const role = localStorage.getItem('role')
  
    if(role == 'customer'){
      history.push(path + '/layanan')
    }
    else if(role == 'petshop'){
      history.push(path+ '/layanan')
    }
    else{
      history.push(path + '/layanan')
    }

  }

  return (
    <div>
      <div style={{backgroundColor: '#7435AB', padding: '100px'}} ></div>
      <div align="center">
        <Image className="img-profil-update" src={require('../assets/petshop.png').default} roundedCircle></Image>
        <p style={{fontSize: '48px', color: '#46397e'}}>Momo petshop</p> 
        <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
        <p style={{color: '#848484', fontSize: 18+'px'}}>Jl. Sunu | 082190494097 | momopet@gmail.com</p>
      <Container>
      <Link onClick={allProduk}>
        <Button as="Link" className="mt-3 mr-3"  style={{backgroundColor: '#7435AB', border: 'none'}}>Produk</Button>
         {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      </Link>
      <Link onClick={allServices}>
        <Button className="mt-3 ml-3" style={{backgroundColor: 'white', borderColor:'#7435AB', color:'#7435AB'}}>Layanan</Button>
      </Link>
      </Container>
      </div>
      <Switch>
        <Route exact path={`${path}`}>
          <BagianProduk />
        </Route>
        <Route path={`${path}/layanan`}>
          <BagianLayanan/>
        </Route>
      </Switch>
    </div>
  )
}

export default DetailPetshop
