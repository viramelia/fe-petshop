import React, { Component } from 'react'
import {Container, Form, Table, Button} from 'react-bootstrap'

function AntrianL() {
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
    <th>Waktu antrian</th>
    <th>Status</th>
    <th>Aksi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>mimi</td>
    <td>10.00-11.00</td>
    <td>
    <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control as="select" custom >
              <option>Terbooking</option>
              <option>Belum booking</option>
            </Form.Control>
          </Form.Group>
    </td>
    <td>
      <Button>Detail</Button>
    </td>
  </tr>
  <tr>
    <td>mumu</td>
    <td>13.00-14.00</td>
    <td><Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control as="select" custom >
              <option>Terbooking</option>
              <option>Belum booking</option>
            </Form.Control>
          </Form.Group></td>
          <td>
      <Button>Detail</Button>
    </td>
  </tr>
  <tr>
    <td>shiro</td>
    <td>13.00-14.00</td>
    <td><Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control as="select" custom >
              <option>Terbooking</option>
              <option>Belum booking</option>
            </Form.Control>
          </Form.Group></td>
          <td>
      <Button>Detail</Button>
    </td>
  </tr>
</tbody>
</Table>
    </Container>
    )
  }


export default AntrianL
