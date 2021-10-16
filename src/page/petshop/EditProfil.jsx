import React, {useState, useEffect} from 'react'
import { Row, Col, Container, Form, Button, Image, Card, Modal } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

function EditPRofil() {
  const user = localStorage.getItem('user')
  const history = useHistory()
  const [success, setSuccess] = useState(false)
  const [foto, setFoto] = useState()
  const [newFoto, setNewFoto] = useState()
  const [showFoto, setShowFoto] = useState()
  const [nama, setNama] = useState()
  const [kecamatan, setKecamatan] = useState()
  const [alamat, setAlamat] = useState()
  const [hp, setHp] = useState()
  const [buka, setBuka] = useState()
  const [tutup, setTutup] = useState()
  const [bank, setBank] = useState()
  const [rek, setRek] = useState()
  const [latlon, setLatlon] = useState()
  // HARI
  const [senin, setSenin] = useState(false)
  const [selasa, setSelasa] = useState(false)
  const [rabu, setRabu] = useState(false)
  const [kamis, setKamis] = useState(false)
  const [jumat, setJumat] = useState(false)
  const [sabtu, setSabtu] = useState(false)
  const [minggu, setMinggu] = useState(false)

  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/user/${user}`, config)
    .then(res=>{
      setFoto(res.data.data.foto)
      setNama(res.data.data.nama_lengkap)
      setKecamatan(res.data.data.kecamatan)
      setAlamat(res.data.data.alamat)
      setHp(res.data.data.no_hp)
      setBuka(res.data.data.jam_buka)
      setTutup(res.data.data.jam_tutup)
      setBank(res.data.data.nama_bank)
      setRek(res.data.data.no_rek)
      setLatlon(res.data.data.latlon)
      Axios.get(`http://127.0.0.1:8000/api/foto-petshop/${res.data.data.foto}`, config)
      .then(res=>{
        setFoto(res.data.gambar)
      })
      .catch(err=>{})
    })
    .catch(err=>{})
  }, [])

  const handleHari = () =>{
    const listHari = []
    if(senin){
      listHari.push(1)
    }
    if(selasa){
      listHari.push(2)
    }
    if(rabu){
      listHari.push(3)
    }
    if(kamis){
      listHari.push(4)
    }
    if(jumat){
      listHari.push(5)
    }
    if(sabtu){
      listHari.push(6)
    }
    if(minggu){
      listHari.push(7)
    }
    Axios.delete(`http://127.0.0.1:8000/api/delete-hari/${user}`, config)
      .then(res=>{}).catch(err=>{})
    listHari.forEach( (item, index) =>{
      Axios.post(`http://127.0.0.1:8000/api/hari/${user}`, {
        id_hari : item
      }, config)
      .then(res=>{
      })
      .catch(err=>{
      })
    })
  }

  const handleUpdate = e =>{
    e.preventDefault()
    const data = new FormData()

    if(newFoto){
      data.append('nama_lengkap', nama)
      data.append('kecamatan', kecamatan)
      data.append('alamat', alamat)
      data.append('no_hp', hp)
      data.append('nama_bank', bank)
      data.append('no_rek', rek)
      data.append('jam_buka', buka)
      data.append('jam_tutup', tutup)
      data.append('foto', newFoto)
    }
    else{
      data.append('nama_lengkap', nama)
      data.append('kecamatan', kecamatan)
      data.append('alamat', alamat)
      data.append('no_hp', hp)
      data.append('nama_bank', bank)
      data.append('no_rek', rek)
      data.append('jam_buka', buka)
      data.append('jam_tutup', tutup)
      data.append('foto', foto.split('petshop/')[1])
    }

    Axios.post(`http://127.0.0.1:8000/api/user/${user}`, data, config)
      .then(res=>{
        if(senin || selasa || rabu || kamis || jumat || sabtu || minggu){
          handleHari()
        }
        setSuccess(true)
        setTimeout(()=>{
          history.push('/petshop/profil')
          window.location.reload()
        }, 3000)
      })
      .catch(err=>console.log('oops'))
  }

  return (
    <Container className="mt-3">
      <div align="center">
        <p style={{fontSize: '48px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Update profil</p> 
        <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      </div>
      <Card>
        <Card.Body>
          <Form as="form" action="#" onSubmit={handleUpdate}>
            <Row>
              <Col md={4}>
                <center>
                {
                  showFoto ? 
                  <Image className="img-profil-update mt-3" src={showFoto} roundedCircle></Image>
                  :
                  <Image className="img-profil-update mt-3" src={foto} roundedCircle></Image>
                }
                <Form.File 
                  className="mt-3"
                  id="custom-file"
                  label="Custom file input"
                  custom
                  accept="image/*"
                  onChange={e=>{
                    setNewFoto(e.target.files[0])
                    setShowFoto(URL.createObjectURL(e.target.files[0]))
                  }}
                />
                </center>
              </Col>
              <Col md={4}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="3">
                    Nama
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="text" value={nama} onChange={e=>setNama(e.target.value)}/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3"  controlId="formKecamatan">
                  <Form.Label column sm="4">
                    Kecamatan
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control placeholder="Kecamatan" as="select" size="md" onChange={e=>setKecamatan(e.target.value)}>
                      <option selected>{kecamatan}</option>
                      <option value="wajo">wajo</option>
                      <option value="ujung tanah">ujung tanah</option>
                      <option value="ujung pandang">ujung pandang</option>
                      <option value="tamalate">tamalate</option>
                      <option value="tamalanrea">tamalanrea</option>
                      <option value="tallo">tallo</option>
                      <option value="rappocini">rappocini</option>
                      <option value="panakkukang">panakkukang</option>
                      <option value="mariso">mariso</option>
                      <option value="manggala">manggala</option>
                      <option value="mamajang">mamajang</option>
                      <option value="makassar">makassar</option>
                      <option value="kepulauan sangkarrang">kepulauan sangkarrang</option>
                      <option value="bontoala">bontoala</option>
                      <option value="biringkanaya">biringkanaya</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="3">
                    Alamat
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="text" value={alamat} onChange={e=>setAlamat(e.target.value)}/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="3">
                    Lat & Lon 
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="text" value={latlon} onChange={e=>setLatlon(e.target.value)}/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="3">
                    No. HP
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="text" value={hp} onChange={e=>setHp(e.target.value)}/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="dob">
                  <Form.Label column md={3}>Buka Jam </Form.Label>
                  <Col md={9}>
                    <Form.Control type="time" value={buka} onChange={e=>setBuka(e.target.value)}/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="dob">
                  <Form.Label column md={3}>Tutup Jam </Form.Label>
                  <Col md={9}>
                    <Form.Control type="time" value={tutup} onChange={e=>setTutup(e.target.value)}/>
                  </Col>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="3">
                    Bank
                  </Form.Label>
                  <Col sm="9">
                  {/* <Form.Control as="select" value={bank}>
                    <option>1</option>
                  </Form.Control> */}
                  <Form.Group controlId="exampleForm.SelectCustom" 
                    onChange={e=>setBank(e.target.value)}>
                    <Form.Control as="select" custom>
                      <option selected>{bank}</option>
                      <option value="bni">BNI</option>
                      <option value="bri">BRI</option>
                      <option value="bca">BCA</option>
                      <option value="mandiri">MANDIRI</option>
                      <option value="sulselbar">BANK SULSELBAR</option>
                      <option value="btn">BTN</option>
                    </Form.Control>
                  </Form.Group>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="3">
                    No. Rek
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="text" value={rek} onChange={e=>setRek(e.target.value)}/>
                  </Col>
                </Form.Group>
                <Form.Label>Hari buka</Form.Label>
                      <Form>
                        {['checkbox'].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                              <Form.Check 
                                inline
                                defaultChecked={senin}
                                label="senin"
                                type={type}
                                value="1"
                                onChange={e=>setSenin(!senin)}
                              />
                              <Form.Check 
                                inline
                                defaultChecked={selasa}
                                label="selasa"
                                type={type}
                                value="2"
                                onChange={e=>setSelasa(!selasa)}
                              />
                              <Form.Check 
                                inline
                                defaultChecked={rabu}
                                label="rabu"
                                type={type}
                                value="3"
                                onChange={e=>setRabu(!rabu)}
                              />
                              <Form.Check 
                                inline
                                defaultChecked={kamis}
                                label="kamis"
                                type={type}
                                value="4"
                                onChange={e=>setKamis(!kamis)}
                              />
                              <Form.Check 
                                inline
                                defaultChecked={jumat}
                                label="jumat"
                                type={type}
                                value="5"
                                onChange={e=>setJumat(!jumat)}
                              />
                              <Form.Check 
                                inline
                                defaultChecked={sabtu}
                                label="sabtu"
                                type={type}
                                value="6"
                                onChange={e=>setSabtu(!sabtu)}
                              />
                              <Form.Check 
                                inline
                                defaultChecked={minggu}
                                label="minggu"
                                type={type}
                                value="7"
                                onChange={e=>setMinggu(!minggu)}
                              />
                          </div>
                        ))}
                      </Form>
              </Col>
            </Row>
            <div align="center" className="mt-3">
              <Button style={{backgroundColor: '#7435AB', border: 'none'}}
              type="submit">Simpan</Button>
              &nbsp;
              <Button style={{backgroundColor: 'white', border: '1px solid #7435AB', color: '#7345AB'}}
                onClick={()=>history.push('/petshop/profil')}
                >Batal</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <Modal show={success}>
        <Modal.Body align="center">
          <img src={require('../../assets/checked.png').default} style={{width: '30%'}} alt="success"/>
          <br /><br />
          <p align="center">Berhasil Update data profil</p> 
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default EditPRofil
