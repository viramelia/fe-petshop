import React from 'react'
import { Container, Table } from 'react-bootstrap'

function TransaksiProduk() {
  return (
    <Container className="mt-3">
      <h2 style={{color: '#7435AB'}}>Waiting list transaksi</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Petshop</th>
            <th>Customer</th>
            <th>Tanggal checkout</th>
            <th>Total harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default TransaksiProduk
