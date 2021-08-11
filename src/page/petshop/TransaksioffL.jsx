import React from 'react'
import {Container, Card, Form, InputGroup, Button, Row, Col} from 'react-bootstrap'

function TransaksioffL() {
  return (
    <Container align="center">
      <p style={{fontSize: '48px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Transaksi Offline Layanan</p> 
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      <Card>
        <Card.Body>
          <form action="">
            <Form.Group controlId="exampleForm.SelectCustom">
            <p style={{fontSize: '24px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Kategori Layanan</p>
              <Form.Control as="select" custom >
                <option>Grooming</option>
                <option>Pemberian Vaksin</option>
                <option>Pemeriksaan mata</option>
                <option>Cacingan</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
            <p style={{fontSize: '24px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Jenis Layanan</p>
              <Form.Control as="select" custom >
                <option>Grooming</option>
                <option>Pemberian Vaksin</option>
                <option>Pemeriksaan mata</option>
                <option>Cacingan</option>
              </Form.Control>
            </Form.Group>
            <Row>
              <Col md={6}>
                <p style={{fontSize: '24px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Pilih Jadwal</p>
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
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <p style={{fontSize: '24px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Jenis hewan</p>
                  <Form.Control type="text" placeholder="kucing" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <p style={{fontSize: '24px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Berat hewan / Kg</p>
                  <Form.Control type="number" placeholder="4" />
                </Form.Group>
              </Col>
            </Row>
            <hr className="mt-3" style={{border: '3px solid #7345AB'}}/>
            <p align="left">Total pembayaran 
            <span style={{float: 'right', color: '#7435AB' , fontWeight: 'bold'}}>Rp. 100.000</span> </p>
            <Button variant="primary" className="text-center" 
              style={{backgroundColor: '#7345AB', border: 'none'}}>Checkout</Button>
          </form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default TransaksioffL
