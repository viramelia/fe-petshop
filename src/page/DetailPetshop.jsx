import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button, Image, Pagination, Badge} from 'react-bootstrap'
import {Switch, Route, Link, useLocation,
          useHistory, useRouteMatch} from 'react-router-dom'
import Axios from 'axios'

import CardProduk from '../components/CardProduk'
import CardLayanan from '../components/CardLayanan'

function BagianLayanan({petshopData}){
  const location = useLocation()
  const [layanan, setLayanan] =useState([])
  const [aktif, setAktif] = useState(1)
  const [last, setLast] = useState([])
  const [load, setLoad] = useState(true)
  const totalPage = []

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/layanan-petshop/${petshopData}?page=${aktif}`)
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
  return(
    <Container >
      <Row className="justify-content-md-center mt-3">
        {
          load ? layanan.map((data, index)=>(
            <Col className="mt-3" md={3} key={index} align="center">
              <CardLayanan idLayanan={data.id}/>
            </Col>
          )): ''
        }
      </Row>
      <center>
        <Pagination align="center" className="justify-content-center mt-3">
          {
            last.map((data, index)=>(
              <Pagination.Item key={index} onClick={()=>{
                setAktif(data)
                Axios.get(`http://127.0.0.1:8000/api/layanan-petshop/${petshopData}?page=${data}`)
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
      </center>
    </Container>
  )
}

function BagianProduk({petshopData}){
  const [produk, setProduk] = useState([])
  const [aktif, setAktif] = useState(1)
  const [last, setLast] = useState([])
  const [load, setLoad] = useState(true)
  const totalPage = []

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/product-petshop/${petshopData}?page=${aktif}`)
      .then(res=>{
        setProduk(res.data.data.data)
        const length = res.data.data.last_page
        for(let i = 1;i <= length ; i++){
          totalPage.push(i)
        }
        setLast(totalPage)
      })
      .catch(err=>{
      })
  }, [])

  return(
    <Container>
      <Row className="justify-content-md-center mt-3">
        {
          load ?   
          produk.map((data, index)=>(
            <Col className="mt-3" md={3} key={index} align="center">
              <CardProduk idProduk={data.id}/>
            </Col>            
          ))
          :''
        }
      </Row>
      <center>
        <Pagination align="center" className="justify-content-center mt-3">
          {
            last.map((data, index)=>(
              <Pagination.Item key={index} onClick={()=>{
                setAktif(data)
                Axios.get(`http://127.0.0.1:8000/api/product-petshop/${petshopData}?page=${data}`)
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
    </Container>
  )
}


function DetailPetshop() {
  const history = useHistory()
  const location = useLocation()
  const {url, path} = useRouteMatch()
  const [foto, setFoto] = useState()
  const [petshop, setPetshop] = useState([])
  const [days, setDays] = useState([])
  const [part, setPart] = useState(true)
  const data = location.state.idPetshop

  const allProduk = () =>{
    setPart(true)
  }
  
  const allServices = () =>{
    setPart(false)
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/petshop/${data}`)
    .then(res=>{
      console.log(res.data.data)
      setPetshop(res.data.data)
      setFoto(res.data.data.foto)
      setDays(res.data.data.hari)
    })
    .catch(err=>{

    })

  }, [])

  return (
    <div>
      <div style={{backgroundColor: '#7435AB', padding: '100px'}} ></div>
      <div align="center">
        <Image className="img-profil-update" src={foto} roundedCircle></Image>
        <p style={{fontSize: '30px', color: '#7435AB'}}>{petshop.nama_lengkap}</p> 
        <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
        {
          petshop.terbuka == 'ya'?
          <Badge variant="success">Terbuka</Badge>:
          <Badge variant="danger">Tertutup</Badge>
        }
        <br />
        {
          days.map((data, index)=>(
            <span style={{color: '#848484', fontSize: 15+'px'}}> {data.nama_hari} </span>
          ))
        }
        <p style={{color: '#848484', fontSize: 15+'px'}}>
          jam buka: {petshop.jam_buka} |
          jam tutup: {petshop.jam_tutup}
        </p>
        <p style={{color: '#848484', fontSize: 15+'px'}}>
          {petshop.alamat} | {petshop.no_hp} | {petshop.email}</p>
          
      <Container>
      <Button onClick={allProduk}  className={`${part? 'my-btn-primary':'my-btn-white'} mt-3 mr-3`} >Produk</Button>
      
      <Button onClick={allServices} className={`${part? 'my-btn-white':'my-btn-primary'} mt-3 mr-3`}>Layanan</Button>
      </Container>
      </div>
      {
        part ?
        <BagianProduk petshopData={data}/>:
        <BagianLayanan petshopData={data}/>
      }
    </div>
  )
}

export default DetailPetshop
