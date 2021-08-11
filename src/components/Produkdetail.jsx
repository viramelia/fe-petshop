import React, { Component } from 'react'
import { Row, Col, Form, Container } from 'react-bootstrap'

function Produkdetail(){

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <img className="img-produk" src={require('../assets/merek-whiskas.png').default} alt="gambar"/>
          <img src={require('../assets/shop.png').default} alt="petshop"/>
        </Col>
        <Col md={8}> 
          <div className="d-flex">
            <h3>Me-O</h3>
            <p className="justify-content-start">Rp. 10.000 /Pcs</p>
          </div>
          <p>produk ini adalah bala bala bala haghvdjjabdbhjdbj</p>
          {/* <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Pcs</Form.Label>
              <Form.Control as="select" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form> */}
        </Col>
      </Row>
      <div style={{backgroundColor: 'red', float: 'right'}}>
hbhjbjj
      </div>
    </Container>
  )
}

export default Produkdetail
