import React, {useState, useEffect} from 'react'
import {Card, Modal, Button} from 'react-bootstrap'
import Axios from 'axios'

function CardBookinglayanan({idLayanan, parentCallback}) {
  const [data, setData] = useState([])
  const [petshop, setPetshop] = useState([])
  const [layanan, setLayanan] = useState([])
  const [customer, setCustomer] = useState([])
  const [tglPesan, setTglPesan] = useState()
  const [foto, setFoto] = useState()
  const [booking, setBooking] = useState()
  const [show, setShow] = useState(false)

  const config = {
    headers : {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  const handleClose = () =>{
    setShow(false)
  }

  const hapusBooking = () =>{
    Axios.delete(`http://127.0.0.1:8000/api/delete-booking/${data.id}`, config)
      .then(res=>{
        parentCallback(false)
      })
      .catch(err=>{})
  }

  useEffect(()=>{
    const user = localStorage.getItem('user')
    Axios.get(`http://127.0.0.1:8000/api/booking/${idLayanan}`, config)
      .then(res=>{
        setData(res.data.data)
        setTglPesan(res.data.data.created_at.split('T')[0])
        setPetshop(res.data.data.petshop)
        setCustomer(res.data.data.customer)
        setLayanan(res.data.data.layanan)
        // console.log(res.data.data.layanan.gambar)
        Axios.get(`http://127.0.0.1:8000/api/foto-layanan/${res.data.data.layanan.gambar}`)
          .then(res=>{
            setFoto(res.data.gambar)
          })
          .catch(err=>{})
      })
      .catch(err=>{})
  }, [])

  return (
    <div>
      <Card body>
        <div className="d-block d-md-flex">
          <img src={foto} alt="layanan" 
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
      </Card>
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
              <td>Nama customer</td>
              <td>: {customer.nama_lengkap}</td>
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
              <td>Tanggal pesan</td>
              {/* .split('T')[0] */}
              <td>: {tglPesan}</td>
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
    </div>
  )
}

export default CardBookinglayanan