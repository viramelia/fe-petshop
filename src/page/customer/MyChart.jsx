import React from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import {useHistory, useRouteMatch} from 'react-router-dom'

import CardPesananProduk from '../../components/CardPesananProduk'

function MyChart() {
  const history = useHistory()
  const {url} = useRouteMatch()
  
  return (
    <Container>
      <h1 className="text-center color-primary">Daftar pesanan produk</h1>
      <hr className="hr-bottom"/>
      <div className="mt-3" align="center">
      <Row className="justify-content-center">
        <Col md={8} className="mt-3">
          <CardPesananProduk/>
        </Col>
      </Row>
      <Button  className="mt-3" onClick={()=>history.push(`/customer/payment`)}
        style={{backgroundColor: '#7453AB', border: 'none', }}>
          Checkout</Button>
      </div>
    </Container>
  )
}

export default MyChart