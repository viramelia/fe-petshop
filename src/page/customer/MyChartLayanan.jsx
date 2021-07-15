import React, {useState} from 'react'
import { Container, Button, Table, Modal } from 'react-bootstrap'

function MyChartLayanan() {
  const [detail, setDetail]= useState(false)

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
              <Button onClick={()=>setDetail(true)}>Detail</Button>
            </td>
          </tr>
          <tr>
            <td>Vaksin</td>
            <td>petshop</td>
            <td>13.00-14.00</td>
                  <td>
              <Button onClick={()=>setDetail(true)}>Detail</Button>
            </td>
          </tr>
          <tr>
            <td>konsul</td>
            <td>petshop</td>
            <td>13.00-14.00</td>
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
              <td>: 2 Kg</td>
            </tr>
            <tr>
              <td>Total pembayaran</td>
              <td>: Rp. 20.000</td>
            </tr>
          </table>
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

export default MyChartLayanan
