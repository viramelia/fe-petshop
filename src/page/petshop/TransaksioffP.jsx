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
  ])

  return(
    <Container>
      <h2 className="text-center">Transaksi Offline Produk</h2>
      <form>
        <Row>
          {
            produk.map((data, index)=>(
              <Col key={index}  md={4}>
              <Card style={{ width: '15rem' }}>
                <Card.Img as={Image} variant="top" src={foto} />
                <Card.Body>
                  <Card.Title>{data.nama}</Card.Title>
                  <Card.Text>
                    Rp. 10.000
                  </Card.Text>
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
        <center><Button variant="primary">Checkout</Button></center>
      </form>
    </Container>
  )
}

export default TransaksioffP