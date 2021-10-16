import React, {useState, useEffect} from 'react'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router'
import Axios from 'axios'

import CardPetshop from '../components/CardPetshop'

function CariPetshop() {
  const location = useLocation()
  const keyword = location.state.keyword
  const [load, setLoad] = useState(false)
  const [petshop, setPetshop] = useState([])

  useEffect(()=>{
    console.log('tess')
    Axios.get(`http://127.0.0.1:8000/api/cari-petshop/${keyword}`)
      .then(res=>{
        setPetshop(res.data.data)
        setLoad(true)
      })
      .catch(err=>console.log(err))
  }, [])

  return (
    <div>
      {/* <Jumbotron style={{backgroundColor: `#7435AB`, height: '275px',}} fluid>
        <Container>
          <h2 className="text-white">Temukan layanan dari berbagai petshop</h2>
          <p className="text-white">Kesehatan | Kebersihan | Perawatan</p>
        </Container>
      </Jumbotron> */}
      <Container align="center">
        <p style={{fontSize: '48px', color: '#46397e'}} align="center">Petshop</p> 
        <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
        <Row className="justify-content-center">
            {}
            {
              load ?
              petshop.map((data, index)=>(
                <Col md={3}>
                  <CardPetshop petshop={data}/>
                  </Col>    
              )) : <p>Petshop tidak ditemukan</p>
            }
        </Row>
      </Container>
    </div>
  )
}

export default CariPetshop
