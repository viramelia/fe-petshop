import React, {useState} from 'react'
import {Card, Form, Row, Col, Container, Button, Modal} from 'react-bootstrap' 
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import InlineEditor from '@ckeditor/ckeditor5-build-inline'
// import inlineEditor from '@ckeditor/ckeditor5-editor-inline'

import {useHistory, useLocation} from 'react-router-dom'
import Axios from 'axios'

function EditLayanan(){
  const location = useLocation()
  const history = useHistory()
  const dataLayanan = location.state.dataLayanan
  const [nama, setNama] = useState(dataLayanan.nama)
  const [foto, setFoto] = useState()
  const [hewan, setHewan] = useState(dataLayanan.jenis_hewan)
  const [kategori, setKategori] = useState(dataLayanan.kategori)
  const [deskripsi, setDeskripsi] = useState()
  const [harga, setHarga] = useState(dataLayanan.biaya_layanan)
  const [showFoto, setShowFoto] = useState(dataLayanan.gambar)
  const [success, setSuccess] = useState(false)
  // UNTUK EDITOR
  const [addData, setVal] = useState()
  const [addedData, showData ] = useState(0)

  const handleDesc = (e, editor) =>{
    const data = editor.getData()
    setVal(data)

  }


  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  const handleUpdate = e =>{
    e.preventDefault()
    const user = localStorage.getItem('user')
    const data = new FormData()

    data.append('nama', nama)
    data.append('kategori', kategori)
    data.append('jenis_hewan', hewan)
    data.append('biaya_layanan', harga)
    if(addData){
      data.append('deskripsi', addData)
    }
    if(foto){
      data.append('gambar', foto)
    }
    console.log(foto)
    Axios.post(`http://127.0.0.1:8000/api/update-layanan/${dataLayanan.id}`, data, config)
      .then(res=>{
        setSuccess(true)
        setTimeout(()=>{
          history.push('/petshop/profil')
        }, 2000)
      })
      .catch(err=>console.log(err))
  }

  

  return (
    <div>
      <Container>
      <p align="center" className="mt-3" style={{fontSize: '48px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Update Layanan</p> 
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
        <Card className="form-layanan">
          <Card.Body>
            <Form action="#" onSubmit={handleUpdate}>
              <Row>
                <Col md={5}>
                  {
                    showFoto ? 
                    <center>
                      <img src={showFoto} alt="layanan" className="mt-3" align="center" width="200"/>

                    </center>: ''
                  }
                  <br />
                  <Form.File 
                    id="custom-file"
                    label="Custom file input"
                    custom
                    accept="image/*"
                    onChange={e=>{
                      setFoto(e.target.files[0])
                      setShowFoto(URL.createObjectURL(e.target.files[0]))
                    }}
                  />
                </Col>
                <Col md={7}>
                  <Form.Group controlId="formBasicnamalayanan">
                    <Form.Label>Nama layanan</Form.Label>
                    <Form.Control type="name" placeholder="Nama Layanan" value={nama} 
                      onChange={e=>setNama(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formBasichewanlayanan">
                    <Form.Label>Jenis hewan</Form.Label>
                    <Form.Control type="hewan" placeholder="Nama Layanan" value={hewan}
                      onChange={e=>setHewan(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Jenis Layanan</Form.Label>
                    <Form.Control as="select" custom onChange={e=>setKategori(e.target.value)}>
                      <option selected>{dataLayanan.kategori}</option>
                      <option value="kesehatan">Kesehatan</option>
                      <option value="kebersihan">Kebersihan</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formBasicdeskripsi">
                    <Form.Label>Deskripsi</Form.Label>
                    <CKEditor
                      editor={ClassicEditor}
                      config={{
                        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
                        heading: {
                            options: [
                                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                            ]
                        }
                      }}
                      data={addData}
                      onChange={handleDesc}
                      
                    />
                    {/* <Form.Control type="text" placeholder="Deskripsi layanan" 
                      onChange={e=>setDeskripsi(e.target.value)}/> */}
                  </Form.Group>
                  <Row className="mb-3">
                  <Form.Group as={Col} controlId="formBasicharga">
                    <Form.Label>Biaya / Kg</Form.Label>
                    <Form.Control type="number" placeholder="Harga" value={harga}
                      onChange={e=>setHarga(e.target.value)}/>
                  </Form.Group>
                  </Row>
                </Col>
              </Row>
              <center>
                <Button variant="primary" type="submit" style={{backgroundColor: '#7435AB', border: 'none'}}>
                  Edit
                </Button>
              </center>
            </Form>
          </Card.Body>
        </Card>
        <Modal show={success}>
          <Modal.Body align="center">
            <img src={require('../../assets/checked.png').default} style={{width: '30%'}} alt="success"/>
            <br /><br />
            <p align="center">Layanan berhasil diupdate</p> 
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  )
}
export default EditLayanan
