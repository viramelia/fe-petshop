import React, {useState, useEffect} from 'react'
import { Accordion, Card, Button, Badge, Container, Row, Col, Form, Pagination } from 'react-bootstrap'
import Axios from 'axios'

import CardPesananProdukfix from '../../components/CardPesananProdukfix'

function DaftarPesanan() {
  const [load, setLoad] = useState(true)
  const user = localStorage.getItem('user')
  const [transaksi, setTransaksi] = useState([])
  const [customer, setCustomer] = useState([])
  const [aktif, setAktif] = useState(1)
  const [last, setLast] = useState([])
  const totalPage = []

  const config = {
    headers:{
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }
  
  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/transaksi-confirmed/${user}/lunas?page=${aktif}`, config)
      .then(res=>{
        setTransaksi(res.data.data.data)
        const length = res.data.data.last_page
        for(let i = 1;i <= length ; i++){
          totalPage.push(i)
        }
        setLast(totalPage)
      })
      .catch(err=>{})
  }, [])

  return (
    <Container className="mt-3">
      <h1 className="text-center color-primary">Pesanan produk</h1>
      <hr className="hr-bottom"/>
    <Accordion defaultActiveKey="0">
      { load ?
        transaksi.map((data, index)=>(
          <Card key={index}>
            <Accordion.Toggle as={Card.Header} eventKey={data.id}>
              {data.customer.nama_lengkap}
              <Badge variant="warning" style={{float:'right'}}>{data.status}</Badge> 
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={data.id}>
              <Card.Body>
                <table>
                  <tr>
                    <td>Nama Customer</td>
                    <td> : {data.customer.nama_lengkap}</td>
                  </tr>
                  <tr>
                    <td>No HP</td>
                    <td> : {data.customer.no_hp}</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td> : {data.customer.alamat}</td>
                  </tr>
                  <tr>
                    <td>Tanggal Pesanan</td>
                    <td> : {data.customer.updated_at.split('T')[0]}</td>
                  </tr>
                  <tr>
                    <td>Bukti transfer </td>
                    <td> :</td>
                    <img style={{height: '150px'}} src={data.bukti_tf}/>
                  </tr>
                </table>
                <br/>
                <p style={{color: '#7345AB', fontSize: 30+'px', borderLeft: '4px solid #7345AB'}}>
                        &nbsp;List pesanan</p>
                      <Row className="justify-content-center">
                        {
                          data.pesanan.map((produk, index)=>(
                            <Col md={8} key={index} className="mt-3">
                              <CardPesananProdukfix idProduk={produk.id}/>
                            </Col>
                          ))
                        }
                        <Col md={8} className="mt-3">
                        <hr className="mt-3" style={{border: '3px solid #7345AB'}}/>
                        <p align="left">Total pembayaran <span style={{color: '#7345AB', float: 'right', fontWeight: 'bold'}}>
                          Rp. {data.total_harga}</span></p>
                        {/* <div className="d-flex"> */}
                        <form action="#">
                          <p align="left">Update status transaksi
                            <span style={{float: 'right', width: '150px'}}>
                              <Form.Group controlId="exampleForm.ControlSelect1" >
                                <Form.Control as="select" onChange={e=>{
                                  console.log(e.target.value)
                                  Axios.put(`http://127.0.0.1:8000/api/set-transaksi/${data.id}`, 
                                    {status: e.target.value}, config)
                                    .then(res=>{
                                      setLoad(false)
                                      Axios.get(`http://127.0.0.1:8000/api/transaksi-confirmed/${user}/lunas?page=1`, config)
                                        .then(res=>{
                                          setTransaksi(res.data.data.data)
                                          const length = res.data.data.last_page
                                          for(let i = 1;i <= length ; i++){
                                            totalPage.push(i)
                                          }
                                          setLast(totalPage)
                                          setLoad(true)
                                        })
                                        .catch(err=>{})
                                    })
                                    .catch(err=>console.log(err))
                                  }}>
                                  <option value={data.status} defaultValue>Lunas</option>
                                  <option value="pengiriman">Pengiriman</option>
                                </Form.Control>
                              </Form.Group>
                            </span>
                          </p>
                        </form>
                        </Col>
                      </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        )):''
      } 
</Accordion>
<center>
          <Pagination align="center" className="justify-content-center mt-3">
            {
              last.map((data, index)=>(
                <Pagination.Item key={index} onClick={()=>{
                  setAktif(data)
                  Axios.get(`http://127.0.0.1:8000/api/transaksi-confirmed/${user}/lunas?page=${data}`, config)
                    .then(res=>{
                      setLoad(false)
                      setTransaksi(res.data.data.data)
                      setLoad(true)
                    })
                }} key={data} active={data === aktif}>
                  {data}
                </Pagination.Item>
              ))
            }
          </Pagination>
        </center>
    </Container>
  )
}

export default DaftarPesanan

