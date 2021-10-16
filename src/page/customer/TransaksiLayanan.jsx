import React, {useState, useEffect} from 'react'
import { Container, Accordion, Badge, Card, Row, Col, Pagination } from 'react-bootstrap'
import Axios from 'axios'

function TransaksiLayanan() {
  const user = localStorage.getItem('user')
  const [transaksi, setTransaksi] = useState([])
  const [load, setLoad] = useState(true)
  const [aktif, setAktif] = useState(1)
  const [last, setLast] = useState([])
  const totalPage = []

  const config = {
    headers:{
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{

    Axios.get(`http://127.0.0.1:8000/api/booking-customer/${user}/selesai?page=${aktif}`, config)
      .then(res=>{
        setTransaksi(res.data.data.data)
        const length = res.data.data.last_page
        for(let i = 1;i <= length ; i++){
          totalPage.push(i)
        }
        setLast(totalPage)
      })
  }, [])

  return (
    <Container className="mt-3">
      <h1 className="text-center color-primary">Riwayat transaksi layanan</h1>
      <hr className="hr-bottom"/>
      <Accordion defaultActiveKey="0">
        {
          load ?
          transaksi.map((data, index)=>(
            <Card key={index}>
              <Accordion.Toggle as={Card.Header} eventKey={data.id}>
                {data.layanan.nama} <Badge variant="success" style={{float:'right'}}>{data.status}</Badge>
                <p>{data.tgl_booking}</p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={data.id}>
                <Card.Body>
                  <table>
                    <tr>
                      <td>No. antrian</td>
                      <td>: {data.no_antrian}</td>
                    </tr>
                    <tr>
                      <td>Tanggal pesan</td>
                      <td> : {data.created_at.split("T")[0]}</td>
                      {/* <td> : {data.created_at}</td> */}
                    </tr>
                    <tr>
                      <td>Tanggal booking</td>
                      <td> : {data.tgl_booking}</td>
                    </tr>
                    <tr>
                      <td>Petshop</td>
                      <td> : {data.petshop.nama_lengkap}</td>
                    </tr>
                    <tr>
                      <td>Nama layanan</td>
                      <td> : {data.layanan.nama}</td>
                    </tr>
                    <tr>
                      <td>Kategori layanan</td>
                      <td> : {data.layanan.kategori}</td>
                    </tr>
                    <tr>
                      <td>Jenis layanan</td>
                      {
                        data.homecare == 'ya'?
                        <td>: Homecare</td>:
                        <td>: Pelayanan langsung</td>
                      }
                    </tr>
                    <tr>
                      <td>Jenis hewan</td>
                      <td> : {data.jenis_hewan}</td>
                    </tr>
                    <tr>
                      <td>Keluhan</td>
                      <td>: {data.keluhan}</td>
                    </tr>
                    <tr>
                      <td>Berat hewan</td>
                      <td> : {data.berat_hewan}</td>
                    </tr>
                    <tr>
                      <td>Harga layanan / Kg</td>
                      <td> : Rp. {data.layanan.biaya_layanan}</td>
                    </tr>
                  </table>
                  <Row className="justify-content-center">
                    <Col md={8} className="mt-3">
                      <hr style={{border: '4px solid #7345AB'}}/>
                      <p align="left">Total pembayaran
                        <span style={{float: 'right', color: '#7345AB', fontWeight: 'bold'}}>
                          Rp. {data.biaya}</span>
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          )) : ''
        }
      </Accordion>
      <center>
        <Pagination align="center" className="justify-content-center mt-3">
          {
            last.map((data, index)=>(
              <Pagination.Item key={index} onClick={()=>{
                setAktif(data)
                Axios.get(`http://127.0.0.1:8000/api/booking-customer/${user}/selesai?page=${data}`, config)
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

export default TransaksiLayanan