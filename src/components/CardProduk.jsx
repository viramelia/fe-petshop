import React, {useState} from 'react'
import {Card, Button, Modal, Form, Row, Col} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function CardProduk() {
  const [show, setShow] = useState(false)
  const history = useHistory()

  const toDetail = ()=>{
    history.push('/customer/detail-produk')
  }

  return (
    <div>
      <Card style={{ width: '15rem'}}>
        <Card.Img variant="top" style={{height: '238px'}} src={require('../assets/meo.png').default} />
        <Card.Body>
          <div>
            <Card.Title style={{float: 'left'}}>Me O</Card.Title>
            <p style={{float: 'right'}}>Rp.10000</p>
          </div>
          <Button className="width-full" style={{backgroundColor: '#FF965B', border: 'none'}}
           variant="primary"  onClick={toDetail}>Beli</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardProduk
