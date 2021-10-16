import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Image, Card, Button} from 'react-bootstrap'
import {Route, useHistory} from 'react-router-dom'
import Axios from 'axios'

import UpdateProfil from './UpdateProfil'

function ProfilC(){
  const history = useHistory()
  const [customer, setCustomer] = useState([])
  const [foto, setFoto] = useState() 

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    const user = localStorage.getItem('user')
    Axios.get(`http://127.0.0.1:8000/api/user/${user}`, config)
    .then(res=>{
      setCustomer(res.data.data)
    })
    .catch(err=>{})
  }, [])

  return(
  <Route>
    <div style={{backgroundColor: '#7435AB', padding: '100px'}}> </div>
    <div align="center">
      <Image className="img-profil-update" src={customer.foto} roundedCircle></Image>
      <p style={{fontSize: '30px', color: '#46397e'}}>{customer.nama_lengkap}</p> 
      <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
      <p style={{fontSize: '15px', color: '#848484'}}>{customer.email}</p> 
      <p style={{color: '#848484', fontSize: 15+'px'}}>{customer.alamat} | {customer.no_hp} | {customer.tgl_lahir} | {customer.gender}</p>
      <Button className="mt-3" style={{backgroundColor: '#7435AB', border: 'none'}} onClick={()=> history.push('/customer/update-profil')} >Update</Button>
    </div>
  </Route>
  
  )
}

export default ProfilC