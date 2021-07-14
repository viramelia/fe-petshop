import React from 'react'
import { Container, Table, Button } from 'react-bootstrap'

function TransaksiP (){
   return (
     <Container>
       <p>Daftar Transaksi</p>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>Jenis</th>
      <th>Via</th>
      <th>Tanggal</th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mimi</td>
      <td>Produk</td>
      <td>Online</td>
      <td>02-11-2019</td>
      <td>
        <Button>Detail</Button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Mumu</td>
      <td>Layanan</td>
      <td>Online</td>
      <td>02-11-2019</td>
      <td>
        <Button>Detail</Button>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>lala</td>
      <td>Produk</td>
      <td>Offline</td>
      <td>02-11-2019</td>
      <td>
        <Button>Detail</Button>
      </td>
    </tr>
  </tbody>
</Table>
     </Container>
   )
}

export default TransaksiP