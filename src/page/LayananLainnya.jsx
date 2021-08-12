import React from 'react'
import {Jumbotron, Container, Form, Button,Row, Col} from 'react-bootstrap'

import CardLayanan from '../components/CardLayanan'

function LayananLainnya() {
  return (
    <div>
      {/* <Jumbotron style={{backgroundImage: `url('./BASKET2.jpg')`, backgroundColor: '#7345AB', backgroundSize: 'cover', height:'558px' , width: '100%', backgroundRepeat:'no-repeat'}} fluid>
        <Container>
          <h1>asf</h1>
        </Container>
      </Jumbotron> */}
      <Jumbotron style={{backgroundColor: `#7435AB`, height: '275px',}} fluid>
        <Container>
          <h2 className="text-white">Temukan layanan dari berbagai petshop</h2>
          <p className="text-white">Kesehatan | Kebersihan | Perawatan</p>
        </Container>
      </Jumbotron>
      <div align="center">
        <div align="center" style={{width: '800px', padding: 18+'px', 
                      backgroundColor: 'white',
                      borderRadius: 12+'px', marginTop: -80+'px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
          <Form className="d-flex justify-content-md-center">
            <Form.Group  style={{width: '236px', marginBottom: 0}} controlId="exampleForm.SelectCustom">
              <Form.Control as="select" custom>
                <option>Petshop</option>
                <option>Merek</option>
              </Form.Control>
            </Form.Group> &nbsp;&nbsp;
            <Form.Control style={{width: '236px'}} type="text" placeholder="nama produk/petshop" />
            <Button className="ml-3"
              style={{backgroundColor: '#7453AB', border: 'none', width: 80+'px', height: '38px'}}>
                Cari</Button>
          </Form>
        </div>
      </div>
      <p style={{fontSize: '48px', color: '#46397e'}} align="center">Layanan</p> 
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={3} align="center">
            <CardLayanan/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LayananLainnya
