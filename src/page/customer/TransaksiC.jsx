import React, { Component } from 'react'
import { Container, Table, Button } from 'react-bootstrap'

export class TransaksiC extends Component {
  render() {
    return (
      <Container>
      <p>Daftar Transaksi</p>
       <Table striped bordered hover>
 <thead>
   <tr>
     <th>No</th>
     <th>Jenis</th>
     <th>Tanggal</th>
     <th>Status</th>
     <th>Aksi</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>Produk</td>
     <td>02-11-2019</td>
     <td>Proses</td>
     <td>
       <Button>Detail</Button>
     </td>
   </tr>
   <tr>
     <td>2</td>
     <td>Layanan</td>
     <td>02-11-2019</td>
     <td>Proses</td>
     <td>
       <Button>Detail</Button>
     </td>
   </tr>
   <tr>
     <td>3</td>
     <td>Produk</td>
     <td>02-11-2019</td>
     <td>Berhasil</td>
     <td>
       <Button>Detail</Button>
     </td>
   </tr>
 </tbody>
</Table>
    </Container>
    )
  }
}

export default TransaksiC
