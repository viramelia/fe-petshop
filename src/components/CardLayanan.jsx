import React, {useState} from 'react'
import {Card, Modal, Row, Col, Form, InputGroup, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function CardLayanan() {
  const history = useHistory()
  const [layanan, setLayanan] = useState(false)
  const [jam, setJam] = useState(11)
  const [waktu, setWaktu] = useState([9, 10, 11, 12])

  const toDetail =() =>{
    history.push('/customer/detail-layanan')
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
      <Modal show={layanan} onHide={()=> setLayanan(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4}>
              <img className="img-produk" src="merek-whiskas.png" alt="gambar"/>
            </Col>
            <Col md={8}> 
              <div className="d-flex">
                <h3>Grooming</h3>
                <p className="justify-content-start">Rp. 10.000</p>
              </div>
              <p>
                Grooming ini bertujuan untuk menghindari kucing dri jamur 
              </p>
              <Form>
              <h3>Pilih Jadwal</h3>
                {
                  waktu.map((data, index)=>(
                    data != jam ?
                    <InputGroup>
                      <Form.Check inline label={`${data}.00 - ${data+=1}.00`} name="jam" type="radio"/>
                    </InputGroup>: ''
                  ))
                }
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setLayanan(false)}>Close</Button>
          <Button variant="info" onClick={()=>setLayanan(false)}>Checkout</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CardLayanan
