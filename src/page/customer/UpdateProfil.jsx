import React from 'react'
import {Row, Col, Image, Card, Form, Button, Container} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function UpdateProfil() {
const history = useHistory()
  return (
    <Container>
      <div align="center">
        <p style={{fontSize: '48px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Update profil</p> 
        <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      </div>
      <Card>
        <Card.Body>
        <Row>
        <Col>
        <center>
        <Image className="img-profil-update mt-3" src={require('../../assets/petshop.png').default} roundedCircle></Image>
        <Form.Group controlId="formFile" className="mt-3">
          <Form.Label>Update Foto profil</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        </center>
        </Col>
        <Col>
                <Form.Group>
                  <p>Nama</p>
                  <Form.Control type="text" placeholder="Viramelia Basri"/>
                </Form.Group>
                  <p>Email</p>
                < Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="viramelia@gmail.com" />
                </Form.Group>
                 <p>Password</p>
                  <Form.Group controlId="formBasicpassword">
                    <Form.Control type="password" placeholder="melodyjkt48" />
                  </Form.Group>
        </Col>
        <Col>
        <Form>
          <p>Jenis Kelamin</p>
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
                    <p>Alamat</p>
                    <Form.Control type="name" placeholder="Jalan Al-Markaz" />
                  </Form.Group>
                  <Form.Group controlId="formBasicnomorhp">
                    <p>No Handphone</p>
                    <Form.Control type="number" placeholder="Nomor Hp" />
                  </Form.Group>
        </Col>
        </Row>
        <div align="center">
          <Button style={{backgroundColor: '#7435AB', border: 'none'}}>Simpan</Button>
          &nbsp;
          <Button style={{backgroundColor: 'white', border: '1px solid #7435AB', color: '#7345AB'}}>Batal</Button>
        </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default UpdateProfil
