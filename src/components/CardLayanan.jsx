import React, {useState} from 'react'
import {Card, Modal, Row, Col, Form, InputGroup, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function CardLayanan() {
  const history = useHistory()
  const [jam, setJam] = useState(11)
  const [waktu, setWaktu] = useState([9, 10, 11, 12])

  const toDetail =() =>{
    const role = localStorage.getItem('role')
    
    if(role == 'customer'){
      history.push('/customer/detail-layanan')
    }
    else if(role == 'petshop'){
      history.push('/petshop/detail-layanan')
    }
    else{
      history.push('/detail-layanan')
    }

  }

  return (
    <div>
      <Card style={{ width: '214px', borderBlockColor: 'none'}}>
        <Card.Img variant="top" style={{height: '215px', padding:'10px'}} src={require('../assets/merek-whiskas.png').default} />
        <Card.Body>
          <Card.Title>Grooming</Card.Title>
          <Button className="width-full" style={{backgroundColor: '#7435AB', border: 'none'}} onClick={toDetail}>Booking</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardLayanan
