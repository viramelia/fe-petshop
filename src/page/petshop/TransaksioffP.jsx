import React, {useState} from 'react'
import {Row, Col, Card, Button, Container, Image, Form} from 'react-bootstrap'
// import Form from 'react-bootstrap/Form'
import foto from '../../assets/merek-whiskas.png'

function TransaksioffP(){
  const [produk, setProduk] = useState([
    {
      nama: 'wiskas',
      foto: 'merek-whiskas.png',
    },
    {
      nama: 'me-O',
      foto: 'meo.png',
    },
    {
      nama: 'cat choize',
      foto: 'merek-whiskas.png',
    },
    {
      nama: 'cat choize',
      foto: 'merek-whiskas.png',
    },
  ])

  return(
    <Container align="center">
      <p style={{fontSize: '48px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Transaksi Offline Produk</p> 
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card >
            <Card.Body>
              <Form className="d-flex justify-content-md-center">
                <Form.Control  type="text" placeholder="nama produk/petshop" />
                <Button className="ml-3"
                  style={{backgroundColor: '#7453AB', border: 'none', width: 80+'px', height: '38px'}}>
                    Cari</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <form>
        <Row>
          {
            produk.map((data, index)=>(
              <Col key={index}  md={3}>
              <Card style={{ width: '15rem' }}>
                <Card.Img style={{padding: '20px'}} as={Image} variant="top" src={foto} />
                <Card.Body>
                  {/* <Card.Title>{data.nama}</Card.Title> */}
                  <p align="left">{data.nama}
                    <span style={{float: 'right', color: '#7345AB', fontWeight: 'bold'}}>Rp. 10.000</span>
                  </p>
                    <Form.Control as="select" aria-label="Default select example">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Control>
                </Card.Body>
              </Card>
              </Col>
            ))
          }
        </Row>
        <center><Button className="mt-3" style={{backgroundColor: '#7345AB', border: 'none', }} variant="primary">Checkout</Button></center>
      </form>
    </Container>
  )
}

export default TransaksioffP