import React, {useState, useEffect} from 'react'
import {Container, Accordion, Card, Badge, Form, Modal, Row, Col, Pagination, Button} from 'react-bootstrap'
import Axios from 'axios'

function TransaksiL() {
  const user = localStorage.getItem('user')
  const [transaksi, setTransaksi] = useState([])
  const [load, setLoad] = useState(true)
  const [aktif, setAktif] = useState(1)
  const [last, setLast] = useState([])
  const totalPage = []
  const [show, setShow] = useState(false);
  const [jadwal, setJadwal] = useState([])
  let [newKonsul, setNewKonsul] = useState([]) 
  const [success, setSuccess] = useState(false)
  const [booked, setBooked] = useState(false)
  const [jam, setJam] = useState()
  const [tgl, setTgl] = useState()
  const [keluhan, setKeluhan] = useState()
  const [customer, setCustomer] = useState()
  const [idLayanan, setIdLayanan] = useState()

  const handleClose = () => {
    setNewKonsul([])
    setShow(false)
  };

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/petshop-booking/${user}/selesai?page=${aktif}`, config)
      .then(res=>{ 
        setTransaksi(res.data.data.data)
        const length = res.data.data.last_page
        for(let i = 1;i <= length ; i++){
          totalPage.push(i)
        }
        setLast(totalPage)
      })
      .catch(err=>{})
    Axios.get(`http://127.0.0.1:8000/api/petshop/${user}`)
      .then(res=>{
        let buka = parseInt(res.data.data.jam_buka.split(":")[0])
        let tutup = 18
        let panjang = tutup - buka
        // console.log(panjang)
        // console.log(Array.from({length: panjang+1}, (_, i) =>[i, i + buka]))
        setJadwal(Array.from({length: panjang}, (_, i) => [i, i + buka]))
      })
      .catch(err=>{})
  }, [])

  const handleKonsultasi = (customer, hewan, layanan, idCustomer, idLayanan) =>{
    newKonsul.push(customer)
    newKonsul.push(hewan)
    newKonsul.push(layanan)
    setCustomer(idCustomer)
    setIdLayanan(idLayanan)
  }

  const handleKonsul = e =>{
    e.preventDefault()
    const data = new FormData()
    data.append('id_petshop', user)
    data.append('id_customer', customer)
    data.append('id_layanan', idLayanan)
    data.append('tgl_booking', tgl)
    data.append('jam_mulai', jam.split(",")[1])
    data.append('no_antrian', ++jam.split(",")[0])
    data.append('jenis_hewan', newKonsul[1])
    data.append('keluhan', keluhan)

    Axios.post(`http://127.0.0.1:8000/api/buat-konsultasi`, data, config)
      .then(res=>{
        setShow(false)
        setSuccess(true)
      })
      .catch(err=>setBooked(true))
  }

  return (
    <Container className="mt-3">
      <h1 className="text-center color-primary">Riwayat Layanan terbooking</h1>
      <hr className="hr-bottom"/>
      <Accordion defaultActiveKey="0">
        {
          transaksi.map((data, index)=>(
            <Card key={index}>
              <Accordion.Toggle as={Card.Header} eventKey={data.id}>
                {data.layanan.nama} | {data.customer.nama_lengkap} <Badge variant="primary" style={{float:'right'}}>{data.jenis_transaksi}</Badge>
                <p style={{color: '#848484', marginBottom: 0+'px'}}>{data.tgl_booking}</p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={data.id}>
                <Card.Body>
                  <table>
                    <tbody>
                      <tr>
                        <td>No. antrian</td>
                        <td>: {data.no_antrian}</td>
                      </tr>
                      <tr>
                        <td>Nama customer</td>
                        <td> : {data.customer.nama_lengkap}</td>
                      </tr>
                      <tr>
                        <td>Jenis layanan</td>
                        {
                          data.homecare == 'ya' ?
                          <td> : Homecare</td>:
                          <td> : Pelayanan langsung</td>
                        }
                      </tr>
                      <tr>
                        <td>Alamat</td>
                        <td> : {data.customer.alamat}</td>
                      </tr>
                      <tr>
                        <td>Tanggal pesan</td>
                        <td> : {data.created_at.split("T")[0]}</td>
                      </tr>
                      <tr>
                        <td>tanggal booking</td>
                        <td> : {data.tgl_booking}</td>
                      </tr>
                      <tr>
                        <td>Jam mulai</td>
                        <td> : {data.jam_mulai}</td>
                      </tr>
                      <tr>
                        <td>Jam selesai</td>
                        <td> : {data.jam_selesai}</td>
                      </tr>
                      <tr>
                        <td>Biaya</td>
                        <td> : {data.layanan.biaya_layanan}</td>
                      </tr>
                      <tr>
                        <td>Jenis Hewan</td>
                        <td> : {data.jenis_hewan}</td>
                      </tr>
                      <tr>
                        <td>Keluhan</td>
                        <td> : {data.keluhan}</td>
                      </tr>
                      <tr>
                        <td>Berat</td>
                        <td> : {data.berat_hewan} kg</td>
                      </tr>
                    </tbody>
                  </table>
                    <Row className="justify-content-center">
                      <Col md={8} className="mt-3">
                        <hr className="mt-3" style={{border: '3px solid #7345AB'}}/>
                        <p align="left">Total pembayaran 
                          <span style={{color: '#7345AB',fontWeight: 'bold', float: 'right'}}>
                            Rp. {data.biaya}</span>
                        </p>
                        {
                          data.customer.nama_lengkap != 'guest'?
                            <span align="left">Konsultasi
                              <form action="#" style={{float: 'right'}}>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                  <Form.Control as="select" onChange={e=>{
                                    if(e.target.value == 'ya'){
                                      handleKonsultasi(data.customer.nama_lengkap, data.jenis_hewan, data.layanan.nama, data.customer.id, data.id_layanan)
                                      setShow(true)
                                    }
                                  }}>
                                    <option selected>Berkelanjutan</option>
                                    <option value="ya">Ya</option>
                                    <option value="tidak">Tidak</option>
                                  </Form.Control>
                                </Form.Group>
                              </form>
                            </span>: ''

                        }
                      </Col>
                    </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))
        }
      </Accordion>
      {
        show?
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Jadwalkan konsultasi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table>
              <tr>
                <td>Nama customer </td>
                <td>: {newKonsul[0]}</td>
              </tr>
              <tr>
                <td>Jenis hewan </td>
                <td>: {newKonsul[1]}</td>
              </tr>
              <tr>
                <td>Layanan </td>
                <td>: {newKonsul[2]}</td>
              </tr>
            </table>   
            <form action="#" onSubmit={handleKonsul}>
              <p>Tanggal layanan</p>
              <Form.Control size="sm" type="date" onChange={e=>setTgl(e.target.value)}/>
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
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Keluhan</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={e=>setKeluhan(e.target.value)}/>
              </Form.Group>
              <Button style={{width: 100+'%', backgroundColor: '#7453AB', border: 'none', fontSize: 12+'px'}} type="submit">Submit</Button>
            </form>
          </Modal.Body>
        </Modal>
        :''
      }
      <Modal show={success} onHide={()=>setSuccess(false)}>
        <Modal.Body align="center">
          <img src={require('../../assets/checked.png').default} style={{width: '15%'}} alt="success"/>
          <br /><br />
          <p align="center">Berhasil booking layanan</p>
          {
            success?
            <div>
              <p align="center">no. antrian</p>
              <h3 align="center">{++jam.split(",")[0]}</h3> 
            </div>
            : ''
          }
          
        </Modal.Body>
      </Modal>
      <Modal show={booked} onHide={()=>setBooked(false)}>
        <Modal.Body align="center">
          <p align="center">Layanan dengan jadwal yang anda pilih telah dibooking</p> 
        </Modal.Body>
      </Modal>
      <center>
          <Pagination align="center" className="justify-content-center mt-3">
            {
              last.map((data, index)=>(
                <Pagination.Item key={index} onClick={()=>{
                  setAktif(data)
                  Axios.get(`http://127.0.0.1:8000/api/petshop-booking/${user}/selesai?page=${data}`, config)
                    .then(res=>{
                      setLoad(false)
                      setTransaksi(res.data.data.data)
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

export default TransaksiL