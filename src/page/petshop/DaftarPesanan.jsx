import React, { Component } from 'react'
import { Container, Table, Form, Button} from 'react-bootstrap'

function DaftarPesanan(){
    return (
      <Container>
        <p>Daftar Pesanan Produk</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mimi</td>
              <td>02-11-2019</td>
              <td>
                <Button>Detail</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mumu</td>
              <td>02-11-2019</td>
              <td>
                <Button>Detail</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>lala</td>
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


export default DaftarPesanan
