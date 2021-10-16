import React, {useState, useEffect} from 'react'
import { Container, Table, Modal, Button, Form} from 'react-bootstrap'
import Axios from 'axios'

function KonfirmasiPetshop() {
  const [load, setLoad] = useState(true)
  const [petshop, setPetshop] = useState([])
  const [transaksi, setTransaksi] = useState([])
  // const [petshop, setPetshop] = useState([])
  const [detail, setDetail] = useState([])
  const [hari, setHari] = useState([])
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState()

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/petshop-to-confirm`, config)
      .then(res=>{
        setPetshop(res.data.data)
      })
      .catch(err=>{})
  }, [])

  const handleClose = () => setShow(false)

  const handleShow = id =>{
    Axios.get(`http://127.0.0.1:8000/api/petshop/${id}`)
      .then(res=>{
        console.log(res.data.data)
        setDetail(res.data.data)
        setHari(res.data.data.hari)
        setShow(true)
      })
      .catch(err=>{
        console.log(err)
      })
  }

  return (
    <Container className="mt-3">
      <h2 style={{color: '#7345AB'}}>Waiting list akun petshop </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Alamat</th>
            <th>No. HP</th>
            <th>Detail</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {
            true ?
            petshop.map((data, index)=>(
              <tr>
                <td>{++index}</td>
                <td>{data.nama_lengkap}</td>
                <td>{data.email}</td>
                <td>{data.alamat}</td>
                <td>{data.no_hp}</td>
                <td>
                  <Button variant="primary" onClick={()=>handleShow(data.id)}>
                    Detail
                  </Button>
                </td>
                <td>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" onChange={e=>{
                      if(e.target.value == 'aktif'){
                        Axios.get(`http://127.0.0.1:8000/api/verif-petshop/${data.id}`, config)
                         .then(res=>{
                            setLoad(false)
                            Axios.get(`http://127.0.0.1:8000/api/petshop-to-confirm`, config)
                              .then(res=>{
                                setPetshop(res.data.data)
                                setLoad(true)
                              })
                              .catch(err=>console.log(err))
                         })
                         .catch(err=>{})
                      }
                    }}>
                      <option value="non">Non aktif</option>
                      <option value="aktif">Aktif</option>
                    </Form.Control>
                  </Form.Group>
                </td>
              </tr>
            )) : ''
          }   
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detail petshop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
              detail.length != 0 ?
              <table> 

                <tr>
                  <td>Nama </td>
                  <td>: {detail.nama_lengkap}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>: {detail.email}</td>
                </tr>
                <tr>
                  <td>No. Hp</td>
                  <td>: {detail.no_hp}</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>: {detail.alamat}</td>
                </tr>
                <tr>
                  <td>Latitude & longitude</td>
                  <td>: {detail.latlon}</td>
                </tr>
                <tr>
                  <td>Tanggal registrasi</td>
                  {/* <td>: {detail.created_at.split('T')[0]}</td> */}
                  <td>: {detail.created_at.split("T")[0]}</td>
                </tr>
                <tr>
                  <td>Bank</td>
                  <td>: {detail.nama_bank}</td>
                </tr>
                <tr>
                  <td>No. Rek</td>
                  <td>: {detail.no_rek}</td>
                </tr>
                <tr>
                  <td>Jam buka</td>
                  <td>: {detail.jam_buka}</td>
                </tr>
                <tr>
                  <td>Jam tutup</td>
                  <td>: {detail.jam_tutup}</td>
                </tr>
                <tr>
                  <td>Foto</td>
                  <td>: 
                    <img style={{width: '200px', height: '200px'}}
                    src={detail.foto} alt="petshop"/>
                  </td>
                </tr>
                <tr>
                  <td>Hari</td>
                  <td>: 
                    {
                      hari.map((data, index)=>(
                        <span key={index}>&nbsp;{data.nama_hari}</span>
                      ))
                    }
                  </td>
                </tr>
              </table>
              : ''
            }
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default KonfirmasiPetshop
