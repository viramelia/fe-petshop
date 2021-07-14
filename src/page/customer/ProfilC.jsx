import React from 'react'
import { Container, Row, Col, Image, Card, Button} from 'react-bootstrap'

function ProfilC(){
  return(
    <Container className="mt-3" align="center">
      <Card style={{marginTop: '5%'}}>
        <Card.Body>
          <Image className="img-profil-update"  src={require('../../assets/profil.JPG').default} roundedCircle></Image>
          <p className="mt-3 text-center">
          Viramelia Basri
          </p>
          <p>Alamat : Jalan Bajo</p>
          <p>No Hp  : 0821548xxxxx</p>
          <p>Perempuan</p>
          <Button variant="primary">Edit profil</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProfilC