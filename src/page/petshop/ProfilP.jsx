import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button, Image, Pagination} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom'
import Axios from 'axios'

import CardEditProduk from '../../components/CardEditProduk'
import CardEditLayanan from '../../components/CardEditLayanan'
import CardLayanan from '../../components/CardLayanan'
import Produk from './Produk'

function BagianLayanan(){
  const history = useHistory()
  const [layanan, setLayanan] = useState([])
  const [aktif, setAktif] = useState(1)
  const [last, setLast] = useState([])
  const [load, setLoad] = useState(true)
  const totalPage = []
  const user = localStorage.getItem('user')

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/layanan-petshop/${user}?page=${aktif}`)
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
          load ?
          layanan.map((data, index)=>(
            <Col key={index} md={3} align="center" className="mt-3">
              <CardEditLayanan layananData={data}/>
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
                Axios.get(`http://127.0.0.1:8000/api/layanan-petshop/${user}?page=${data}`)
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
      <Button className="mt-3" style={{backgroundColor: '#7435AB', border: 'none'}}  onClick={()=> history.push('/petshop/upload-layanan')}>Tambah Layanan</Button>
      </center>
    </Container>
  )
}

function BagianProduk(){
  const history = useHistory()
  const [produk, setProduk] = useState([])
  const [aktif, setAktif] = useState(1)
  const [last, setLast] = useState([])
  const [load, setLoad] = useState(true)
  const totalPage = []
  const user = localStorage.getItem('user')

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/product-petshop/${user}?page=${aktif}`)
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

  // let items = [];
  // for (let number = 1; number <= last; number++) {
  //   items.push(
  //     <Pagination.Item key={number}  active={number === last}>
  //       {number}
  //     </Pagination.Item>,
  //   );
  // }

  return(
    <Container>
      <Row className="justify-content-md-center mt-3">
        {
          load ?
          produk.map((data, index)=>(
          <Col key={index} md={3} align="center" className="mt-3">
            <CardEditProduk produkData={data}/>
          </Col>
          )) : ''
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
      <Button className="mt-3" style={{backgroundColor: '#7435AB', border: 'none' }} 
      onClick={()=> history.push('/petshop/upload-produk')}>Tambah Produk</Button>
      </center>
    </Container>
  )
}

function ProfilP() {
  const history = useHistory()
  const [petshop, setPetshop] = useState([])
  const [days, setDays] = useState([])
  const [part, setPart] = useState(true)
  const user = localStorage.getItem('user')

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/user/${user}`, config)
    .then(res=>{
      setPetshop(res.data.data)
      setDays(res.data.data.hari)
    })
    .catch(err=>{})
  }, [])

  const updateBuka = () =>{
    const data = new FormData()
    data.append('terbuka', 'tidak')
    Axios.get(`http://127.0.0.1:8000/api/update-terbuka/${user}/tidak`, config)
      .then(res=>{})
      .catch(err=>{})
    Axios.get(`http://127.0.0.1:8000/api/user/${user}`, config)
      .then(res=>{
        setPetshop(res.data.data)
        setDays(res.data.data.hari)
      })
      .catch(err=>{})
  }
  const updateTutup = () =>{
    const data = new FormData()
    data.append('terbuka', 'ya')
    Axios.get(`http://127.0.0.1:8000/api/update-terbuka/${user}/ya`, config)
      .then(res=>{})
      .catch(err=>{})
    Axios.get(`http://127.0.0.1:8000/api/user/${user}`, config)
      .then(res=>{
        setPetshop(res.data.data)
        setDays(res.data.data.hari)
      })
      .catch(err=>{})
  }

  return (
    <div>
      <div style={{backgroundColor: '#7435AB', padding: '100px'}} ></div>
      <div align="center">
        <Image className="img-profil-update" src={petshop.foto} roundedCircle></Image>
        <p style={{fontSize:'30px', color: '#7435AB'}}>{petshop.nama_lengkap}</p> 
        <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
        {
          petshop.terbuka == 'ya' ?
          <Button variant="success" size="sm" onClick={updateBuka}>Terbuka</Button>:
          <Button variant="danger" size="sm" onClick={updateTutup}>Tertutup</Button>
        }
        <br />
        {
          days.map((data)=>(
            <span style={{color: '#848484', fontSize: 15+'px'}}>| {data.nama_hari} |</span>    
            ))
          }
       
        <p style={{color: '#848484', fontSize: 15+'px'}}>jam buka:  {petshop.jam_buka} | jam tutup: {petshop.jam_tutup}</p>    
        <p style={{color: '#848484', fontSize: 15+'px'}}>{petshop.alamat} | {petshop.no_hp } | {petshop.email}</p>
        <Button className="mt-3" style={{backgroundColor: '#7435AB', border: 'none'}} 
          onClick={()=> history.push('/petshop/edit-profil')}>Update profil</Button>
      <Container>
        <Button className={`${part? 'my-btn-primary':'my-btn-white'} mt-3 mr-3`} 
          onClick={()=>setPart(true)}
        >Produk</Button>
         
        <Button className={`${part? 'my-btn-white':'my-btn-primary'} mt-3 mr-3`}
          onClick={()=>setPart(false)}
        >Layanan</Button>
      
      </Container>
      </div>
        {
          part ?
          <BagianProduk />
          :
          <BagianLayanan/>
        }
    </div>
  )
}

export default ProfilP
