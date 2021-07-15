import React from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'

function ProfilP() {
  return (
    <Container>
      <Row>
        <Col md={2} align="center">
          <Image className="img-profil-update" src={require('../../assets/profil.JPG').default} roundedCircle></Image>
          <p className="mt-3 text-center">Viramelia Basri</p>
          <p>Alamat : Jalan Bajo</p>
          <p>No Hp  : 0821548xxxxx</p>
          <p>Perempuan</p>           
          <Button variant="primary">Edit profil</Button>
        </Col>
        <Col md={10}>
          <h2>Produk</h2>
          <Row>
            <Col>
              
            </Col>
            <Button variant="primary">Upload Produk</Button>
          </Row>
          <h2>Layanan</h2>
          <Row>
            <Col>
              
            </Col>
            <Button variant="primary">Upload Layanan</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfilP
