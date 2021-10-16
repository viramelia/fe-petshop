import React, {useState} from 'react'
import {Card, Form, Row, Col, Container, Button, Alert, Modal} from 'react-bootstrap' 
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

function Registrasic(){
  const history = useHistory()
  const [foto, setFoto] = useState()
  const [showFoto, setShowFoto] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [nama, setNama] = useState()
  const [gender, setGender] = useState()
  const [lahir, setLahir] = useState()
  const [alamat, setAlamat] = useState()
  const [hp, setHp] = useState()

  const [success, setSuccess] = useState(true)
  const [failedRegis, setFailedRegis] = useState(false)

  const handleRegis = e =>{
    e.preventDefault()
    if(password == confirmPassword){

      if(password.length >= 6){
        const data = new FormData()
        data.append('nama_lengkap', nama)
        data.append('email', email)
        data.append('password', password)
        data.append('tgl_lahir', lahir)
        data.append('jenis_kelamin', gender)
        data.append('alamat', alamat)
        data.append('no_hp', hp)
        data.append('foto', foto)
        Axios.post(`http://127.0.0.1:8000/api/signup-customer`, data)
        .then(res=>{
          console.log(res.data)
          setSuccess(true)
          setTimeout(()=>{
            history.push('/login')
          }, 5000)
        })
        .catch(err=>{
          setFailedRegis(true)
        })
      }
    }
  }

  return (
    <div>
      <Container>
        <p className="mt-3" align="center" style={{fontSize: '40px', color: '#46397e'}}>Registrasi customer</p> 
        <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
        <Card className="form-registrasic" style={{padding:'20px 100px'}}>
          <Card.Body>
            <Form action="#" onSubmit={handleRegis}>
              <Row>
                <Col md={5}>
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
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" 
                      onChange={e=>setEmail(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formBasicpassword">
                    <Form.Control type="password" placeholder="password min. 6 char" 
                      onChange={e=>setPassword(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formBasicpassword">
                    <Form.Control type="password" placeholder="Confirmasi password"
                      onChange={e=>setConfirmPassword(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formBasicnamapetshop">
                    <Form.Control type="name" placeholder="Nama Anda" 
                     onChange={e=>setNama(e.target.value)}/>
                  </Form.Group>
                  <Form>
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3" onChange={e=>setGender(e.target.value)}>
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
                    </Form>
                  <Form.Group controlId="formBasicalamat">
                    <Form.Control type="date" placeholder="Tanggal lahir" 
                      onChange={e=>setLahir(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formBasicalamat">
                    <Form.Control type="name" placeholder="Alamat Rumah" 
                      onChange={e=>setAlamat(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formBasicnomorhp">
                    <Form.Control type="number" placeholder="Nomor Hp"
                      onChange={e=>setHp(e.target.value)}/>
                  </Form.Group>
                </Col>
              </Row>
              <center>
                {
                  failedRegis? 
                  <Alert variant="danger">
                    This is a  alert—check it out!
                  </Alert>
                  :''
                }
                <Button variant="primary" type="submit" style={{backgroundColor: '#7435AB', border: 'none'}}>
                  Registrasi
                </Button>
              </center>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <Modal show={success}>
        <Modal.Body align="center">
          <img src={require('../../assets/checked.png').default} style={{width: '30%'}} alt="success"/>
          <br /><br />
          <p align="center">Anda sudah dapat melakukan transaksi dengan akun ini</p> 
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default Registrasic

  



