import React, {useState, useEffect} from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Axios from 'axios'

import CardBookingLayanan from '../../components/CardBookingLayanan'

function MyChartLayanan() {
  const user = localStorage.getItem('user')
  const [load, setLoad] = useState(true)
  const [booking, setBooking] = useState([])
  const [page, setPage] = useState(1)

  const config = {
    headers : {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  const handleCallback = data =>{
    setLoad(data)
    Axios.get(`http://127.0.0.1:8000/api/booking-customer/${user}/terbooking/?page=${page}`, config)
      .then(res=>{
          setBooking(res.data.data.data)
          setLoad(true)
        // setTransaksi(res.data.data[0])
      })
      .catch(err=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/booking-customer/${user}/terbooking/?page=${page}`, config)
      .then(res=>{
        setBooking(res.data.data.data)
      })
      .catch(err=>{

      })
  }, [])

  return (
    <Container>
      <h1 className="text-center color-primary" style={{marginTop:'25px'}}>Layanan terbooking</h1>
      <hr className="hr-bottom"/>
      <div className="mt-3" align="center">
        <Row className="justify-content-center">
          {
            load ?
            booking.map((data, index)=>(
              <Col key={index} md={8} className="mt-3">
                <CardBookingLayanan idLayanan={data.id} parentCallback={handleCallback}/>
              </Col>
            )) : ''
          }
        </Row>
      </div>
    </Container>
  )
}

export default MyChartLayanan