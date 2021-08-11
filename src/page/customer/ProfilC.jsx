import React from 'react'
import { Container, Row, Col, Image, Card, Button} from 'react-bootstrap'
import {Route, useHistory} from 'react-router-dom'

import UpdateProfil from './UpdateProfil'

function ProfilC(){
  const history = useHistory()
  return(
  <Route>
    <div style={{backgroundColor: '#7435AB', padding: '100px'}}> </div>
      <div align="center">
        <Image className="img-profil-update" src={require('../../assets/petshop.png').default} roundedCircle></Image>
        <p style={{fontSize: '48px', color: '#46397e'}}>Viramelia Basri</p> 
        <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
        <p style={{color: '#848484', fontSize: 18+'px'}}>Jl. Sunu | 082190494097 | 27 Desember 1999 | Perempuan</p>
        <Button className="mt-3" style={{backgroundColor: '#7435AB', border: 'none'}} onClick={()=> history.push('/customer/update-profil')} >Update</Button>
      </div>
 </Route>
  
  )
}

export default ProfilC