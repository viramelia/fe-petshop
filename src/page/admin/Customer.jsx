import React, {useState, useEffect} from 'react'
import {Container, Table, Modal, Button, Pagination} from 'react-bootstrap'
import Axios from 'axios'

function Customer() {
  const [customer, setCustomer] = useState([])
  const [detail, setDetail] = useState([])
  const [aktif, setAktif] = useState(1)
  const [show,setShow] = useState(false)
  const [last, setLast] = useState([])
  const [load, setLoad] = useState(true)
  const [foto,setFoto] = useState()
  const totalPage = []
  
  const config = {
    headers:{
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  } 

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/all-customer?page=${aktif}`, config)
      .then(res=>{
        setCustomer(res.data.data.data)
        const length = res.data.data.last_page
        for(let i = 1;i <= length ; i++){
          totalPage.push(i)
        }
        setLast(totalPage)
      })
      .catch(err=>{})
  }, [])

  const handleDetail = id => {
    Axios.get(`http://127.0.0.1:8000/api/user/${id}`, config)
      .then(res=>{
        console.log(res.data.data)
        setDetail(res.data.data)
        Axios.get(`http://127.0.0.1:8000/api/foto-customer/${res.data.data.foto}`, config)
          .then(res=>{
            setFoto(res.data.gambar)
          })
          .catch(err=>{})
        setShow(true)
      })
      .catch(err=>console.log(err))
  }

  return (
    <Container className="mt-3">
      <h2 classsName="mt-3" style={{color: '#7435AB'}}>List customer </h2>
      <Table classsName="mt-3" striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {
            load ?
            customer.map((data, index)=>(
              <tr key={index}>
                <td>{++index}</td>
                <td>{data.nama_lengkap}</td>
                <td>{data.email}</td>
                <td>
                  <Button variant="primary" onClick={()=>handleDetail(data.id)}>
                    Detail
                  </Button>
                </td>
              </tr>
            )): ''
          }
        </tbody>
      </Table>
      <Pagination align="center" className="justify-content-center mt-3">
          {
            last.map((data, index)=>(
              <Pagination.Item onClick={()=>{
                setAktif(data)
                Axios.get(`http://127.0.0.1:8000/api/all-customer?page=${data}`, config)
                  .then(res=>{
                    setLoad(false)
                    setCustomer(res.data.data.data)
                    setLoad(true)
                  })
              }} key={data} active={data === aktif}>
                {data}
              </Pagination.Item>
            ))
          }
        </Pagination>
      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Detail customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            detail.length != 0 ?

            <table>
              <tr>
                <td>Nama</td>
                <td>: {detail.nama_lengkap}</td>
              </tr>
              {
                detail.nama_lengkap == 'guest' ?
                '':
                <tr>
                  <td>Foto </td>
                  <td>:
                  <img style={{width: '200px', height: '200px'}}
                    src={detail.foto} alt="bukti"/>
                  </td>
                </tr>
              }
              <tr>
                <td>Email</td>
                <td>: {detail.email}</td>
              </tr>
              <tr>
                <td>No. HP</td>
                <td>: {detail.no_hp}</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td>: {detail.alamat}</td>
              </tr>
              <tr>
                <td>Tanggal lahir</td>
                <td>: {detail.tgl_lahir}</td>
              </tr>
              <tr>
                <td>Jenis kelamin</td>
                <td>: {detail.gender}</td>
              </tr>
              <tr>
                <td>Tanggal registrasi</td>
                <td>: {detail.created_at.split("T")[0]}</td>
              </tr>
            </table>
            : ''
          }
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default Customer