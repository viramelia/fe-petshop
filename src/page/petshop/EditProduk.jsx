import React, {useState, useEffect} from 'react'
import {Card, Form, Row, Col, Container, Button, Modal} from 'react-bootstrap' 
import {CKEditor} from '@ckeditor/ckeditor5-react' 
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {useHistory, useLocation} from 'react-router-dom'
import Axios from 'axios'

function EditProduk(){
  const history = useHistory()
  const location = useLocation()
  const [nama, setNama] = useState()
  const [jenis, setJenis] = useState()
  const [foto, setFoto] = useState()
  const [showFoto, setShowFoto] = useState()
  const [newFoto, setNewFoto] = useState()
  const [masuk, setMasuk] = useState()
  const [expire, setExpire] = useState()
  const [stok, setStok] = useState()
  const [harga, setHarga] = useState()
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

  useEffect(()=>{
    const produk = location.state.dataProduk
    setShowFoto(produk.foto)
    setNama(produk.nama)
    setHarga(produk.harga_satuan_produk)
    setStok(produk.stok_produk)
    setMasuk(produk.tgl_masuk)
    setExpire(produk.expire)
  }, [])

  const handleUpdate = e =>{
    e.preventDefault()
    const user = localStorage.getItem('user')
    const data = new FormData()
    data.append('nama', nama)
    data.append('tgl_masuk', masuk)
    data.append('expire', expire)
    data.append('stok_produk', stok)
    data.append('harga_satuan_produk', harga)
    if(jenis){
      data.append('id_jns_produk', jenis)
    }
    if(addData){
      data.append('deskripsi', addData)
    }
    if(newFoto){
      data.append('foto', newFoto)
    }
    else{
      data.append('foto', showFoto.split('produk/')[1])
    }
    
    Axios.post(`http://127.0.0.1:8000/api/update-produk/${location.state.dataProduk.id}`, data, config)
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
      <p align="center" className="mt-3" style={{fontSize: '48px', color: '#46397e', textShadow:'rgba(0, 0, 0, 0.25)'}}>Update Produk</p> 
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
        <Card className="form-produk">
          <Card.Body>
            <Form action="#" onSubmit={handleUpdate}>
              <Row>
                <Col md={5}>
                <Form.Label>Foto produk</Form.Label>
                <center>
                  {
                    showFoto ? 
                    <div>
                      <img className="mt-3" align="center" width="200" id="fotoC" 
                        src={showFoto} alt="foto"/> 
                      {/* <p>{foto.name}</p> */}
                    </div>
                    : ''
                  }
                </center>
                <br />
                <Form.File 
                  id="custom-file"
                  label="Custom file input"
                  custom
                  accept="image/*"
                  onChange={e=>{
                    setNewFoto(e.target.files[0])
                    setShowFoto(URL.createObjectURL(e.target.files[0]))
                  }}
                />
                </Col>
                <Col md={7}>
                  <Form.Label>Nama produk</Form.Label>
                  <Form.Group controlId="formBasicnamaproduk">
                    <Form.Control type="name" placeholder="Nama Produk" value={nama}
                      onChange={e=>setNama(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Jenis produk</Form.Label>
                    <Form.Control as="select" custom onChange={e=>setJenis(e.target.value)} >
                      <option selected>pilih</option>
                      <option value="1">Makanan</option>
                      <option value="2">Minuman</option>
                      <option value="3">Aksesoris</option>
                      <option value="4">Kesehatan</option>
                      <option value="5">Perawatan</option>
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
                    {/* <div style={{border: '1px solid black', borderRadius: '12px', padding: '8px'}}> */}

                      {/* <Editor editorState={editorState} onChange={setEditorState} /> */}
                    {/* </div> */}
                    {/* <EditorJs holder="custom"  data={deskripsi}/> */}
                    {/* <input />; */}
                  </Form.Group>
                  <Row className="mb-3">
                  <Form.Group as={Col} controlId="formBasicharga">
                    <Form.Label>Harga / Pcs</Form.Label>
                    <Form.Control type="number" placeholder="Harga Produk" value={harga}
                      onChange={e=>setHarga(e.target.value)}/>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formBasicstok">
                    <Form.Label>Stok produk</Form.Label>
                    <Form.Control type="number" placeholder="Stok Produk" value={stok}
                      onChange={e=>setStok(e.target.value)}/>
                  </Form.Group>
                  </Row>
                <Form.Group controlId="formBasicalamat">
                  <Form.Label>Tanggal masuk</Form.Label>
                  <Form.Control type="date" placeholder="Tanggal masuk" value={masuk}
                    onChange={e=>setMasuk(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicalamat">
                  <Form.Label>Tanggal expire</Form.Label>
                  <Form.Control type="date" placeholder="" value={expire}
                    onChange={e=>setExpire(e.target.value)}/>
                </Form.Group>
                </Col>
              </Row>
              <center>
                <Button variant="primary" type="submit" style={{backgroundColor: '#7435AB', border: 'none'}}>
                  Update
                </Button>
              </center>
            </Form>
          </Card.Body>
        </Card>
        <Modal show={success}>
          <Modal.Body align="center">
            <img src={require('../../assets/checked.png').default} style={{width: '30%'}} alt="success"/>
            <br /><br />
            <p align="center">Produk berhasil diupdate</p> 
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  )
}
export default EditProduk

  



