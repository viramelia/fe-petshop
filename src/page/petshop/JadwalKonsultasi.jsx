import React, {useState, useEffect} from 'react'
import { Container, Accordion, Card, Form, Row, Col, Pagination } from 'react-bootstrap'
import Axios from 'axios'
function JadwalKonsultasi() {
  const [load, setLoad] = useState(true)
  const user = localStorage.getItem('user')
  const [aktif, setAktif] = useState(1)
  const [konsultasi, setKonsultasi] = useState([])
  const [last, setLast] = useState([])
  const totalPage = []
  // UNTUK FORM
  const [berat, setBerat] = useState()
  const [price, setPrice] = useState()

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/petshop/konsultasi/${user}?page=${aktif}`, config)
      .then(res=>{
        setKonsultasi(res.data.data.data)
        const length = res.data.data.last_page
        for(let i = 1;i <= length ; i++){
          totalPage.push(i)
        }
        setLast(totalPage)
      })
      .catch(err=>console.log(err.message))
  }, [])

  return (
    <Container className="mt-3">
      <h1 className="text-center color-primary">Jadwal konsultasi anda</h1>
      <hr className="hr-bottom"/>
      <Accordion defaultActiveKey="0">
        {
          load ?
          konsultasi.map((data, index)=>(
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={data.id}>
                {data.no_antrian} | {data.customer.nama_lengkap} 
                <p style={{color: '#848484', marginBottom: 0+'px'}}>{data.tgl_booking}</p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={data.id}>
                <Card.Body>
                  <table>
                    <tr>
                      <td>layanan </td>
                      <td>: {data.layanan.nama}</td>
                    </tr>
                    <tr>
                      <td>Customer </td>
                      <td>: {data.customer.nama_lengkap}</td>
                    </tr>
                    <tr>
                      <td>Alamat</td>
                      <td>: {data.customer.alamat}</td>
                    </tr>
                    <tr>
                      <td>Tanggal konsultasi</td>
                      <td>: {data.tgl_booking}</td>
                    </tr>
                    <tr>
                      <td>Jam</td>
                      <td>: {data.jam_mulai}</td>
                    </tr>
                    <tr>
                      <td>Jenis hewan</td>
                      <td>: {data.jenis_hewan}</td>
                    </tr>
                    <tr>
                      <td>Keluhan </td>
                      <td>: {data.keluhan}</td>
                    </tr>
                  </table>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Berat / Kg</Form.Label>
                    <Form.Control type="number" min="1" placeholder="1" 
                      onChange={e=>{
                        setBerat(e.target.value)
                        setPrice(e.target.value * data.layanan.biaya_layanan)}}/>
                  </Form.Group>
                  <Row className="justify-content-center">
                    <Col md={8} className="mt-3">
                      <hr className="mt-3" style={{border: '3px solid #7345AB'}}/>
                      <p align="left">Total pembayaran 
                        <span style={{color: '#7345AB',fontWeight: 'bold', float: 'right'}}>Rp. {price}</span>
                      </p>
                      <span align="left">Update status pembayaran
                          <form action="#" style={{float: 'right'}}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                              {/* <Form.Label>Example select</Form.Label> */}
                              <Form.Control as="select" onChange={e=>{
                                Axios.put(`http://127.0.0.1:8000/api/booking-status/${data.id}`,
                                  {berat_hewan: berat, biaya: price, status: e.target.value}, 
                                  config)
                                  .then(res=>{
                                    setLoad(false)
                                    Axios.get(`http://127.0.0.1:8000/api/petshop/konsultasi/${user}?page=1`, config)
                                      .then(res=>{
                                        setKonsultasi(res.data.data.data)
                                        setLoad(true)
                                      })
                                      .catch(err=>{})
                                  })
                                  .catch(err=>console.log(err))
                              }}>
                                <option value="konsultasi">konsultasi</option>
                                <option value="selesai">Selesai</option>
                              </Form.Control>
                            </Form.Group>
                          </form>
                        </span>
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          )): ''
        }
      </Accordion>
      <center>
          <Pagination align="center" className="justify-content-center mt-3">
            {
              last.map((data, index)=>(
                <Pagination.Item key={index} onClick={()=>{
                  setAktif(data)
                  Axios.get(`http://127.0.0.1:8000/api/petshop/konsultasi?page=${data}`, config)
                    .then(res=>{
                      setLoad(false)
                      setKonsultasi(res.data.data.data)
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

export default JadwalKonsultasi
