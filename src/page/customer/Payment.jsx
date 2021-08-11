import React from 'react'
import {Container, Card, Button, Row, Col} from 'react-bootstrap'

import CardPesananProdukfix from '../../components/CardPesananProdukfix'

function Payment() {
  return (
    <Container>
      <h1 className="text-center color-primary">Checkout</h1>
      <hr className="hr-bottom"/>
      <div className="mt-3" align="center">
        <Row className="justify-content-center">
          <Col md={8} className="mt-3">
            <CardPesananProdukfix/>
          </Col> 
          <Col md={8} className="mt-3">
            <Card body>
              <p align="left">Total pebayaran <span style={{color: '#7345AB', fontWeight: 'bold'}}>Rp. 20.000</span></p>
              <p style={{fontWeight: 'bold', color: '#7345AB'}}>Upload bukti pembayaran</p>
              <p>Silahkan kirim pembayaran melalui <span style={{fontWeight: 'bold', color: '#7345AB'}}>Bank Sulselbar</span></p>
              <p>No. Rek <span style={{fontWeight: 'bold', color: '#7345AB'}}>084238956</span></p>
              <form className="d-block" action="#">
                <input type="file" accept="image/png, image/gif, image/jpeg"
                  style={{backgroundColor: '#7453AB', border: 'none', width: 110+'px'}}/>
                <br /><br />
                <Button 
                  style={{backgroundColor: '#7453AB', border: 'none', width: 300+'px'}}>
                    Kirim</Button>
              </form>
            </Card>
          </Col> 
        </Row>
      </div>    
    </Container>
  )
}

export default Payment
