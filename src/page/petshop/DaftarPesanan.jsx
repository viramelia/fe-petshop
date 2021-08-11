import React from 'react'
import { Accordion, Card, Button, Badge, Container, Row, Col, Form } from 'react-bootstrap'

import CardPesananProdukfix from '../../components/CardPesananProdukfix'

function DaftarPesanan() {

  return (
    <Container className="mt-3">
      <h1 className="text-center color-primary">Pesanan produk</h1>
      <hr className="hr-bottom"/>
    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Viramelia 
      <Badge variant="warning">Lunas</Badge> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <table>
          <tr>
            <td>Nama Customer</td>
            <td> :</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td> :</td>
          </tr>
          <tr>
            <td>Tanggal Pesanan</td>
            <td> :</td>
          </tr>
          <tr>
            <td>Bukti transfer </td>
            <td> :</td>
            <img style={{height: '150px'}} src={require('../../assets/meo.png').default}></img>
          </tr>
        </table>
        <br/>
        <p style={{color: '#7345AB', fontSize: 48+'px', borderLeft: '4px solid #7345AB'}}>
                &nbsp;List pesanan</p>
              <Row className="justify-content-center">
                <Col md={8} className="mt-3">
                  <CardPesananProdukfix/>
                </Col>
                <Col md={8} className="mt-3">
                <hr className="mt-3" style={{border: '3px solid #7345AB'}}/>
                <p align="left">Total pembayaran <span style={{color: '#7345AB', float: 'right'}}>Rp. 20.000</span></p>
                {/* <div className="d-flex"> */}
                <form action="#">
                  <p align="left">Update status transaksi
                    <span style={{float: 'right', width: '150px'}}>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select">
                          <option>Pengiriman</option>
                          <option>Diterima</option>
                        </Form.Control>
                      </Form.Group>
                    </span>
                  </p>
                </form>
                </Col>
              </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    </Container>
  )
}

export default DaftarPesanan

