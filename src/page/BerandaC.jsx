import React, {useState, useEffect} from 'react'
import {Jumbotron, Container, Card,
        Button, Modal, Row, Col,
        Form, InputGroup} from 'react-bootstrap'
import { useHistory, useRouteMatch } from 'react-router-dom';
import Axios from 'axios'

import CardProduk from '../components/CardProduk'
import CardLayanan from '../components/CardLayanan';
import Mitra from '../components/Mitra';

function BerandaC() {
  const history = useHistory()
  const {url, path} = useRouteMatch()
  const [produk, setProduk] = useState([])
  const [layanan, setLayanan] = useState([])
  const role = localStorage.getItem('role')

  const otherProducts = () =>{
    const role = localStorage.getItem('role')

    if(role == 'customer'){
      history.push('/customer/products')
    }
    else if(role == 'petshop'){
      history.push('/petshop/products')
    }
    else{
      history.push('/products')
    }
  }

  const otherServices = () =>{

    if(role == 'customer'){
      history.push('/customer/services')
    }
    else if(role == 'petshop'){
      history.push('/petshop/services')
    }
    else{
      history.push('/services')
    }
  }

  const morePetshop = () =>{
    console.log('ok')
    if(role == 'customer'){
      history.push('/customer/more-petshop')
    }
    else if(role == 'petshop'){
      history.push('/petshop/more-petshop')
    }
    else{
      history.push('/more-petshop')
    }
  }

  useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/api/produk/4?page=1`)
      .then(res=>{
        setProduk(res.data.data.data)
      })
      .catch(err=>{

      })
    Axios.get(`http://127.0.0.1:8000/api/layanan/4?page=1`)
      .then(res=>{
        setLayanan(res.data.data.data)
      })
      .catch(err=>{

      })
  }, [])

  return (
    <div align="center">
      <Jumbotron style={{backgroundImage: `url('BASKET2.jpg')`, backgroundSize: 'cover', height:'558px' , width: '100%', backgroundRepeat:'no-repeat'}} fluid>
        <Container>
          <Row>
            <Col>
              <h1 style={{color:'#7435AB', fontSize:43, fontWeight: 'bold' }}>Punya Masalah Kebutuhan Hewan Peliharaan Anda?</h1>
              <p style={{color:'#787A91', fontSize:20}}>Dengan Web-marketplace ini kebutuhan hewan peliharaan  dapat terpenuhi dari beberapa Petshop, Tunggu apalagi?</p>
              <h1 style={{color:'#7435AB', fontWeight: 'bold', fontSize:28}}>Yuk, segera beli!</h1>
              <Button onClick={morePetshop} style={{backgroundColor: '#7435AB', border: 'none', width:'30', fontSize:15, fontWeight: 'bold'}} variant="primary">temukan Petshop</Button>
            </Col>
            <Col>
              <div className="right-side"></div>
            </Col>
          </Row>
        </Container>
      </Jumbotron> 
      <p style={{fontSize: '48px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Produk</p> 
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      <div style={{backgroundColor: '#F9F8FF', padding: '27px', marginBottom:'32px'}}>      
        <Container>
        <Row className="justify-content-center">
          {
            produk.map((data, index)=>(
              <Col md={3} key={index} className="mt-3" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                {/* <p>{data.id}</p> */}
                <CardProduk idProduk={data.id}/>
              </Col>
            ))
          }
        </Row>
        <Button className="mt-3"  onClick={otherProducts}
          style={{backgroundColor: '#7435AB', border: 'none'}}>Produk Lainnya</Button>
      </Container>
      </div>
        <p style={{fontSize: '48px', color: '#46397e'}}>Layanan</p> 
        <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
        <div style={{backgroundColor: '#F9F8FF', padding: '27px'}} >
        <Container>
        <Row className="justify-content-center">
          {
            layanan.map((data, index)=>(
              <Col md={3} className="mt-3" key={index}>
                <CardLayanan idLayanan={data.id}/>
              </Col>
            ))
          }
        </Row>
        <Button className="mt-3" onClick={otherServices}
          style={{backgroundColor: '#7435AB', border: 'none'}}>Layanan Lainnya</Button>
      </Container>
      </div>
      {/* <p id="infoMore" style={{fontSize: '48px', color: '#7435AB', marginTop:'30px'}}>Mitra Kami</p>
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      <div style={{backgroundColor: '#F9F8FF', padding: '27px', marginBottom:'32px'}}>  
      <Container>
        <Mitra/>
      </Container> 
      </div> */}
    </div>
  )
}

export default BerandaC
