import React from 'react'
import {Card, Form, Row, Col, Container, Button} from 'react-bootstrap' 
import {useHistory} from 'react-router-dom'

function Layanan(){
  const history = useHistory()
  return (
<div>
      <Container>
      <h1 align="center">Layanan</h1>
        <Card className="form-layanan">
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
                  <Form.Group controlId="formBasicnamalayanan">
                    <Form.Control type="name" placeholder="Nama Layanan" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom">
                  <h1 align="">Jenis Layanan</h1>
                    <Form.Control as="select" custom >
                      <option>Grooming</option>
                      <option>Pemberian Vaksin</option>
                      <option>Pemeriksaan mata</option>
                      <option>Cacingan</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom">
                  <h1 align="">Kategori</h1>
                    <Form.Control as="select" custom >
                      <option>Kesehatan</option>
                      <option>Mandi</option>
                      <option>Penitipan</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formBasicdeskripsi">
                    <Form.Control type="text" placeholder="Deskripsi layanan" />
                  </Form.Group>
                  <Row className="mb-3">
                  <Form.Group as={Col} controlId="formBasicharga">
                    <Form.Control type="number" placeholder="Harga" />
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
export default Layanan
