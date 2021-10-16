import React, {useState, useEffect} from 'react'
import {Container, Accordion, Card, Badge, Form, Row, Col, Pagination} from 'react-bootstrap'
import Axios from 'axios'

function AntrianL() {
  const [load, setLoad] = useState(true)
  const [booking, setBooking] = useState([])
  // const [hewan, setHewan] = useState()
  const [berat, setBerat] = useState()
  const [price, setPrice] = useState()
  const user = localStorage.getItem('user')
  const [aktif, setAktif] = useState(1)
  const [last, setLast] = useState([])
  const totalPage = []

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{

    Axios.get(`http://127.0.0.1:8000/api/petshop-booking/${user}/terbooking?page=${aktif}`, config)
      .then(res=>{
        setBooking(res.data.data.data)
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
      <h1 className="text-center color-primary">Layanan terbooking</h1>
      <hr className="hr-bottom"/>
      <Accordion defaultActiveKey="0">
        {/* <Card classNae="d-none">
          <Accordion.Toggle as={Card.Header} eventKey="0">
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
          </Accordion.Collapse>
        </Card> */}
        {
          load ?
          booking.map((data, index)=>(
            <Card key={index}>
              <Accordion.Toggle as={Card.Header} eventKey={data.id}>
                {data.no_antrian} | {data.customer.nama_lengkap} <Badge variant="primary" style={{float:'right'}}>{data.status}</Badge>
                <p style={{color: '#848484', marginBottom: 0+'px'}}>{data.tgl_booking}</p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={data.id}>
                <Card.Body>
                  <table>
                    <tbody>
                      <tr>
                        <td>Nama layanan</td>
                        <td> : {data.layanan.nama}</td>
                      </tr>
                      <tr>
                        <td>Nama customer</td>
                        <td> : {data.customer.nama_lengkap}</td>
                      </tr>
                      <tr>
                        <td>Jenis layanan</td>
                        {
                          data.homecare == 'ya' ?
                          <td> : Homecare</td>:
                          <td> : Pelayanan langsung</td>
                        }
                      </tr>
                      <tr>
                        <td>Alamat</td>
                        <td> : {data.customer.alamat}</td>
                      </tr>
                      <tr>
                        <td>Tanggal pesan</td>
                        <td> : {data.created_at.split("T")[0]}</td>
                      </tr>
                      <tr>
                        <td>tanggal booking</td>
                        <td> : {data.tgl_booking}</td>
                      </tr>
                      <tr>
                        <td>Jam mulai</td>
                        <td> : {data.jam_mulai}</td>
                      </tr>
                      <tr>
                        <td>Jam selesai</td>
                        <td> : {data.jam_selesai}</td>
                      </tr>
                      <tr>
                        <td>Biaya</td>
                        <td> : Rp. {data.layanan.biaya_layanan}</td>
                      </tr>
                      <tr>
                        <td>Jenis hewan</td>
                        <td> : {data.jenis_hewan}</td>
                      </tr>
                      <tr>
                        <td>Keluhan</td>
                        <td>: {data.keluhan}</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <form action="#"> */}
                    {/* <Form.Group controlId="formBasicEmail">
                      <Form.Label>Jenis hewan</Form.Label>
                      <Form.Control type="text" placeholder="Kucing" 
                        onChange={e=>setHewan(e.target.value)}/>
                    </Form.Group> */}

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
                                    Axios.get(`http://127.0.0.1:8000/api/petshop-booking/${user}/terbooking?page=1`, config)
                                      .then(res=>{
                                        setBooking(res.data.data.data)
                                        setLoad(true)
                                      })
                                      .catch(err=>{})
                                  })
                                  .catch(err=>console.log(err))
                              }}>
                                <option value="terbooking">Terbooking</option>
                                <option value="selesai">Selesai</option>
                              </Form.Control>
                            </Form.Group>
                          </form>
                        </span>
                      </Col>
                    </Row>
                  {/* </form> */}
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
                  Axios.get(`http://127.0.0.1:8000/api/petshop-booking/${user}/terbooking?page=${data}`, config)
                    .then(res=>{
                      setLoad(false)
                      setBooking(res.data.data.data)
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

export default AntrianL