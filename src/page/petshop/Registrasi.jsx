import React from 'react'
import {Card, Form, Row, Col, Container, Button} from 'react-bootstrap' 
import {useHistory} from 'react-router-dom'
// import Row from 'react-bootstrap/Row'

function Registrasi(){
  const history = useHistory()
  return(
    <div>
      <Container>
      <h1 align="center">Registrasi Petshop</h1>
        <Card className="form-login">
          <Card.Body>
            <Form>
              <Row>
                <Col md={3}>
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
                    <Form.Control type="name" placeholder="Nama Petshop" />
                  </Form.Group>
                  <Form.Group controlId="formBasicalamat">
                    <Form.Control type="name" placeholder="Alamat Petshop" />
                  </Form.Group>
                  <Form.Group controlId="formBasicnomorhp">
                    <Form.Control type="number" placeholder="Nomor Hp" />
                  </Form.Group>
                  <Form.Group controlId="formBasicnomorrekening">
                    <Form.Control type="number" placeholder="Nomor Rekening" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Control as="select" custom>
                      <option>BNI</option>
                      <option>BRI</option>
                      <option>BCA</option>
                      <option>MANDIRI</option>
                      <option>BANK SULSELBAR</option>
                      <option>BTN</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="dob">
                            <Form.Label>Buka Jam </Form.Label>
                            <Form.Control type="time" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                        <Form.Group controlId="dob">
                            <Form.Label>Tutup Jam </Form.Label>
                            <Form.Control type="time" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                        <Form>
                                {['checkbox'].map((type) => (
                                  <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                      inline
                                      label="Senin"
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                      inline
                                      label="Selasa"
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                      inline
                                      label="Rabu"
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-3`}
                                    />
                                    
                                  </div>
                                ))}
                              </Form>

                              <Form>
                                {['checkbox'].map((type) => (
                                  <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                      inline
                                      label="Kamis"
                                      name="group2"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                      inline
                                      label="Jumat"
                                      name="group2"
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                      inline
                                      label="Sabtu"
                                      name="group2"
                                      type={type}
                                      id={`inline-${type}-3`}
                                    />
                                    
                                  </div>
                                ))}
                              </Form>
                              <Form>
                                {['checkbox'].map((type) => (
                                  <div key={`inline-${type}`} className="mb-1">
                                    <Form.Check
                                      inline
                                      label="Minggu"
                                      name="group3"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                  </div>
                                ))}
                              </Form>
                </Col>
              </Row>
            </Form>
                <center><Button variant="primary" type="submit" onClick={()=> history.push('/')}>
              Registrasi
            </Button></center>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
export default Registrasi