import React, {useState, useEffect} from 'react'
import {Card, Button} from 'react-bootstrap'
import {useHistory, useRouteMatch} from 'react-router-dom'
import Axios from 'axios'

function CardEditProduk({produkData}) {
  const history = useHistory()

  return (
    <div>
      <Card style={{ width: '214px', borderBlockColor:'#E5E5E5'}}>
        <Card.Img variant="top" style={{height: '200px', padding:'10px'}} src={produkData.foto} />
        <Card.Body>
          <p  style={{color: '#7435AB', overflow: 'hidden', height: '28px', fontWeight:'bold', marginBottom: '0px'}}>{produkData.nama}
            </p>
          <p align="right" style={{ color: '#F08C2F', fontWeight: 'bold', marginRight: 'auto'}}>Rp.{produkData.harga_satuan_produk}</p>
          
          <Button className="width-full" style={{backgroundColor: '#7435AB', border: 'none'}}
           variant="primary" onClick={()=>history.push(`/petshop/profil/edit-produk`, {dataProduk : produkData})} >Edit</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardEditProduk
