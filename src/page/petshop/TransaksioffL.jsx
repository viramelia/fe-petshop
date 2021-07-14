import React from 'react'
import {Container, Card, Form, InputGroup, Button} from 'react-bootstrap'

function TransaksioffL() {
  return (
    <Container>
      <h1>Transaksi offline layanan</h1>
      <Card>
        <Card.Body>
          <form action="">
            <Form.Group controlId="exampleForm.SelectCustom">
            <h3 align="">Kategori Layanan</h3>
              <Form.Control as="select" custom >
                <option>Grooming</option>
                <option>Pemberian Vaksin</option>
                <option>Pemeriksaan mata</option>
                <option>Cacingan</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
            <h3 align="">Jenis Layanan</h3>
              <Form.Control as="select" custom >
                <option>Grooming</option>
                <option>Pemberian Vaksin</option>
                <option>Pemeriksaan mata</option>
                <option>Cacingan</option>
              </Form.Control>
            </Form.Group>
            <p className="float-right">Rp. 100.000</p>
            <br />
            <h3>Pilih Jadwal</h3>
            <InputGroup>
              <Form.Check inline label="09.00 - 10.00" name="jam" type="radio"/>
            </InputGroup>
            <InputGroup>
              <Form.Check inline label="10.00 - 11.00" name="jam" type="radio"/>
            </InputGroup>
            <InputGroup>
              <Form.Check inline label="11.00 - 12.00" name="jam" type="radio"/>
            </InputGroup>
            <InputGroup>
              <Form.Check inline label="13.00 - 14.00" name="jam" type="radio"/>
            </InputGroup>
            <InputGroup>
              <Form.Check inline label="14.00 - 15.00" name="jam" type="radio"/>
            </InputGroup>
            <Button variant="primary" className="text-center">Checkout</Button>
          </form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default TransaksioffL
