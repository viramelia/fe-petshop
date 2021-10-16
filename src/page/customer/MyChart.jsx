import React, {useState, useEffect} from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import {useHistory, useRouteMatch} from 'react-router-dom'
import Axios from 'axios'

import CardPesananProduk from '../../components/CardPesananProduk'

function MyChart() {
  const history = useHistory()
  const {url} = useRouteMatch()
  const [transaksi, setTransaksi] = useState([])
  const [pesanan, setPesanan] = useState([])
  const [loading, setLoading] = useState(true)
  const user = localStorage.getItem('user')

  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/transaksi/${user}`, config)
      .then(res=>{
        if(res.data.data.length >= 1){
          setPesanan(res.data.data[0].pesanan)
          setLoading(true)
        }
        setTransaksi(res.data.data[0])
      })
      .catch(err=>{
        console.log(err)
      })
  }, [])

  const handleCallback = data =>{
    setLoading(data)
    Axios.get(`http://127.0.0.1:8000/api/transaksi/${user}`, config)
      .then(res=>{
        if(res.data.data.length >= 1){
          setPesanan(res.data.data[0].pesanan)
          setLoading(true)
        }
        setTransaksi(res.data.data[0])
      })
      .catch(err=>{
        console.log(err)
      })
  }
  
  return (
    <Container>
      <h1 className="text-center color-primary" style={{marginTop:'25px'}}>Daftar pesanan produk</h1>
      <hr className="hr-bottom"/>
      <div className="mt-3" align="center">
      <Row className="justify-content-center">
        {
          loading?
           transaksi > 0? 
           '': pesanan.map((data, index)=>(
            <Col key={index} md={8} className="mt-3">
              <CardPesananProduk idPesanan={data.id} parentCallback={handleCallback}/>
            </Col>
          )): ''
        }
        {/* {
         
          pesanan.map((data, index)=>(
            <Col key={index} md={8} className="mt-3">
              <CardPesananProduk idPesanan={data.id}/>
            </Col>
          ))
        } */}
      </Row>
      {
        pesanan.length >= 1 && loading? 
        <Button  className="mt-3" onClick={()=>history.push(`/customer/payment`, {idTransaksi: transaksi.id})}
        style={{backgroundColor: '#7453AB', border: 'none', }}>
          Checkout</Button> : ''
         
      }
      </div>
    </Container>
  )
}

export default MyChart