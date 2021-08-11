import React from 'react'
import {Container, Accordion, Card, Badge, Form, Row, Col} from 'react-bootstrap'

function TransaksiL() {
  return (
    <Container className="mt-3">
      <h1 className="text-center color-primary">Layanan terbooking</h1>
      <hr className="hr-bottom"/>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Viramelia <Badge variant="primary">Online</Badge>
            <p style={{color: '#848484', marginBottom: 0+'px'}}>27-12-2021</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <table>
                <tr>
                  <td>Nama customer</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Tanggal pesan</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>tanggal booking</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Jam mulai</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Jam selesai</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Biaya</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Jenis Hewan</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Berat</td>
                  <td> : 3 kg</td>
                </tr>
              </table>
                <Row className="justify-content-center">
                  <Col md={8} className="mt-3">
                    <hr className="mt-3" style={{border: '3px solid #7345AB'}}/>
                    <p align="left">Total pembayaran 
                      <span style={{color: '#7345AB',fontWeight: 'bold', float: 'right'}}>Rp. 20.000</span>
                    </p>
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

export default TransaksiL