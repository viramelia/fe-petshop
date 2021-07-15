import React, {useState} from 'react'
import {Jumbotron, Container, Card,
        Button, Modal, Row, Col,
        Form, InputGroup} from 'react-bootstrap'

import CardProduk from '../components/CardProduk'
import CardLayanan from '../components/CardLayanan';

function BerandaC() {
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
      <Jumbotron style={{backgroundImage: `url('bg.jpg')`, backgroundSize: 'cover', backgroundSize: '100%'}} fluid>
        <Container>
          <Row>
            <Col>
              <h2>Halo Sahabat Petshop</h2>
              <p>Temukan kebutuhan hewan peliharaanmu disini dari beberapa Petshop Kota Makassar</p>
            </Col>
            <Col>
              <div className="right-side"></div>
            </Col>
          </Row>
        </Container>
      </Jumbotron> 
      <Container>
        <h2>Produk</h2> 
        <Row>
          {
            produk.map((data, index)=>(
              <Col md={3} key={index}>
                <CardProduk/>
              </Col>
            ))
          }
        </Row>
        <Button className="mt-3" variant="info">Produk Lainnya</Button>
        <h2 className="mt-3">Layanan</h2> 
        <Row>
          {
            produk.map((data, index)=>(
              <Col md={3} key={index}>
                <CardLayanan/>
              </Col>
            ))
          }
        </Row>
        <Button className="mt-3" variant="info">Produk Lainnya</Button>
      </Container>
    </div>
  )
}

export default BerandaC
