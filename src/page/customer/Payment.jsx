import React, {useState, useEffect} from 'react'
import {Container, Card, Button, Row, Col, Modal} from 'react-bootstrap'
import Axios from 'axios'
import {useLocation, useHistory} from 'react-router-dom'

import CardPesananProdukfix from '../../components/CardPesananProdukfix'

function Payment() {
  const history = useHistory()
  const location = useLocation()
  const [success, setSuccess] = useState(false)
  const [pesanan, setPesanan] = useState([])
  const [transaksi, setTransaksi] = useState([])
  const [petshop, setPetshop] = useState([])
  const [total, setTotal] = useState()
  const [bukti, setBukti] = useState()

  const config = {
    headers:{
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'multipart/form-data'
    }
  }

  useEffect(()=>{
    const user = localStorage.getItem(`user`)
    const idTransaksi =location.state.idTransaksi
    Axios.get(`http://127.0.0.1:8000/api/transaksi/${user}`, config)
      .then(res=>{
          setPesanan(res.data.data[0].pesanan)
          setTransaksi(res.data.data[0])
      })
      .catch(err=>{

      })
    Axios.get(`http://127.0.0.1:8000/api/checkout/${user}/${idTransaksi}`, config)
      .then(res=>{
        setTotal(res.data.data)
        setPetshop(res.data.petshop)
      })
      .catch(err=>{
      })
  }, [])

  const handleUpload = e =>{
    e.preventDefault()
    const idTransaksi =location.state.idTransaksi
    const data = new FormData()
    data.append('bukti_tf', bukti)
    Axios.post(`http://127.0.0.1:8000/api/checkout/${idTransaksi}`, data, config)
      .then(res=>{
        setSuccess(true)
        setTimeout(()=>{
          history.push('/customer')
        }, 5000)
      })
      .catch(err=>{
        console.log(err)
      })
  }

  return (
    <Container>
      <h1 className="text-center color-primary" style={{marginTop:'20px', fontSize:'38px'}}>Checkout</h1>
      <hr className="hr-bottom"/>
      <div className="mt-3" align="center">
        <Row className="justify-content-center">
          {
            pesanan.map((data, index)=>(
              <Col md={8} key={index} className="mt-3"> 
                <CardPesananProdukfix idProduk={data.id}/>
              </Col> 
            ))
          }
          <Col md={8} className="mt-3">
            <Card body>
              <p align="left">Total pembayaran 
                <span style={{color: '#F08C2F', fontWeight: 'bold'}}>
                  &nbsp;Rp. {total}
                </span>
              </p>
              <p style={{fontWeight: 'bold', color: '#7345AB'}}>Upload bukti pembayaran</p>
              <p>Silahkan kirim pembayaran melalui <span style={{fontWeight: 'bold', color: '#DC143C'}}>
                Bank {petshop.nama_bank}</span></p>
              <p>No. Rek <span style={{fontWeight: 'bold', color: '#DC143C'}}>
                {petshop.no_rek}</span></p>
              <form className="d-block" action="#" onSubmit={handleUpload}>
                <input type="file" accept="image/png, image/gif, image/jpeg" onChange={e=>setBukti(e.target.files[0])}
                  style={{backgroundColor: '#7453AB', border: 'none', width: 110+'px'}}/>
                <br /><br />
                <Button type="submit"
                  style={{backgroundColor: '#7453AB', border: 'none', width: 200+'px'}}>
                    Kirim</Button>
              </form>
            </Card>
          </Col> 
        </Row>
      </div>    
      <Modal show={success}>
        <Modal.Body align="center">
          <img src={require('../../assets/checked.png').default} style={{width: '30%'}} alt="success"/>
          <br /><br />
          <p align="center">Berhasil mengirim bukti transfer silahkan tunggu konfirmasi</p> 
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default Payment
