import React, {useState, useEffect} from 'react'
import {Container, Card, Button, Modal} from 'react-bootstrap'
import Axios from 'axios'

import CardKonsul from '../../components/CardKonsul'

function Konsultasi() {
  const [load, setLoad] = useState(true)
  const [show, setShow] = useState(false)
  const user = localStorage.getItem('user')
  const [aktif, setAktif] = useState(1)
  const [konsultasi, setKonsultasi] = useState([])
  const [last, setLast] = useState([])
  const totalPage = []

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/customer/konsultasi/${user}?page=${aktif}`, config)
      .then(res=>{
        setKonsultasi(res.data.data.data)
        const length = res.data.data.last_page
        for(let i = 1;i <= length ; i++){
          totalPage.push(i)
        }
        setLast(totalPage)
      })
      .catch(err=>console.log(err.message))
  }, [])

  const handleClose = () =>{
    setShow(false)
  }

  const hapusBooking = data =>{
    Axios.delete(`http://127.0.0.1:8000/api/delete-booking/${data}`, config)
      .then(res=>window.location.reload())
      .catch(err=>{})
  }

  return (
    <Container className="mt-3">
      <h1 className="text-center color-primary">Jadwal konsultasi</h1>
      <hr className="hr-bottom"/>
      {
        load ? 
        konsultasi.map((data, index)=>(
          <CardKonsul key={index} idBooking={data.id}/>
        ))
        : ''
      }

    </Container>
  )
}

export default Konsultasi
