import React, {useState, useEffect} from 'react'
import {Card, Button, Modal} from 'react-bootstrap'
import Axios from 'axios'

function CardKonsul({idBooking}) {
  const [data, setData] = useState([])
  const [gambar, setGambar] = useState()
  const [layanan, setLayanan] =  useState([])
  const [petshop, setPetshop] = useState([])
  const [show, setShow] = useState(false)

  const config = {
    headers : {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/detail-konsultasi/${idBooking}`, config)
      .then(res=>{
        setGambar(res.data.data.layanan.gambar)
        setData(res.data.data)
        setLayanan(res.data.data.layanan)
        setPetshop(res.data.data.petshop)
      })
      .catch(err=>{})
  }, [])

  const handleClose = () =>{
    setShow(false)
  }

  const hapusBooking = () =>{
    Axios.delete(`http://127.0.0.1:8000/api/delete-booking/${idBooking}`, config)
      .then(res=>window.location.reload())
      .catch(err=>{})
  }

  return (
    <Card body>
      <div className="d-block d-md-flex">
        <img src={gambar} alt="layanan" 
          style={{width: 80+'px'}}/>
        <div className="d-block" align="left">
          <p style={{color: '#7345AB', fontSize: 30+'px', borderLeft: 4+'px solid #7345AB', marginLeft: 10+'px', marginBottom: 0+'px'}}>
            &nbsp;{layanan.nama}</p> 
          <p style={{marginBottom: 0+'px', marginLeft: '12px', color:'#A78EAD'}}>{petshop.nama_lengkap}</p>
        </div>
        <div  style={{marginLeft: 'auto',color: '#F08C2F', fontWeight: 'bold'}}>
          <p>Rp. {layanan.biaya_layanan} / Kg</p>
          <Button  className="mt-3" onClick={()=>setShow(true)}
            style={{backgroundColor: '#7453AB', border: 'none', }}>
              Detail</Button>
        </div>
        <div>
          <img width="20" className="hapus-pesanan" src={require('../assets/trash.png').default} alt="hapus" 
            onClick={hapusBooking}/> 
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <p style={{color: '#7345AB', fontSize: 36+'px', borderLeft: '4px solid #7345AB'}}>
            &nbsp;Detail booking layanan</p>
          <table>
            <tr>
              <td>No. antrian</td>
              <td>: {data.no_antrian}</td>
            </tr>
            <tr>
              <td>Jenis layanan</td>
              {
                data.homecare == 'ya' ?
                <td>: Homecare</td>:
                <td>: Perawatan langsung</td>
              }
            </tr>
            <tr>
              <td>Jenis hewan</td>
              <td>: {data.jenis_hewan}</td>
            </tr>
            <tr>
              <td>Keluhan</td>
              <td>: {data.keluhan}</td>
            </tr>
            <tr>
              <td>Nama petshop</td>
              <td>: {petshop.nama_lengkap}</td>
            </tr>
            <tr>
              <td>Jenis layanan</td>
              <td>: {layanan.kategori}</td>
            </tr>
            <tr>
              <td>Nama layanan</td>
              <td>: {layanan.nama}</td>
            </tr>
            <tr>
              <td>Tanggal booking</td>
              <td>: {data.tgl_booking}</td>
            </tr>
            <tr>
              <td>Jam booking</td>
              <td>:{data.jam_mulai}</td>
            </tr>
            <tr>
              <td>Biaya layanan /Kg</td>
              <td>: Rp. {layanan.biaya_layanan}</td>
            </tr>
          </table>
        </Modal.Body>
      </Modal>
    </Card>
  )
}

export default CardKonsul
