import React, {useState, useEffect} from 'react'
import { Container, Accordion, Card, Badge, Row, Col, Form, Pagination} from 'react-bootstrap'
import Axios from 'axios'

import CardPesananProdukfix from '../../components/CardPesananProdukfix'
import userEvent from '@testing-library/user-event'

function TransaksiProduk() {
  const [load, setLoad] = useState(true)
  const user = localStorage.getItem('user')
  const [transaksi, setTransaksi] = useState([])
  const [aktif, setAktif] = useState(1)
  const [last, setLast] = useState([])
  const totalPage = []

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/transaksi-by-id/${user}?page=${aktif}`, config)
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
      <h1 className="text-center color-primary" style={{fontSize:'35px', marginTop:'30px'}}>Riwayat transaksi produk</h1>
      <hr className="hr-bottom"/>
      {
        load? 
          <Accordion defaultActiveKey="0">
            {  
              load ? 
              transaksi.map((data, index)=>(
                <Card key={index}>
                  <Accordion.Toggle as={Card.Header} eventKey={data.id}>
                    {data.petshop.nama_lengkap} <Badge variant="success" style={{float:'right'}}>{data.status}</Badge>
                    <p>{data.created_at.split('T')[0]}</p>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={data.id}>
                    <Card.Body>
                      <table>
                        <tr>
                          <td>Tanggal pesan</td>
                          <td> : {data.created_at.split('T')[0]}</td>
                        </tr>
                        <tr>
                          <td>Bukti transfer</td>
                          <td> :&nbsp;
                            <img style={{width: '200px', height: '200px'}}
                            src={data.bukti_tf} alt="bukti"/>
                          </td>
                        </tr>
                      </table>
                      <p className="mt-3" style={{color: '#7345AB', borderLeft: '4px solid #7345AB', fontSize: '28px'}}>
                        &nbsp;List pesanan</p>
                      <Row className="justify-content-md-center">
                        {
                          data.pesanan.map((tes, index)=>(
                            <Col md={8} className="mt-3">
                              <CardPesananProdukfix idProduk={tes.id}/>
                            </Col>
                          ))
                        }
                        <Col md={8}>
                        <hr className="mt-3" style={{border: '3px solid #7345AB', width: '671px'}}/>
                            <p align="left">Total pembayaran 
                              <span style={{color: '#7345AB',fontWeight: 'bold', float: 'right'}}>Rp. {data.total_harga}</span>
                            </p>
                            {
                              data.status == 'pengiriman'?
                              <p align="left">Diterima
                                <span style={{float: 'right'}}>
                                  <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select" onChange={e=>{
                                      Axios.put(`http://127.0.0.1:8000/api/set-transaksi/${data.id}`, 
                                        {status: e.target.value}, config)
                                        .then(res=>{
                                          setLoad(false)
                                          Axios.get(`http://127.0.0.1:8000/api/transaksi-by-id/${user}?page=1`, config)
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
                                        .catch(err=>{})
                                      }}>
                                      <option value="pengiriman" >Belum</option>
                                      <option value="diterima" >Ya</option>
                                    </Form.Control>
                                  </Form.Group>
                                </span>
                              </p>: ''
                            }
                        </Col>
                      </Row>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )) : ''
            }
          </Accordion>
        :''
      }
      <center>
        <Pagination align="center" className="justify-content-center mt-3">
          {
            last.map((data, index)=>(
              <Pagination.Item key={index} onClick={()=>{
                setAktif(data)
                Axios.get(`http://127.0.0.1:8000/api/transaksi-by-id/${user}?page=${data}`, config)
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

export default TransaksiProduk