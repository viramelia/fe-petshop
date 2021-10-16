import React, {useState, useEffect} from 'react'
import {Row, Col, Card, Button, Container, Image, Form, Pagination, Badge} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

// import foto from '../../assets/merek-whiskas.png'

function TransaksioffP(){
  const user = localStorage.getItem('user')
  const history = useHistory()
  const [aktif, setAktif] = useState(1)
  const [last, setLast] = useState([])
  const [produk, setProduk] = useState([])
  const [load, setLoad] = useState(true)
  const [allPesanan, setAllPesanan] = useState([])
  const pesanan = []
  let stok = []
  const totalPage = []
  const [price, setPrice] = useState(0)
 
  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/product-petshop/${user}?page=${aktif}`, config)
      .then(res=>{
        setProduk(res.data.data.data)
        stok.push(res.data.data.data.stok_produk)
        const length = res.data.data.last_page
        for(let i = 1;i <= length ; i++){
          totalPage.push(i)
        }
        setLast(totalPage)
      })
      .catch(err=>{})
  }, [])

  const handleCheckout = () =>{
    history.push('/petshop/offline-produk/checkout', {pesanan: allPesanan, harga: price})
  }

  return(
    <Container align="center">
      <p style={{fontSize: '32px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)', marginTop:'30px'}}>Transaksi Offline Produk</p> 
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card >
            <Card.Body>
              <Form className="d-flex justify-content-md-center">
                <Form.Control  type="text" placeholder="nama produk" 
                onChange={e=>{
                  if(e.target.value.length == 0){
                    Axios.get(`http://127.0.0.1:8000/api/product-petshop/${user}?page=1`, config)
                    .then(res=>{
                      setProduk(res.data.data.data)
                      stok.push(res.data.data.data.stok_produk)
                      const length = res.data.data.last_page
                      for(let i = 1;i <= length ; i++){
                        totalPage.push(i)
                      }
                      setLast(totalPage)
                    })
                    .catch(err=>{})
                  }
                  else{
                    Axios.get(`http://127.0.0.1:8000/api/produk-petshop/${user}/${e.target.value}`, config)
                      .then(res=>{
                        // setAllPesanan(pesanan)
                        setLoad(false)
                        setProduk(res.data.data)
                        setLoad(true)
                      })
                      .catch(err=>{})
                  }
                }}/>
                <Button className="ml-3"
                  style={{backgroundColor: '#7453AB', border: 'none', width: 80+'px', height: '38px'}}>
                    Cari</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <form>
        <Row className="justify-content-center">
          {
            // load ?
            produk.map((data, index)=>(
              <Col key={index}  md={3}>
              <p className="d-none">{stok = Array.from({length: data.stok_produk}, (_, i) => i + 1)}</p>
              <Card style={{ width: '15rem' }} className="mt-3">
                <Card.Img style={{padding: '20px', height: '250px'}} as={Image} variant="top" src={data.foto} />
                <Card.Body>
                <p  style={{color: '#7435AB', overflow: 'hidden', height: '28px', fontWeight:'bold', marginBottom: '0px'}}>{data.nama}
                  </p>
                <p align="right" style={{ color: '#F08C2F', fontWeight: 'bold', marginRight: 'auto'}}>Rp.{data.harga_satuan_produk}</p>
                  {
                    data.stok_produk == 0?
                    <Badge variant="danger" style={{width:"100%"}}>Produk habis</Badge>: 
                  <Form.Group  controlId="exampleForm.ControlSelect1">
                    {/* <Form.Label style={{color:'#7345AB'}}>Tersedia {data.stok_produk} Pcs</Form.Label> */}
                    <Form.Control as="select" onChange={e=>{
                      const jumlah = parseInt(e.target.value)
                      allPesanan.push([data.id, jumlah])
                      setPrice(price + jumlah * data.harga_satuan_produk)
                    }}>
                      <option selected>0</option>
                      {
                        stok.map((data, i)=>(
                          data !== 0 ? 
                          <option value={data}>{data}</option>: ''
                        ))
                      }
                    </Form.Control>
                    <Form.Label style={{color:'#7345AB'}}>Tersedia {data.stok_produk} Pcs</Form.Label>
                  </Form.Group>
                  }
                </Card.Body>
              </Card>
              </Col>
            ))
            //  : ''
          }
        </Row>
        <center>
          <Pagination align="center" className="justify-content-center mt-3">
            {
              last.map((data, index)=>(
                <Pagination.Item key={index} onClick={()=>{
                  setAktif(data)
                  Axios.get(`http://127.0.0.1:8000/api/product-petshop/${user}?page=${data}`)
                    .then(res=>{
                      setLoad(false)
                      setProduk(res.data.data.data)
                      setLoad(true)

                    })
                }} key={data} active={data === aktif}>
                  {data}
                </Pagination.Item>
              ))
            }
          </Pagination>
        </center>
        <center>
          <Button className="mt-3 mb-3" style={{backgroundColor: '#7345AB', border: 'none', }} variant="primary"
            onClick={handleCheckout}>
            Checkout</Button></center>
      </form>
    </Container>
  )
}

export default TransaksioffP