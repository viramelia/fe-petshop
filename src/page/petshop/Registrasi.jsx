import React, {useState, useEffect} from 'react'
import {Card, Form, Row, Col, Container, Button, Modal} from 'react-bootstrap' 
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

function Registrasi(){
  const history = useHistory()
  const [foto, setFoto] = useState()
  const [showFoto, setShowFoto] = useState()
  const [nama, setNama] = useState()
  const [email, setEmail] = useState()
  const [kecamatan, setKecamatan] = useState()
  const [alamat, setAlamat] = useState()
  const [latlon, setLatlon] = useState()
  const [hp, setHp] = useState()
  const [bank, setBank] = useState()
  const [rek, setRek] = useState()
  const [buka, setBuka] = useState()
  const [tutup, setTutup] = useState()
  const [senin, setSenin] = useState(false)
  const [selasa, setSelasa] = useState(false)
  const [rabu, setRabu] = useState(false)
  const [kamis, setKamis] = useState(false)
  const [jumat, setJumat] = useState(false)
  const [sabtu, setSabtu] = useState(false)
  const [minggu, setMinggu] = useState(false)

  const [success, setSuccess] = useState(false)

  const handleHari = idPetshop =>{
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
    listHari.forEach((item, index)=>{
      Axios.post(`http://127.0.0.1:8000/api/hari/${idPetshop}`, {
        id_hari : item
      })
      .then(res=>{console.log(res.data)
      })
      .catch(err=>{console.log(err)
      })
    })
  }

  const handleSubmit = e =>{
    e.preventDefault()

    const data = new FormData()
    data.append('nama_lengkap', nama)
    data.append('email', email)
    data.append('kecamatan', kecamatan)
    data.append('alamat', alamat)
    data.append('latlon', latlon)
    data.append('no_hp', hp)
    data.append('nama_bank', bank)
    data.append('no_rek', rek)
    data.append('jam_buka', buka)
    data.append('jam_tutup', tutup)
    data.append('foto', foto)

    Axios.post(`http://127.0.0.1:8000/api/signup-petshop`, data)
    .then(res=>{
      const idPetshop = res.data.data
      console.log(idPetshop)
      handleHari(idPetshop)
      setSuccess(true)
      setTimeout(()=>{
        history.push('/')
      }, 5000)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return(
    <div>
      <Container>
      <p align="center" className="mt-4" style={{fontSize: '40px', color: '#46397e'}}>Registrasi Petshop</p>
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
        <Card className="form-login">
          <Card.Body>
            <Form action="#" onSubmit={handleSubmit}>
              <Row>
                <Col md={3}>
                  <center>
                    {
                      foto ? 
                      <div>
                        <img className="mt-3" align="center" width="200" id="fotoC" 
                          src={showFoto} alt="foto"/> 
                        <p>{foto.name}</p>
                      </div>
                      : ''
                    }
                  </center>
                  <Form.File 
                  id="imgI"
                  label="Custom file input"
                  custom
                  accept="image/*"
                  onChange={e=>{
                    setFoto(e.target.files[0])
                    setShowFoto(URL.createObjectURL(e.target.files[0]))
                  }}
                />
                </Col>
                <Col>
                  <Form.Group controlId="formBasicnamapetshop">
                    <Form.Control type="name" placeholder="Nama Petshop" 
                      onChange={e=>setNama(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Masukkan email aktif anda" 
                      onChange={e=>setEmail(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formKecamatan">
                    <Form.Control placeholder="Kecamatan" as="select" size="md" onChange={e=>setKecamatan(e.target.value)}>
                      <option selected>Pilih kecamatan</option>
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
                  </Form.Group>
                  <Form.Group controlId="formBasicalamat">
                    <Form.Control type="name" placeholder="Alamat Petshop" 
                      onChange={e=>setAlamat(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formBasicalamat">
                    <Form.Control type="name" placeholder="Latitude & longitude" 
                      onChange={e=>setLatlon(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formBasicnomorhp">
                    <Form.Control type="number" placeholder="Nomor Hp" 
                      onChange={e=>setHp(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom" 
                    onChange={e=>setBank(e.target.value)}>
                    <Form.Control as="select" custom>
                      <option value="bni">BNI</option>
                      <option value="bri">BRI</option>
                      <option value="bca">BCA</option>
                      <option value="mandiri">MANDIRI</option>
                      <option value="sulselbar">BANK SULSELBAR</option>
                      <option value="btn">BTN</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formBasicnomorrekening">
                    <Form.Control type="number" placeholder="Nomor Rekening" 
                      onChange={e=>setRek(e.target.value)}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="dob">
                    <Form.Label>Buka Jam </Form.Label>
                    <Form.Control type="time" onChange={e=>setBuka(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="dob">
                    <Form.Label>Tutup Jam </Form.Label>
                    <Form.Control type="time" onChange={e=>setTutup(e.target.value)} />
                  </Form.Group>
                  <Form.Label>Hari buka</Form.Label>
                  <Form>
                    {['checkbox'].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        {/* {
                          days.map((day, index)=>(
                            ))
                          } */}
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
              <center>
                <Button style={{backgroundColor: '#7435AB', border: 'none'}}  variant="primary" type="submit">
                  Registrasi
                </Button>
              </center>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <Modal show={success} >
        <Modal.Body align="center">
          <img src={require('../../assets/checked.png').default} style={{width: '30%'}} alt="success"/>
          <br /><br />
          <p align="center">Silahkan menunggu email konfirmasi dari admin untuk dapat login</p> 
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default Registrasi