import React from 'react'
import {Container, Table} from 'react-bootstrap'

function Produk() {
  return (
    <Container className="mt-3">
      <p align="center" style={{fontSize: '36px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>
        Riwayat transaksi Produk</p> 
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Petshop</th>
            <th>Customer</th>
            <th>Tanggal checkout</th>
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
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default Produk
