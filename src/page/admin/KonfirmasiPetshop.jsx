import React from 'react'
import { Container, Table } from 'react-bootstrap'

function KonfirmasiPetshop() {
  return (
    <Container className="mt-3">
      <h2 style={{color: '#7345AB'}}>Waiting list akun petshop </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Alamat</th>
            <th>No. HP</th>
            <th>Foto</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </Table>
    </Container>
  )
}

export default KonfirmasiPetshop
