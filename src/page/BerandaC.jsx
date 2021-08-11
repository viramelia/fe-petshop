import React, {useState} from 'react'
import {Jumbotron, Container, Card,
        Button, Modal, Row, Col,
        Form, InputGroup} from 'react-bootstrap'
import { useHistory, useRouteMatch } from 'react-router-dom';

import CardProduk from '../components/CardProduk'
import CardLayanan from '../components/CardLayanan';
import Mitra from '../components/Mitra';

function BerandaC() {
  const history = useHistory()
  const {url, path} = useRouteMatch()
  const [produk, setProduk] = useState([
    {
      nama: 'wiskas',
      foto: 'merek-whiskas.png',
    },
    {
      nama: 'me-O',
      foto: 'meo.png',
    },
    {
      nama: 'cat choize',
      foto: 'merek-whiskas.png',
    },
    {
      nama: 'felibite',
      foto: 'Felibite-mother-n-kitten-500-gr.jpg',
    },
  ])

  return (
    <div align="center">
      <Jumbotron style={{backgroundImage: `url('BASKET2.jpg')`, backgroundSize: 'cover', height:'558px' , width: '100%', backgroundRepeat:'no-repeat'}} fluid>
        <Container>
          <Row>
            <Col>
              <h1 style={{color:'#7435AB', fontSize:43, fontWeight: 'bold' }}>Punya Masalah Kebutuhan Hewan Peliharaan Anda?</h1>
              <p style={{color:'#787A91', fontSize:20}}>Dengan Web-marketplace ini kebutuhan hewan peliharaan  dapat terpenuhi dari beberapa Petshop, Tunggu apalagi?</p>
              <h1 style={{color:'#7435AB', fontWeight: 'bold', fontSize:28}}>Yuk, segera beli!</h1>
              <Button href="#infoMore" style={{backgroundColor: '#7435AB', border: 'none', width:'30', fontSize:15, fontWeight: 'bold'}} variant="primary">Info More </Button>
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
              <Col md={3} key={index} style={{paddingLeft: '0px', paddingRight: '0px'}}>
                <CardProduk/>
              </Col>
            ))
          }
        </Row>
        <Button className="mt-3"  onClick={()=>history.push('/products')}
          style={{backgroundColor: '#7435AB', border: 'none'}}>Produk Lainnya</Button>
      </Container>
      </div>

        <p style={{fontSize: '48px', color: '#46397e'}}>Layanan</p> 
        <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
        <div style={{backgroundColor: 'white', padding: '27px'}} >
        <Container>
        <Row>
          {
            produk.map((data, index)=>(
              <Col md={3} key={index}>
                <CardLayanan/>
              </Col>
            ))
          }
        </Row>
        <Button className="mt-3" onClick={()=>history.push('/layanan-lainnya')}
          style={{backgroundColor: '#7435AB', border: 'none'}}>Layanan Lainnya</Button>
      </Container>
      </div>
      <p id="infoMore" style={{fontSize: '48px', color: '#7435AB', marginTop:'30px'}}>Mitra Kami</p>
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      <div style={{backgroundColor: '#F9F8FF', padding: '27px', marginBottom:'32px'}}>  
      <Container>
        <Mitra/>
      </Container> 
      </div>
    </div>
  )
}

export default BerandaC
