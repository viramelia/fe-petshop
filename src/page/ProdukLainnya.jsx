import React, {useState, useEffect} from 'react'
import { Jumbotron, Container, Row, Col, Form, Button, Pagination } from 'react-bootstrap'
import Axios from 'axios'
import CardProduk from '../components/CardProduk'

function ProdukLainnya() {
  const [aktif, setAktif] = useState(1)
  const [last, setLast] = useState([])
  const [load, setLoad] = useState(true)
  const [produk, setProduk] = useState([])
  const totalPage = []

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/produk/12?page=${aktif}`)
    .then(res=>{
      // console.log(res.data.data.)
      setProduk(res.data.data.data)
      const length = res.data.data.last_page
      for(let i = 1;i <= length ; i++){
        totalPage.push(i)
      }
      setLast(totalPage)
    })
    .catch(err=>{

    })
  }, [aktif])

  // const setPage = data =>{
  //   console.log
  // }

  let items = [];
  for (let number = 1; number <= last; number++) {
    items.push(
      <Pagination.Item key={number}  active={number === last}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <Jumbotron style={{backgroundColor: `#7435AB`, height: '275px',}} fluid>
        <Container>
          <h2 className="text-white">Temukan Produk dari berbagai petshop</h2>
          <p className="text-white">Makanan | Minuman | Obat | Aksesoris</p>
        </Container>
      </Jumbotron>
      <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div align="center" style={{ padding: 18+'px', 
                        backgroundColor: 'white',
                        borderRadius: 12+'px', marginTop: -80+'px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <Form className="d-flex justify-content-md-center">
              {/* <Form.Group  style={{width: '236px', marginBottom: 0}} controlId="exampleForm.SelectCustom">
                <Form.Control as="select" custom>
                  <option>BNI</option>
                  <option>BRI</option>
                  <option>BCA</option>
                </Form.Control>
              </Form.Group> &nbsp;&nbsp; */}
              <Form.Control style={{width: '100%'}} type="text" placeholder="Cari produk" 
                onChange={e=>{
                  if(e.target.value.length == 0){
                    Axios.get(`http://127.0.0.1:8000/api/produk/12?page=${aktif}`)
                      .then(res=>{
                        // console.log(res.data.data.)
                        setProduk(res.data.data.data)
                        const length = res.data.data.last_page
                        for(let i = 1;i <= length ; i++){
                          totalPage.push(i)
                        }
                        setLast(totalPage)
                      })
                      .catch(err=>{})
                  }
                  else{
                    Axios.get(`http://127.0.0.1:8000/api/cari-produk/${e.target.value}`)
                      .then(res=>{
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
          </div>
        </Col>
      </Row>
      </Container>
      <h1 className="mt-3 text-center color-primary">Produk</h1>
      <hr className="hr-bottom"/>
      <Container>
        <Row className="justify-content-md-center">
          {
            load ? 
            produk.map((data, index)=>(
              <Col key={index} md={3} align="center" className="mt-3">
                <CardProduk idProduk={data.id}/>
              </Col>
            )) : ''
          }
        </Row>
        <Pagination align="center" className="justify-content-center mt-3">
          {
            last.map((data, index)=>(
              <Pagination.Item onClick={()=>{
                setAktif(data)
                Axios.get(`http://127.0.0.1:8000/api/produk/4?page=${data}`)
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
      </Container>
    </div>
  )
}

export default ProdukLainnya