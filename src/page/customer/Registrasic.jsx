import React from 'react'
import {Card, Form, Row, Col, Container, Button} from 'react-bootstrap' 
import {useHistory} from 'react-router-dom'


function Registrasic(){
  const history = useHistory()
  return (
<div>
      <Container>
      <h1 align="center">Registrasi Customer</h1>
        <Card className="form-registrasic">
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
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicpassword">
                    <Form.Control type="password" placeholder="Enter password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicpassword">
                    <Form.Control type="password" placeholder="Confirmasi password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicnamapetshop">
                    <Form.Control type="name" placeholder="Nama Anda" />
                  </Form.Group>
                  <Form>
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            inline
                            label="Laki - Laki"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            label="Perempuan"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                        </div>
                      ))}
                    </Form>
                  <Form.Group controlId="formBasicalamat">
                    <Form.Control type="name" placeholder="Alamat Petshop" />
                  </Form.Group>
                  <Form.Group controlId="formBasicnomorhp">
                    <Form.Control type="number" placeholder="Nomor Hp" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
                <center><Button variant="primary" type="submit" onClick={()=> history.push('/customer')}>
              Registrasi
            </Button></center>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
export default Registrasic

  



