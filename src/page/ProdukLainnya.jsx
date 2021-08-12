import React from 'react'
import { Jumbotron, Container, Row, Col, Form, Button } from 'react-bootstrap'

import CardProduk from '../components/CardProduk'

function ProdukLainnya() {

  return (
    <div>
      {/* <Jumbotron style={{backgroundImage: `url('BASKET2.jpg')`, 
        backgroundSize: 'cover', height: '550px', backgroundRepeat: 'no-repeat'}} fluid>
          <h1>petshop</h1>
      </Jumbotron> */}
      <Jumbotron style={{backgroundColor: `#7435AB`, height: '275px',}} fluid>
        <Container>
          <h2 className="text-white">Temukan Produk dari berbagai petshop</h2>
          <p className="text-white">Makanan | Minuman | Obat | Aksesoris</p>
        </Container>
      </Jumbotron>
      <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div align="center" style={{ padding: 18+'px', 
                        backgroundColor: 'white',
                        borderRadius: 12+'px', marginTop: -80+'px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <Form className="d-flex justify-content-md-center">
              <Form.Group  style={{width: '236px', marginBottom: 0}} controlId="exampleForm.SelectCustom">
                <Form.Control as="select" custom>
                  <option>BNI</option>
                  <option>BRI</option>
                  <option>BCA</option>
                </Form.Control>
              </Form.Group> &nbsp;&nbsp;
              <Form.Control style={{width: '236px'}} type="email" placeholder="Enter email" />
              <Button className="ml-3"
                style={{backgroundColor: '#7453AB', border: 'none', width: 80+'px', height: '38px'}}>
                  Cari</Button>
            </Form>
          </div>
        </Col>
      </Row>
      </Container>
      <h1 className="mt-3 text-center color-primary">Produk</h1>
      <hr className="hr-bottom"/>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={3} align="center">
            <CardProduk/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProdukLainnya