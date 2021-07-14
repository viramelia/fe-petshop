import React, { Component } from 'react'
import {Container, Row, Col, Form, InputGroup } from 'react-bootstrap'

function Layanandetail(){ 

    return (
     <Container className="mt-3">
         <Row>
              <Col md={4}>
                <img className="img-produk" src={require("../assets/merek-whiskas.png").default} alt="gambar"/>
              </Col>
              <Col md={8}> 
                <div className="d-flex">
                  <h3>Grooming</h3>
                  <p className="justify-content-start">Rp. 10.000</p>
                </div>
                <p>
                  Grooming ini bertujuan untuk menghindari kucing dri jamur 
                </p>
                <Form>
                <h3>Pilih Jadwal</h3>
                  <input type="date" />
                  <InputGroup>
                    <Form.Check inline label="09.00 - 10.00" name="jam" type="radio"/>
                  </InputGroup>
                  <InputGroup>
                    <Form.Check inline label="10.00 - 11.00" name="jam" type="radio"/>
                  </InputGroup>
                  <InputGroup>
                    <Form.Check inline label="11.00 - 12.00" name="jam" type="radio"/>
                  </InputGroup>
                  <InputGroup>
                    <Form.Check inline label="13.00 - 14.00" name="jam" type="radio"/>
                  </InputGroup>
                  <InputGroup>
                    <Form.Check inline label="14.00 - 15.00" name="jam" type="radio"/>
                  </InputGroup>
                </Form>
              </Col>
            </Row>
      </Container>
  )
}


export default Layanandetail
