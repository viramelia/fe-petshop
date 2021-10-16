import React, {useState, useEffect} from 'react'
import {Row, Col, Container, Card, Button, Form, Modal} from 'react-bootstrap'
import {useHistory, useLocation} from 'react-router-dom'
import Axios from 'axios'

function DetailProduk() {
  const history = useHistory()
  const location = useLocation()
  const [layanan, setLayanan] = useState([])
  const [petshop, setPetshop] = useState([])
  const [hewan, setHewan] = useState()
  const [keluhan, setKeluhan] = useState()
  const [tgl, setTgl] = useState()
  const [jam, setJam] = useState()
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const [booked, setBooked] = useState(false)
  const role = localStorage.getItem('role')
  const [homecare, setHomecare] = useState() 
  const [jadwal, setJadwal] = useState([])

  const handleClose = () =>{
    setSuccess(false)
    setBooked(false)
    setFailed(false)
  }

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`,
      'Content-type' : 'multipart/form-data'
    }
  }

  const detailPetshop = () =>{

    if(role == 'customer'){
      history.push('/customer/detail-petshop', {idPetshop: petshop.id})
      console.log('sasf')
    }
    else if(role == 'petshop'){
      history.push('/petshop/detail-petshop', {idPetshop: petshop.id})
    }
    else{
      history.push('/detail-petshop', {idPetshop: petshop.id})
    }
  }

  useEffect(()=>{
    const id = location.state.idDetail
    Axios.get(`http://127.0.0.1:8000/api/layanan-by-id/${id}`)
      .then(res=>{
        setLayanan(res.data.data)
        setPetshop(res.data.data.petshop)
        let buka = parseInt(res.data.data.petshop.jam_buka.split(":")[0])
        let tutup = 18
        let panjang = tutup - buka
        // console.log(panjang)
        // console.log(Array.from({length: panjang+1}, (_, i) =>[i, i + buka]))
        setJadwal(Array.from({length: panjang}, (_, i) => [i, i + buka]))
      })
      .catch(err=>{})
  }, [])

  const handleSubmit = e =>{
    e.preventDefault()
    if(role != 'customer'){
      setFailed(true)
    }
    else{
      const data = new FormData()
      const user = localStorage.getItem('user')
  
      data.append('id_petshop', petshop.id)
      data.append('id_layanan', layanan.id)
      data.append('id_customer', parseInt(user))
      data.append('jenis_hewan', hewan)
      data.append('tgl_booking', tgl)
      data.append('jam_mulai', jam.split(",")[1])
      data.append('no_antrian', ++jam.split(",")[0])
      data.append('keluhan',keluhan)
      data.append('homecare', homecare)

      Axios.post(`http://127.0.0.1:8000/api/booking/${layanan.id}`,data, config)
        .then(res=>{
          console.log(res.data)
          setSuccess(true)
        })
        .catch(err=>{
          console.log(err.message)
          setBooked(true)
        })
    }
  }

  return (
    <div style={{paddingTop: '32px'}}>
      <Container>
        <div className="d-block d-md-flex mt-3">
          <section>
            <Row>
              <Col md={4}>
                <center>
                  <img style={{width: 100+'%', borderRadius: '8px'}} src={layanan.gambar} alt="produk" />
                </center>
                <p className="mt-3 detail-petshop" onClick={detailPetshop}>
                  <img style={{width: 20+'px'}} src={require('../assets/shop.png').default} alt="petshop"/>
                  &nbsp;&nbsp;&nbsp;{petshop.nama_lengkap}
                </p>
                <p>
                  <img style={{width: 20+'px'}} src={require('../assets/pin.png').default} alt="petshop"/>
                  &nbsp;&nbsp;&nbsp;{petshop.alamat}
                </p>
                <p>
                  <img style={{width: 20+'px'}} src={require('../assets/call.png').default} alt="petshop"/>
                  &nbsp;&nbsp;&nbsp;{petshop.no_hp}
                </p>
              </Col>
              <Col md={8}>
                <p style={{textAlign: 'left', fontSize: 30+'px', color: '#7435AB', borderLeft: 5+'px solid #7435AB'}}>
                  &nbsp;{layanan.nama} 
                  <span style={{float: 'right', color: '#F08C2F', fontSize: 24+'px',  fontWeight: 'bold'}}>
                    {`Rp. ${layanan.biaya_layanan}`}
                  </span>
                </p>
                <section style={{textAlign: 'justify'}}
                  dangerouslySetInnerHTML={{ __html: layanan.deskripsi }}
                />
              </Col>
            </Row>
          </section>
          <div className="justify-content-center">
            <aside className="ml-3">
              <Card className="justify-content-center " style={{width: '214px', backgroundColor: '#F3EAFF', border: 'none', padding: '21px 24px'}}>
                <form action="#" onSubmit={handleSubmit}>
                  <p>Jenis hewan</p>
                  <Form.Control size="sm" type="text" placeholder="kucing" 
                    onChange={e=>setHewan(e.target.value)}/>
                  <p className="mt-3">Keluhan</p>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} onChange={e=>setKeluhan(e.target.value)}/>
                  </Form.Group>
                  <p>Tanggal layanan</p>
                  <Form.Control size="sm" type="date" onChange={e=>setTgl(e.target.value)}/>
                  {/* <p>Jam layanan</p>
                  <Form.Control size="sm" type="time" onChange={e=>setJam(e.target.value)}/> */}
                  {/* <p>test</p> */}
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="mt-3">Jam layanan</Form.Label>
                    <Form.Control as="select" onChange={e=>setJam(e.target.value)}>
                      <option selected>pilih jam</option>
                      {
                        jadwal.map((data, index)=>(
                          data[1] == 12?
                          <option>Istirahat</option>:
                          <option value={data+':00:00'} key={index}>{data[1]+ ':00'}</option>
                        ))
                      }
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Jenis layanan</Form.Label>
                    <Form.Control as="select" onChange={e=>setHomecare(e.target.value)}>
                      <option selected>pilih jenis layanan  </option>
                      <option value="ya">Homecare</option>
                      <option value="tidak">Perawatan langsung</option>
                    </Form.Control>
                  </Form.Group>
                  {/* <p className="mt-2" style={{align: 'left'}}>Total
                    <span style={{float: 'right', color: '#7435AB', fontWeight: 'bold'}}>
                    Rp. 20.000
                    </span>
                  </p> */}
                  <Button  className="mt-3" type="submit"
                  style={{width: 100+'%', backgroundColor: '#7453AB', border: 'none', fontSize: 12+'px'}}>
                    Booking</Button>
                </form>
              </Card>
            </aside>
          </div>
        </div>
        <Modal show={success} onHide={handleClose}>
          <Modal.Body align="center">
            <img src={require('../assets/checked.png').default} style={{width: '15%'}} alt="success"/>
            <br /><br />
            <p align="center">Berhasil booking layanan</p>
            {
              success?
              <div>
                <p align="center">no. antrian anda</p>
                <h3 align="center">{++jam.split(",")[0]}</h3> 
              </div>
              : ''
            }
            
          </Modal.Body>
        </Modal>
        <Modal show={failed} onHide={handleClose}>
          <Modal.Body align="center">
            <p align="center">Login sebagai customer untuk booking layanan ini</p> 
          </Modal.Body>
        </Modal>
        <Modal show={booked} onHide={handleClose}>
          <Modal.Body align="center">
            <p align="center">Layanan dengan jadwal yang anda pilih telah dibooking</p> 
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  )
}

export default DetailProduk