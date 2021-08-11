import React from 'react'
import { Container, Accordion, Card, Badge, Row, Col} from 'react-bootstrap'

import CardPesananProdukfix from '../../components/CardPesananProdukfix'

function TransaksiProduk() {
  return (
    <Container className="mt-3">
      <h1 className="text-center color-primary">Produk</h1>
      <hr className="hr-bottom"/>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            27-12-2021 <Badge variant="success">Selesai</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <table>
                <tr>
                  <td>Tanggal pesan</td>
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
              <br />
              <p style={{color: '#7345AB', borderLeft: '4px solid #7345AB', fontSize: '28px'}}>
                &nbsp;List pesanan</p>
              <Row className="justify-content-md-center">
                <Col md={8} className="mt-3">
                  <CardPesananProdukfix/>
                </Col>
                <Col md={8} className="mt-3">
                  <CardPesananProdukfix/>
                </Col>
                <Col md={8} className="mt-3">
                  <CardPesananProdukfix/>
                </Col>
                
                <Col md={8}>
                <hr className="mt-3" style={{border: '3px solid #7345AB', width: '671px'}}/>
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

export default TransaksiProduk