import React, {useState, useEffect} from 'react'
import {Card, Modal, Row, Col, Form, InputGroup, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

function CardLayanan({idLayanan}) {
  const history = useHistory()
  const [layanan, setLayanan] = useState([])
  const [petshop, setPetshop] = useState([])
  const [foto, setFoto] = useState()
  const [jam, setJam] = useState(11)
  const [waktu, setWaktu] = useState([9, 10, 11, 12])

  const toDetail =() =>{
    const role = localStorage.getItem('role')
    
    if(role == 'customer'){
      history.push('/customer/detail-layanan', {idDetail: idLayanan})
    }
    else if(role == 'petshop'){
      history.push('/petshop/detail-layanan', {idDetail: idLayanan})
    }
    else{
      history.push('/detail-layanan', {idDetail: idLayanan})
    }

  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/layanan-by-id/${idLayanan}`)
    .then(res=>{
      setLayanan(res.data.data)
      setPetshop(res.data.data.petshop)
    })
    .catch(err=>{

    })
  }, [])

  return (
    <div>
      <Card style={{ width: '214px', borderBlockColor:'#E5E5E5'}}>
        <Card.Img variant="top" style={{height: '200px', padding:'10px'}} src={layanan.gambar} />
        <Card.Body>
          <p  style={{color: '#7435AB', overflow: 'hidden', height: '48px', fontWeight:'bold', marginBottom: '0px'}}>{layanan.nama}
            </p>
          <p align="right" style={{ color: '#F08C2F', fontWeight: 'bold', marginRight: 'auto', marginBottom: '0px'}}>Rp.{layanan.biaya_layanan}</p>
          <p style={{color: '#A78EAD'}} align="left">
            {petshop.nama_lengkap}
          </p>
          <Button className="width-full" style={{backgroundColor: '#7435AB', border: 'none'}} onClick={toDetail}>Booking</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardLayanan
