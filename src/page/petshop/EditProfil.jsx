import React from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'

function EditPRofil() {
  return (
    <Container className="mt-3">
      <Form as="form">
        <Row>
          <Col md={4}>
            <img className="width-full" src={require('../../assets/merek-whiskas.png').default} alt="img"/>
            <Form.File 
                    className="mt-3"
                    id="custom-file"
                    label="Custom file input"
                    custom
                    accept="image/*"
                  />
          </Col>
          <Col md={8}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Nama
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Alamat
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                No. HP
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"/>
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Button className="mt-3" variant="primary">Update</Button>
      </Form>
    </Container>
  )
}

export default EditPRofil
