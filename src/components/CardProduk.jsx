import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {useHistory, useRouteMatch} from 'react-router-dom'

function CardProduk() {
  const history = useHistory()
  const {url, match} = useRouteMatch()

  const toDetail = ()=>{
    const role = localStorage.getItem('role')
    if(role == 'customer'){
      history.push('/customer/detail-produk')
    }
    else if(role == 'petshop'){
      history.push('/petshop/detail-produk')
    }
    else{
      history.push(`/detail-produk`)
    }
  }

  return (
    <div>
      <Card style={{ width: '214px', borderBlockColor:'#E5E5E5'}}>
        <Card.Img variant="top" style={{height: '200px', padding:'10px'}} src={require('../assets/meo.png').default} />
        <Card.Body>
          <div>
            <p align="left">Me O
              <span style={{float: 'right', color: '#7345AB', fontWeight: 'bold'}}>Rp.10.000</span>
            </p>
            {/* <p style={{float: 'right'}}>Rp.10000</p> */}
          </div>
          <p style={{color: '#848484'}} align="left">Momo Petshop</p>
          <Button className="width-full" style={{backgroundColor: '#7435AB', border: 'none'}}
           variant="primary" onClick={toDetail}>Beli</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardProduk
