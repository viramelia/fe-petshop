import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

function CardEditLayanan({layananData}) {
  const history = useHistory()


  return (
    <div>
      <Card style={{ width: '214px', borderBlockColor:'#E5E5E5'}}>
        <Card.Img variant="top" style={{height: '200px', padding:'10px'}} src={layananData.gambar} />
        <Card.Body>
        <p  style={{color: '#7435AB', overflow: 'hidden', height: '48px', fontWeight:'bold', marginBottom: '0px'}}>{layananData.nama}
            </p>
          <p align="right" style={{ color: '#F08C2F', fontWeight: 'bold', marginRight: 'auto', marginBottom: '0px'}}>Rp.{layananData.biaya_layanan}</p>
          <Button className="width-full" style={{backgroundColor: '#7435AB', border: 'none'}} 
            onClick={()=>history.push('/petshop/profil/edit-layanan', {dataLayanan: layananData})}
          >Edit</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardEditLayanan
