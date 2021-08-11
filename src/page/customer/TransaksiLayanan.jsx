import React from 'react'
import { Container, Accordion, Badge, Card, Row, Col } from 'react-bootstrap'

function TransaksiLayanan() {
  return (
    <Container className="mt-3">
      <h1 className="text-center color-primary">Riwayat transaksi layanan</h1>
      <hr className="hr-bottom"/>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Mandi <Badge variant="success">Selesai</Badge>
            <p>27-12-2021</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <table>
                <tr>
                  <td>Tanggal pesan</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Tanggal booking</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Petshop</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Jenis layanan</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Nama layanan</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Jenis hewan</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Berat hewan</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Harga layanan / Kg</td>
                  <td> :</td>
                </tr>
                <tr>
                  <td>Bukti transfer</td>
                  <td> :&nbsp;
                    <img style={{width: '200px', height: '200px'}}
                    src={require('../../assets/profil.JPG').default} alt="bukti"/>
                  </td>
                </tr>
              </table>
              <Row className="justify-content-center">
                <Col md={8} className="mt-3">
                  <hr style={{border: '4px solid #7345AB'}}/>
                  <p align="left">Total pembayaran
                    <span style={{float: 'right', color: '#7345AB', fontWeight: 'bold'}}>Rp. 20.000</span>
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

export default TransaksiLayanan