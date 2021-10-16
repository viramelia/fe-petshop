import React, {useState, useEffect} from 'react'
import {Jumbotron, Container, Form, Button,Row, Col, Pagination} from 'react-bootstrap'
import Axios from 'axios'
import CardLayanan from '../components/CardLayanan'

function LayananLainnya() {
  const [aktif, setAktif] = useState(1)
  const [load, setLoad] = useState(true)
  const [layanan, setLayanan] = useState([])
  const [last, setLast] = useState([])
  const totalPage = []

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/layanan/12?page=${aktif}`)
      .then(res=>{
        setLayanan(res.data.data.data)
        const length = res.data.data.last_page
        for(let i = 1;i <= length ; i++){
          totalPage.push(i)
        }
        setLast(totalPage)
      })
      .catch(err=>{

      })
  }, [])

  return (
    <div>
      <Jumbotron style={{backgroundColor: `#7435AB`, height: '275px',}} fluid>
        <Container>
          <h2 className="text-white">Temukan layanan dari berbagai petshop</h2>
          <p className="text-white">Kesehatan | Kebersihan | Perawatan</p>
        </Container>
      </Jumbotron>
      <div align="center">
        <div align="center" style={{width: '800px', padding: 18+'px', 
                      backgroundColor: 'white',
                      borderRadius: 12+'px', marginTop: -80+'px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
          <Form className="d-flex justify-content-md-center">
            
            <Form.Control style={{width: '100%'}} type="text" placeholder="nama layanan" 
              onChange={e=>{
               if(e.target.value.length == 0){
                Axios.get(`http://127.0.0.1:8000/api/layanan/12?page=${aktif}`)
                      .then(res=>{
                      setLoad(false)
                      setLayanan(res.data.data.data)
                        const length = res.data.data.last_page
                        for(let i = 1;i <= length ; i++){
                          totalPage.push(i)
                        }
                        setLast(totalPage)
                setLoad(true)
                      })
                      .catch(err=>{

                      })
                }
                else{ 
                  Axios.get(`http://127.0.0.1:8000/api/cari-layanan/${e.target.value}`)
                  .then(res=>{
                    setLoad(false)
                    setLayanan(res.data.data)
                    setLoad(true)
                })}
            }}/>
            <Button className="ml-3"
              style={{backgroundColor: '#7453AB', border: 'none', width: 80+'px', height: '38px'}}>
                Cari</Button>
          </Form>
        </div>
      </div>
      <p style={{fontSize: '48px', color: '#46397e'}} align="center">Layanan</p> 
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      <Container>
        <Row className="justify-content-md-center">
          {
            load ?
            layanan.map((data, index)=>(
              <Col key={index} md={3} className="mt-3" align="center">
                <CardLayanan idLayanan={data.id}/>
              </Col>
            )): ''
          }
        </Row>
        <Pagination align="center" className="justify-content-center mt-3">
          {
            last.map((data, index)=>(
              <Pagination.Item onClick={()=>{
                setAktif(data)
                Axios.get(`http://127.0.0.1:8000/api/layanan/4?page=${data}`)
                  .then(res=>{
                    setLoad(false)
                    setLayanan(res.data.data.data)
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

export default LayananLainnya
