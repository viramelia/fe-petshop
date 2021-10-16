import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap'
import {useHistory, useLocation} from 'react-router-dom'
import Axios from 'axios'

import CardPesananOffline from '../../components/CardPesananOffline'

function Checkout() {
  const history = useHistory()
  const location = useLocation()
  const [products, setProducts] = useState([])
  const [price, setPrice] = useState()
  const [kembalian, setKembalian] = useState(0)
  const [success, setSuccess] = useState(false)

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`,
      "content-type": "application/json",
    }
  }

  useEffect(()=>{
      const pesanan = location.state.pesanan
      const harga = location.state.harga
      setProducts(pesanan)
      setPrice(harga)
  }, [])

  const handleCheckout = () =>{
    const user = localStorage.getItem('user')
    // const data = new FormData()
    // data.append('total_harga', price)
    // data.append('pesanan', products)
    // console.log(products)
    const data = JSON.stringify({
      "total_harga": price,
      "pesanan": products
    })
    // console.log(data)
    Axios.post(`http://127.0.0.1:8000/api/transaksi-offline/${user}`, data, config)
      .then(res=>{
        setSuccess(true)
        setTimeout(()=>{
          history.push('/petshop/offline-produk')
        }, 5000)
      })
      .catch(err=>console.log(err.message))
  }

  return (
    <Container align="center">
      <p style={{fontSize: '32px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)', marginTop:'30px'}}>Transaksi Offline Produk</p> 
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      <div className="mt-3" align="center">
        <Row className="justify-content-center">
          {
            products.map((data, index)=>(
              <Col md={8} className="mt-3">
                <CardPesananOffline idProduk={data[0]} jumlah={data[1]} />
              </Col>
            ))
          }
          <Col md={8}>
            <hr className="mt-3" style={{border: '3px solid #7345AB', width: '671px'}}/>
            <p align="left">Total pembayaran 
              <span style={{color: '#F08C2F',fontWeight: 'bold', float: 'right'}}>
                Rp. {price}
              </span>
            </p>
            <p align="left">Cash
              <span style={{color: '#7345AB',fontWeight: 'bold', float: 'right'}}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="number" onChange={e=>setKembalian(e.target.value)}/>
                </Form.Group>
              </span>
            </p>
            <br />
            <p align="left">Kembalian
              <span style={{color: '#DC143C',fontWeight: 'bold', float: 'right'}}>
              Rp. {kembalian >= price ?kembalian - price : ''}
              </span>
            </p>
          </Col>
        </Row>
      </div>
      <Button className="mt-3" style={{backgroundColor: '#7345AB', border: 'none', }} variant="primary"
       onClick={handleCheckout}>
      Selesai</Button>
      <Modal show={success}>
        <Modal.Body align="center">
          <img src={require('../../assets/checked.png').default} style={{width: '30%'}} alt="success"/>
          <br /><br />
          <p align="center">Terima kasih telah melakukan transaksi</p> 
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default Checkout
