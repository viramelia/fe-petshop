import React, {useState} from 'react'
import { Container, Table, Button, Row, Col, Form, Modal } from 'react-bootstrap'

function TableProduk(){
  const [detail, setDetail] = useState(false)

  return(
    <div>
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
              <Button onClick={()=>setDetail(true)}>Detail</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Produk</td>
            <td>02-11-2019</td>
            <td>Berhasil</td>
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
    </div>
  )
}

function TableLayanan(){
  const [detail, setDetail] = useState(false)

  return(
    <div>
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
              <td>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control as="select" custom >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </Form.Control>
                </Form.Group>
              </td>
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
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

function TransaksiP (){
  const [jenis, setJenis] = useState(true)
   return (
     <Container>
        <p>Daftar Transaksi</p>
        <Row>
          <Col md={2}>
            <p>Pilih jenis transaksi</p>
          </Col>
          <Col md={4}>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Control as="select" onChange={()=>setJenis(!jenis)} custom>
                  <option value="produk">Produk</option>
                  <option value="layanan">Layanan</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        {
          jenis ? <TableProduk/> : <TableLayanan/>
        }
     </Container>
   )
}

export default TransaksiP