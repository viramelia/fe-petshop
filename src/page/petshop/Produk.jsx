import React from 'react'
import {Card, Form, Row, Col, Container, Button} from 'react-bootstrap' 
import {useHistory} from 'react-router-dom'

function Produk(){
  const history = useHistory()
  return (
<div>
      <Container>
      <h1 align="center">Produk</h1>
        <Card className="form-produk">
          <Card.Body>
            <Form>
              <Row>
                <Col md={5}>
                <Form.File 
                  id="custom-file"
                  label="Custom file input"
                  custom
                  accept="image/*"
                />
                </Col>
                <Col>
                  <Form.Group controlId="formBasicnamaproduk">
                    <Form.Control type="name" placeholder="Nama Produk" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom">
                  <h1 align="">Jenis Produk</h1>
                    <Form.Control as="select" custom >
                      <option>Makanan</option>
                      <option>Minuman</option>
                      <option>Aksesoris</option>
                      <option>Pasir</option>
                      <option>Perlengkapan mandi</option>
                      <option>Obat-obatan</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formBasicdeskripsi">
                    <Form.Control type="text" placeholder="Deskripsi produk" />
                  </Form.Group>
                  <Row className="mb-3">
                  <Form.Group as={Col} controlId="formBasicharga">
                    <Form.Control type="number" placeholder="Harga Produk" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formBasicstok">
                    <Form.Control type="number" placeholder="Stok Produk" />
                  </Form.Group>
                  </Row>
                </Col>
              </Row>
            </Form>
                <center><Button variant="primary" type="submit" onClick={()=> history.push('/')}>
              Upload
            </Button></center>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
export default Produk

  



