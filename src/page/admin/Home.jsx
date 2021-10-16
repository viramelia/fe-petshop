import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Axios from 'axios'

function Home() {
  const [petshop, setPetshop] = useState()
  const [customer, setCustomer] = useState()
  const [waiting, setWaiting] = useState()
  const [success, setSuccess] = useState()

  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/count-summary`, config)
      .then(res=>{
        setPetshop(res.data.petshop)
        setCustomer(res.data.customer)
        setWaiting(res.data.transaksi_waiting)
        setSuccess(res.data.transaksi_sukses)
      })
      .catch(err=>{})
  }, [])

  return (
    <Container className="mt-3">
      <h2 style={{color: '#7435AB'}}>Halo admin</h2>
      <Row>
        <Col md={3}>
          <Card style={{backgroundColor: '#FF4848'}}>
            <Card.Body>
              <h3 className="text-white">Jumlah petshop</h3>
              <h1 align="center" className="text-white">{petshop}</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{backgroundColor: '#0F52BA'}}>
            <Card.Body>
              <h3 className="text-white">jumlah customer</h3>
              <h1 align="center" className="text-white">{customer}</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{backgroundColor: '#00C1D4'}}>
            <Card.Body>
              <h6 className="text-white">transaksi menunggu konfirmasi</h6>
              <h1 align="center" className="text-white">{waiting}</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{backgroundColor: '#00C1D4'}}>
            <Card.Body>
              <h5 className="text-white">jumlah transaksi sukses</h5>
              <h1 align="center" className="text-white">{success}</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
