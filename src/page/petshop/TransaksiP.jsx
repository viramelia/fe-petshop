import React, {useState, useEffect} from 'react'
import { Container, Accordion, Card, Badge, Row, Col, Pagination} from 'react-bootstrap'
import Axios from 'axios'

import CardPesananProdukfix from '../../components/CardPesananProdukfix'

function TransaksiP() {
  const user = localStorage.getItem('user')
  const [transaksi, setTransaksi] = useState([])
  const [load, setLoad] = useState(true)
  const [aktif, setAktif] = useState(1)
  const [last, setLast] = useState([])
  const totalPage = []

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  } 

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/transaksi-confirmed/${user}/pengiriman&diterima&lunas?page=${aktif}`, config)
      .then(res=>{
        setTransaksi(res.data.data.data)
        const length = res.data.data.last_page
        for(let i = 1;i <= length ; i++){
          totalPage.push(i)
        }
        setLast(totalPage)
        // setCustomer(res.data.data.customer)
      })
      .catch(err=>console.log(err))
  }, [])

  return (
    <Container className="mt-3">
      <h1 className="text-center color-primary">Riwayat Transaksi Produk</h1>
      <hr className="hr-bottom"/>
      {
        load ? 
        <Accordion defaultActiveKey="0">
          {
            transaksi.map((data, index)=>(
              <Card key={index}>
                <Accordion.Toggle as={Card.Header} eventKey={data.id}>
                  {data.customer.nama_lengkap} &nbsp;
                  <Badge variant="success" style={{float:'right'}}>{data.status}</Badge>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={data.id}>
                  <Card.Body>
                    <table>
                      <tr>
                        <td>Nama Customer</td>
                        <td> : {data.customer.nama_lengkap}</td>
                      </tr>
                      <tr>
                        <td>No. HP</td>
                        <td> : {data.customer.no_hp}</td>
                      </tr>
                      <tr>
                        <td>Alamat</td>
                        <td> : {data.customer.alamat}</td>
                      </tr>
                      <tr>
                        <td>Tanggal Pesan</td>
                        <td> : {data.updated_at.split('T')[0]}</td>
                      </tr>
                      {
                        data.customer.nama_lengkap == 'guest' ?
                        '':
                        <tr>
                          <td>Bukti Transfer</td>
                          <td> :&nbsp;
                            <img style={{width: '200px', height: '200px'}}
                            src={data.bukti_tf} alt="bukti"/>
                          </td>
                        </tr>
                      }
                    </table>
                    <br />
                    <p style={{color: '#7345AB', borderLeft: '4px solid #7345AB', fontSize: '28px'}}>
                      &nbsp;List pesanan</p>
                    <Row className="justify-content-md-center">
                      
                      {
                        data.pesanan.map((pesan, index)=>(
                          <Col md={8} key={index} className="mt-3">
                            <CardPesananProdukfix idProduk={pesan.id}/>
                          </Col>
                        ))
                      }
                      
                      <Col md={8}>
                      <hr className="mt-3" style={{border: '3px solid #7345AB', width: '671px'}}/>
                          <p align="left">Total pembayaran 
                            <span style={{color: '#7345AB',fontWeight: 'bold', float: 'right'}}>
                              Rp. {data.total_harga}
                              </span>
                          </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            )) 
          }
        </Accordion>
        : ''
      }
      <center>
          <Pagination align="center" className="justify-content-center mt-3">
            {
              last.map((data, index)=>(
                <Pagination.Item key={index} onClick={()=>{
                  setAktif(data)
                  Axios.get(`http://127.0.0.1:8000/api/transaksi-confirmed/${user}/pengiriman&diterima&lunas?page=${data}`, config)
                    .then(res=>{
                      setLoad(false)
                      setTransaksi(res.data.data.data)
                      console.log(res.data.data.data)
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

export default TransaksiP
