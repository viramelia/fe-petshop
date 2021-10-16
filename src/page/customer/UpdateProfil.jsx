import React, {useState, useEffect} from 'react'
import {Row, Col, Image, Card, Form, Button, Container, Modal} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

function UpdateProfil() {
  const history = useHistory()
  const [success, setSuccess] = useState(false)
  const [showFoto, setShowFoto] = useState()
  const [newFoto, setNewFoto] = useState()
  const [foto, setFoto] = useState()
  const [nama, setNama] = useState()
  const [email, setEmail] = useState()
  const [lahir, setLahir] = useState()
  const [gender, setGender] = useState()
  const [alamat, setAlamat] = useState()
  const [hp, setHp] = useState()
  
  const user = localStorage.getItem('user')
  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/user/${user}`, config)
      .then(res=>{
        // Axios.get(`http://127.0.0.1:8000/api/foto-customer/${res.data.data.foto}`, config)
        // .then(res=>{
        //   setFoto(res.data.gambar)
        // })
        // .catch(err=>{})
        setFoto(res.data.data.foto)
        setNama(res.data.data.nama_lengkap)
        setEmail(res.data.data.email)
        setLahir(res.data.data.tgl_lahir)
        setGender(res.data.data.gender)
        setAlamat(res.data.data.alamat)
        setHp(res.data.data.no_hp)
      })
      .catch(err=>{})
  }, [])

  const handleUpdate = e =>{
    e.preventDefault()
    const data = new FormData()
    if(newFoto){
      data.append('nama_lengkap', nama)
      data.append('email', email)
      data.append('tgl_lahir', lahir)
      data.append('gender', gender)
      data.append('alamat', alamat)
      data.append('no_hp', hp)
      data.append('foto', newFoto)
    }
    else{
      data.append('nama_lengkap', nama)
      data.append('email', email)
      data.append('tgl_lahir', lahir)
      data.append('gender', gender)
      data.append('alamat', alamat)
      data.append('no_hp', hp)
      data.append('foto', foto.split('customer/')[1])
    }
    console.log(gender)
    Axios.post(`http://127.0.0.1:8000/api/user/${user}`, data, config)
      .then(res=>{
        setSuccess(true)
        setTimeout(()=>{
          history.push('/customer/profil-customer')
          window.location.reload()
        }, 1000)
      })
      .catch(err=>console.log('oops'))
  }

  return (
    <Container>
      <div align="center">
        <p style={{fontSize: '48px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Update profil</p> 
        <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      </div>
      <Card>
        <Card.Body>
          <Form actioon="#" onSubmit={handleUpdate}>
        <Row>
        <Col>
        <center>
          {
            showFoto ? 
            <Image className="img-profil-update mt-3" src={showFoto} roundedCircle></Image>
            :
            <Image className="img-profil-update mt-3" src={foto} roundedCircle></Image>
          }
          <Form.Group controlId="formFile" className="mt-3">
            <Form.Label>Update Foto profil</Form.Label>
            <Form.Control type="file" onChange={e=>{
              setNewFoto(e.target.files[0])
              setShowFoto(URL.createObjectURL(e.target.files[0]))
            }} />
          </Form.Group>
          </center>
        </Col>
        <Col>
          <Form.Group>
            <p>Nama</p>
            <Form.Control type="text" placeholder="Nama" value={nama}
              onChange={e=>setNama(e.target.value)}/>
          </Form.Group>
            <p>Email</p>
          < Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="email" value={email}
            onChange={e=>setEmail(e.target.value)}/>
          </Form.Group>
          <p>Tanggal lahir</p>
          <Form.Group controlId="formBasicalamat">
            <Form.Control type="date" placeholder="Tanggal lahir" value={lahir}
              onChange={e=>setLahir(e.target.value)}/>
          </Form.Group>
            {/* <p>Password</p> */}
            {/* <Form.Group controlId="formBasicpassword">
              <Form.Control type={char} placeholder="melodyjkt48" />
            </Form.Group>
            <Form.Text onClick={()=>{
              setShowPass(!showPass)
              showPass ? setChar('password'):setChar('text')
            }} style={{color: '#7435AB', cursor: 'pointer'}}>
              {showPass ? 'sembunyikan password' : 'lihat password'}
            </Form.Text> */}
        </Col>
        <Col>
          <p>Jenis Kelamin</p>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3" value={gender} onChange={e=>setGender(e.target.value)}>
                <Form.Check
                  inline
                  value="laki-laki"
                  label="Laki - Laki"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  value="perempuan"
                  label="Perempuan"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
        <Form.Group controlId="formBasicalamat">
          <p>Alamat</p>
          <Form.Control type="name" placeholder="alamat" value={alamat} onChange={e=>setAlamat(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicnomorhp">
          <p>No Handphone</p>
          <Form.Control type="number" placeholder="Nomor Hp" value={hp} onChange={e=>setHp(e.target.value)}/>
        </Form.Group>
        </Col>
        </Row>
        <div align="center" className="mt-3">
          <Button style={{backgroundColor: '#7435AB', border: 'none'}}
          type="submit">Simpan</Button>
          &nbsp;
          <Button style={{backgroundColor: 'white', border: '1px solid #7435AB', color: '#7345AB'}}
            // onClick={history.push('/customer/profil-customer')}
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

export default UpdateProfil