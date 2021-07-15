import React, { useState } from 'react'
import {Container, Form, Table, Button, Modal} from 'react-bootstrap'

function AntrianL() {
  const [detail, setDetail] = useState(false) 

  return (
      <Container>
      <p>Filter berdasarkan layanan</p>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Control as="select" custom >
          <option>Grooming</option>
          <option>Pemberian Vaksin</option>
          <option>Pemeriksaan mata</option>
          <option>Cacingan</option>
        </Form.Control>
      </Form.Group>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Tanggal booking</th>
            <th>Waktu antrian</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mimi</td>
            <td>27-12-2021</td>
            <td>10.00-11.00</td>
            <td>
              <Button onClick={()=>setDetail(true)}>Detail</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Modal show={detail} onHide={()=>setDetail(false)}>
        <Modal.Header>
          <Modal.Title>Detail booking layanan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <tr>
              <td>Nama customer </td>
              <td>: shiro</td>
            </tr>
            <tr>
              <td>Tanggal pesan </td>
              <td>: 3 - 9 -2021</td>
            </tr>
            <tr>
              <td>Tanggal booking </td>
              <td>: 27 - 12 - 2021</td>
            </tr>
            <tr>
              <td>Jenis layanan </td>
              <td>: Kesehatan</td>
            </tr>
            <tr>
              <td>Nama layanan </td>
              <td>: Vaksin</td>
            </tr>
            <tr>
              <td>Harga layanan / Kg </td>
              <td>: Rp.10.000</td>
            </tr>
            <tr>
              <td>Jenis hewan </td>
              <td>: Kucing</td>
            </tr>
            <tr>
              <td>Berat </td>
              <td>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control as="select" custom >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </Form.Control>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>Total pembayaran</td>
              <td>: Rp. 20.000</td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setDetail(false)}>Close</Button>
          <Button variant="primary" onClick={()=>setDetail(false)}>Checkout</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default AntrianL
