import React, { useState } from 'react'
import { Container, Table, Form, Button, Modal} from 'react-bootstrap'

function DaftarPesanan(){
  const [detail, setDetail] = useState(false)
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
                <Button onClick={()=>setDetail(true)}>Detail</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Modal show={detail} onHide={()=>setDetail(false)}>
          <Modal.Header>
            <Modal.Title>Daftar pesanan</Modal.Title>
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
                <td>Bukti pembayaran </td>
                <td>: 
                  <img style={{width: '150px'}} src={require('../../assets/merek-whiskas.png').default} alt="bukti"/>
                </td>
              </tr>
            </table>
            <h3>List pesanan</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Gambar</th>
                  <th>Nama produk</th>
                  <th>harga</th>
                  <th>pcs</th>
                  <th>total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                  <img style={{width: '80px'}} src={require('../../assets/merek-whiskas.png').default} alt="bukti"/>
                  </td>
                  <td>meO</td>
                  <td>RP. 10.000</td>
                  <td>3</td>
                  <td>Rp.30.000</td>
                </tr>
                <tr>
                  <td colSpan="5">Total pembayaran</td>
                  <td>Rp. 30.000</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>setDetail(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>setDetail(false)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    )
  }


export default DaftarPesanan
