import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { useHistory } from 'react-router'

function CardPetshop({petshop}) {
  const history = useHistory()
  const role = localStorage.getItem('role')

  const toDetail = () =>{
    if(role == 'customer'){
      history.push('/customer/detail-petshop', {idPetshop: petshop.id})
    }
    else if(role == 'petshop'){
      history.push('/petshop/detail-petshop', {idPetshop: petshop.id})
    }
    else{
      history.push(`/detail-petshop`, {idPetshop: petshop.id})
    }
  }

  return (
    <Card style={{ width: '214px', borderBlockColor:'#E5E5E5'}}>
        <Card.Img variant="top" style={{height: '200px', padding:'10px'}} src={petshop.foto} />
        <Card.Body>
          <div>
            <p align="center" style={{color: '#7435AB', fontWeight:'bold'}}>
              {petshop.nama_lengkap}
            </p>
            <p style={{color: '#A78EAD'}} align="center">
              {petshop.alamat}
            </p>
          </div>
          <Button className="width-full" style={{backgroundColor: '#7435AB', border: 'none'}}
           variant="primary" onClick={toDetail}>Detail</Button>
        </Card.Body>
      </Card>
  )
}

export default CardPetshop
