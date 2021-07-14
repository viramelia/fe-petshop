import React from 'react'
import { Container, Form, Button, Table } from 'react-bootstrap'

function MyChartLayanan() {

  return (
    <Container align="center">
       <Table striped bordered hover>
<thead>
  <tr>
    <th>Nama Layanan</th>
    <th>Petshop</th>
    <th>Waktu antrian</th>
    <th>Aksi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Grooming</td>
    <td>petshop</td>
    <td>10.00-11.00</td>
    <td>
      <Button>Detail</Button>
    </td>
  </tr>
  <tr>
    <td>Vaksin</td>
    <td>petshop</td>
    <td>13.00-14.00</td>
          <td>
      <Button>Detail</Button>
    </td>
  </tr>
  <tr>
    <td>konsul</td>
    <td>petshop</td>
    <td>13.00-14.00</td>
          <td>
      <Button>Detail</Button>
    </td>
  </tr>
</tbody>
</Table>
    </Container>
  )
}

export default MyChartLayanan
