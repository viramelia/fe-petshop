import React, {useState, useEffect} from 'react'
import {Row, Col, Container, Card, Button, Form, Modal, Badge} from 'react-bootstrap'
import {useHistory, useLocation} from 'react-router-dom'
import Axios from 'axios'
import { concatSeries } from 'async'
import Produk from './petshop/Produk'

function DetailProduk(){
  const history = useHistory()
  const location = useLocation()
  const [produk, setProduk] = useState([])
  const [petshop, setPetshop] = useState([])
  const [pcs, setPcs] = useState(0)
  const [price, setPrice] = useState(0)
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const [saveToAdd, setSaveToAdd] = useState("aman")
  const [payd, setPayd] = useState(false)
  const role = localStorage.getItem('role')
  const user = localStorage.getItem('user')

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`,
      'Content-type': 'multipart/form-data'
    }
  }

  const handleClose = () =>{
    setSuccess(false)
    setFailed(false)
    setPayd(false)
  }

  const detailPetshop = () =>{

    if(role == 'customer'){
      history.push('/customer/detail-petshop', {idPetshop: petshop.id})
    }
    else if(role == 'petshop'){
      history.push('/petshop/detail-petshop', {idPetshop: petshop.id})
    }
    else{
      history.push('/detail-petshop', {idPetshop: petshop.id})
    }
  }

  const hitungHarga = e =>{
    setPcs(e.target.value)
    setPrice(produk.harga_satuan_produk * e.target.value)
  }

  const handleSubmit = e =>{
    e.preventDefault()
    if(role != 'customer'){
      setFailed(true)
    }
    else{
      if(saveToAdd == "aman" || saveToAdd == petshop.id){
        console.log(produk.id)
        const user = localStorage.getItem('user')
        const data = new FormData()
        data.append('id_petshop', petshop.id)
        data.append('id_customer', user)
        data.append('total_harga', price)
        data.append('jumlah_pesanan', pcs)
        Axios.post(`http://127.0.0.1:8000/api/pesan-produk/${produk.id}`, data, config)
          .then(res=>{
            console.log(res.data)
            setSuccess(true)
          })
          .catch(err=>{
            console.log(err.message)
          })
      }
      else{
        setPayd(true)
      }
    }
  }

  useEffect(()=>{
    const idProduk = location.state.idDetail
    Axios.get(`http://127.0.0.1:8000/api/produk-by-id/${idProduk}`)
      .then(res=>{
        setProduk(res.data.data)
        setPetshop(res.data.data.petshop)
      })
      .catch(err=>{
      })
      Axios.get(`http://127.0.0.1:8000/api/transaksi/${user}`, config)
      .then(res=>{
        setSaveToAdd(res.data.data[0].id_petshop)})
      .catch(err=> setSaveToAdd('aman'))
  }, [])

  return (
    <div style={{paddingTop: '32px'}}>
      <Container>
        <div className="d-block d-md-flex mt-3">
          <section>
            {/* <Row style={{border: '2px solid black', borderRadius: '12px', padding: '8px', marginRight: '8px'}}> */}
            <Row>
              <Col md={4} >
                <center>
                  <img style={{width: 100+'%', borderRadius: '8px'}} src={produk.foto} alt="produk" />
                </center>
                <p className="mt-3 detail-petshop" onClick={detailPetshop}>
                  <img style={{width: 20+'px'}} src={require('../assets/shop.png').default} alt="petshop"/>
                  &nbsp;&nbsp;&nbsp;{petshop.nama_lengkap}
                </p>
                <p>
                  <img style={{width: 20+'px'}} src={require('../assets/pin.png').default} alt="petshop"/>
                  &nbsp;&nbsp;&nbsp;{petshop.alamat}
                </p>
                <p>
                  <img style={{width: 20+'px'}} src={require('../assets/call.png').default} alt="petshop"/>
                  &nbsp;&nbsp;&nbsp;{petshop.no_hp}
                </p>
              </Col>
              <Col md={8}>
                <p style={{textAlign: 'left', fontSize: 30+'px', color: '#7453AB', borderLeft: 5+'px solid #7453AB'}}>
                  &nbsp;{produk.nama} 
                  <span style={{float: 'right', color: '#F08C2F', fontSize: 24+'px', fontWeight: 'bold'}}>
                    Rp. {produk.harga_satuan_produk}
                  </span>
                </p>
                <br /><br />
                {/* <p style={{textAlign: 'justify'}}>
                  {produk.deskripsi}
                </p> */}
                <section style={{textAlign: 'justify'}}
                  dangerouslySetInnerHTML={{ __html: produk.deskripsi }}
                />
              </Col>
            </Row>
          </section>
          <div className="justify-content-center">
            <aside className="ml-3">
              <Card className="justify-content-center " style={{width: '214px', backgroundColor: '#F3EAFF', border: 'none', padding: '21px 24px'}}>
                {
                  produk.id_jns_produk != 3?
                  <p>Expire {produk.expire}</p>:''
                }
                <p>{produk.stok_produk} Pcs tersedia</p>
                {
                  produk.stok_produk == 0?
                  <Badge variant="danger">Produk habis</Badge>: 
                  <form action="#" onSubmit={handleSubmit}>
                    <Form.Control size="sm" min="1" max={produk.stok_produk}  type="number" onChange={hitungHarga} />
                    <p className="mt-2" style={{align: 'left', color:'#7453AB'}}>Total
                      <span style={{float: 'right', color: '#F07A26', fontWeight: 'bold'}}>
                      Rp. {price}
                      </span>
                    </p>
                    <Button  className="mt-3" type="submit"
                    style={{width: 100+'%', backgroundColor: '#7453AB', border: 'none', fontSize: 12+'px'}}>
                      Tambahkan ke keranjang</Button>
                  </form>
                }
              </Card>
            </aside>
          </div>
        </div>
        <Modal show={success} onHide={handleClose}>
          <Modal.Body align="center">
            <img src={require('../assets/checked.png').default} style={{width: '30%'}} alt="success"/>
            <br /><br />
            <p align="center">Produk berhasil ditambahkan ke my chart</p> 
          </Modal.Body>
        </Modal>
        <Modal show={failed} onHide={handleClose}>
          <Modal.Body align="center">
            {/* <img src={require('../assets/checked.png').default} style={{width: '30%'}} alt="success"/> */}
            {/* <br /><br /> */}
            <p align="center">Login sebagai customer untuk membeli produk</p> 
          </Modal.Body>
        </Modal>
        <Modal show={payd} onHide={handleClose}>
          <Modal.Body align="center">
            {/* <img src={require('../assets/checked.png').default} style={{width: '30%'}} alt="success"/> */}
            {/* <br /><br /> */}
            <p align="center">Selesaikan pembayaran sebelumnya
                <br /> agar dapat transaksi dipetshop berbeda
            </p> 
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  )
}

export default DetailProduk