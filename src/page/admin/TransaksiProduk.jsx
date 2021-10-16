import React, {useState, useEffect} from 'react'
import { Container, Table, Modal, Button, Form } from 'react-bootstrap'
import Axios from 'axios'

function TransaksiProduk() {
  const [load, setLoad] = useState(true)
  const [transaksi, setTransaksi] = useState([])
  const [petshop, setPetshop] = useState([])
  const [customer, setCustomer] = useState([])
  const [detail, setDetail] = useState([])
  const [pesanan, setPesanan] = useState([])
  const [status, setStatus] = useState()
  const [show, setShow] = useState(false);

  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/transaksi-konfimasi`, config)
      .then(res=>{
        setTransaksi(res.data.data)
      })
      .catch(err=>{
      })
  }, [])

  const handleClose = () => setShow(false);

  const handleDetail = id =>{
    // console.log("tesz")
    Axios.get(`http://127.0.0.1:8000/api/transaksi-detail/${id}`, config)
      .then(res=>{
        setDetail(res.data.data)
        setCustomer(res.data.data.customer)
        setPetshop(res.data.data.petshop)
        setPesanan(res.data.pesanan)
        setShow(true)
      })
      .catch(err=>{
      })
  }

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
            <th>Detail</th>
            <th>Update status</th>
          </tr>
        </thead>
        <tbody>
          { 
            load ?
            transaksi.map((data, index)=>(
              <tr key={index}>
                <td>{++index}</td>
                <td>{data.petshop.nama_lengkap}</td>
                <td>{data.customer.nama_lengkap}</td>
                  <td>{data.created_at.split("T")[0]}</td>
                <td>Rp. {data.total_harga}</td>
                <td>
                  <Button variant="primary" onClick={()=>handleDetail(data.id)}>
                    Detail
                  </Button>
                </td>
                <td>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control onChange={e=>{
                      console.log(e.target.value + data.id)
                      Axios.put(`http://127.0.0.1:8000/api/status-transaksi/${data.id}`, 
                        {status: e.target.value}, config)
                        .then(res=>{
                          setLoad(false)
                          Axios.get(`http://127.0.0.1:8000/api/transaksi-konfimasi`, config)
                          .then(res=>{
                            setTransaksi(res.data.data)
                            setLoad(true)
                          })
                          .catch(err=>{
                          })
                        })
                        .catch(err=>console.log(err))
                    }} as="select" >
                      <option value="belum">Menuggu</option>
                      <option value="lunas">Terkonfirmasi</option>
                    </Form.Control>
                  </Form.Group>
                </td>
              </tr>
            )) : ''
          }
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detail transaksi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            detail.length != 0 ? 
            <div>
              <table>
                <tr>
                  <td>Nama customer </td>
                  <td>: {customer.nama_lengkap}</td>
                </tr>
                <tr>
                  <td>Nama petshop </td>
                  <td>: {petshop.nama_lengkap}</td>
                </tr>
                <tr>
                  <td>Tangal checkout </td>
                  <td>: {detail.created_at.split("T")[0]}</td>
                </tr>
                <tr>
                  <td>Bukti transfer</td>
                  <td> :&nbsp;
                    <img style={{width: '200px', height: '200px'}}
                    src={detail.bukti_tf} alt="bukti"/>
                  </td>
                </tr>
              </table>
              <Table className="mt-3" striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>produk</th>
                    <th>Harga / Pcs</th>
                    <th>Pcs</th>
                    <th>Sub total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    pesanan.map((data, index)=>(
                      <tr key={index}>
                        <td>{++index}</td>
                        <td>{data.produk.nama}</td>
                        <td>{data.produk.harga_satuan_produk}</td>
                        <td>{data.jumlah_pesanan}</td>
                        <td>{data.jumlah_pesanan * data.produk.harga_satuan_produk}</td>
                      </tr>
                    ))
                  }
                  <tr>
                    <td colSpan="4">Total</td>
                    <td>Rp. {detail.total_harga}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            :''
          }
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default TransaksiProduk