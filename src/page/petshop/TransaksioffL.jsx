import React, {useState, useEffect} from 'react'
import {Container, Card, Form, Modal, Button, Row, Col} from 'react-bootstrap'
import Axios from 'axios'
function TransaksioffL() {
  const [kategori, setKategori] = useState([])
  const [jenis, setJenis] = useState()
  const [listLayanan, setListLayanan] = useState([])
  const [layanan, setLayanan] = useState([])
  const [tgl, setTgl] = useState()
  const [jam, setJam] = useState()
  const [hewan, setHewan] = useState()
  const [berat, setBerat] = useState()
  const [success, setSuccess] = useState(false)
  const [booked, setBooked] = useState(false)
  const [biaya, setBiaya] = useState()
  const [keluhan, setKeluhan] = useState()
  const [jadwal, setJadwal] = useState([])
  const user = localStorage.getItem('user')

  const handleClose = () =>{
    setSuccess(false)
    setBooked(false)
  }

  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/kategori-layanan/${user}`, config)
      .then(res=>{
        setKategori(res.data.data)
      })
      .catch(err=>console.log(err))

    Axios.get(`http://127.0.0.1:8000/api/petshop/${localStorage.getItem("user")}`)
      .then(res=>{
        let buka = parseInt(res.data.data.jam_buka.split(":")[0])
        let tutup = 17
        let panjang = tutup - buka
        // console.log(Array.from({length: panjang+1}, (_, i) =>[i, i + buka]))
        setJadwal(Array.from({length: panjang+1}, (_, i) => [i, i + buka]))
      })
      .catch(err=>console.log(err))
  }, [])

  const handleKategori = e =>{
    Axios.get(`http://127.0.0.1:8000/api/layanan-by-katogori-petshop/${user}/${e.target.value}`, config)
      .then(res=>{
        setListLayanan(res.data.data)
      })
      .catch(err=>{})
  }

  const handleLayanan = e =>{
    Axios.get(`http://127.0.0.1:8000/api/layanan-by-id/${e.target.value}`)
      .then(res=>{
        console.log(e.target.value)
        setLayanan(res.data.data)})
      .catch(err=>console.log(err))
  }

  const handleBooking = e =>{
    e.preventDefault()
    const data = new FormData()
    data.append('id_layanan', layanan.id)
    data.append('tgl_booking', tgl)
    data.append('keluhan', keluhan)
    data.append('jam_mulai', jam.split(",")[1])
    data.append('no_antrian', ++jam.split(",")[0])
    data.append('jenis_hewan', hewan)
    data.append('berat_hewan', berat)
    data.append('biaya', biaya)
    // console.log(jam.split(",")[1])
    // console.log(++jam.split(",")[0])
    Axios.post(`http://127.0.0.1:8000/api/booking-offline/${user}`, data, config)
      .then(res=>{
        setSuccess(true)
        // setTimeout(()=>window.location.reload(), 3000)
      })
      .catch(err=>setBooked(true))
  }

  return (
    <Container align="center">
      <p style={{fontSize: '40px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)', margin:'20px'}}>Transaksi Offline Layanan</p> 
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      <Card>
        <Card.Body style={{ padding:'40px 80px'}}>
          <form action="#" onSubmit={handleBooking}>
            <Form.Group controlId="exampleForm.SelectCustom">
            <p style={{fontSize: '20px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Kategori Layanan</p>
              <Form.Control as="select" custom onChange={handleKategori}>
                <option selected>Pilih kategori</option>
                {
                  kategori.map((data, index)=>(
                    <option key={index} value={data.kategori}>{data.kategori}</option>
                  ))
                }
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
            <p style={{fontSize: '20px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Jenis Layanan</p>
              <Form.Control as="select" custom onChange={handleLayanan}>
              <option selected>Pilih layanan</option>
                {
                  listLayanan.map((data, index)=>(
                    <option key={index} value={data.id}>{data.nama}</option>
                  ))
                }
              </Form.Control>
            </Form.Group>
            <p className="mt-3">Keluhan</p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} onChange={e=>setKeluhan(e.target.value)}/>
            </Form.Group>
            <Row>
              <Col md={6}>
                <p style={{fontSize: '18px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Pilih Tanggal</p>
                <Form.Control required size="md" type="date" onChange={e=>setTgl(e.target.value)}/>
                <p className="mt-3" style={{fontSize: '18px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Pilih Jam</p>
                {/* <Form.Control required size="md" type="time" onChange={e=>setJam(e.target.value)}/> */}
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" onChange={e=>setJam(e.target.value)}>
                      <option selected>pilih jam</option>
                      {
                        jadwal.map((data, index)=>(
                          data[1] == 12 ? 
                          <option>Istirahat</option>:
                          <option value={data+':00:00'} key={index}>{data[1]+ ':00'}</option>
                        ))
                      }
                    </Form.Control>
                  </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <p style={{fontSize: '18px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Jenis hewan</p>
                  <Form.Control required type="text" placeholder="kucing" onChange={e=>setHewan(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <p style={{fontSize: '18px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Berat hewan / Kg</p>
                  <Form.Control required type="number" placeholder="4" onChange={e=>{
                    setBerat(e.target.value)
                    setBiaya(e.target.value * layanan.biaya_layanan)
                  }}/>
                </Form.Group>
              </Col>
            </Row>
            <hr className="mt-3" style={{border: '3px solid #7345AB'}}/>
            <p align="left">Total pembayaran 
            <span style={{float: 'right', color: '#7435AB' , fontWeight: 'bold'}}>
              Rp. {layanan.biaya_layanan} * {berat} =
              Rp. {berat ? biaya: ''}</span> </p>
            <Button variant="primary" className="text-center" type="submit"
              style={{backgroundColor: '#7345AB', border: 'none'}}>Checkout</Button>
          </form>
        </Card.Body>
      </Card>
      <Modal show={success} onHide={handleClose}>
        <Modal.Body align="center">
          <img src={require('../../assets/checked.png').default} style={{width: '15%'}} alt="success"/>
          <br /><br />
          <p align="center">Berhasil booking layanan</p> 
          {
            success ?
            <div>
              <p align="center">No. antrian</p> 
              <h3 align="center">{++jam.split(",")[0]}</h3>
            </div>
            : ''
          }
        </Modal.Body>
      </Modal>
      <Modal show={booked} onHide={handleClose}>
        <Modal.Body align="center">
          <p align="center">Layanan dengan jadwal yang anda pilih telah dibooking</p> 
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default TransaksioffL
