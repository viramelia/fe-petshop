import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Home() {
  return (
    <Container className="mt-3">
      <h2 style={{color: '#7435AB'}}>Halo admin</h2>
      <Row>
        <Col md={4}>
          <Card style={{backgroundColor: '#FF4848'}}>
            <Card.Body>
              <h3 className="text-white">Jumlah petshop</h3>
              <h1 align="center" className="text-white">10</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{backgroundColor: '#0F52BA'}}>
            <Card.Body>
              <h3 className="text-white">jumlah customer</h3>
              <h1 align="center" className="text-white">10</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{backgroundColor: '#00C1D4'}}>
            <Card.Body>
              <h3 className="text-white">jumlah transaksi</h3>
              <h1 align="center" className="text-white">10</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
