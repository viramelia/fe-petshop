import React from 'react'
import {Row, Col, Container, Card, Button, Form} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function DetailProduk() {
  const history = useHistory()

  const detailPetshop = () =>{
    const role = localStorage.getItem('role')

    if(role == 'customer'){
      history.push('/customer/detail-petshop')
      console.log('sasf')
    }
    else if(role == 'petshop'){
      history.push('/petshop/detail-petshop')
    }
    else{
      history.push('/detail-petshop')
    }
  }

  return (
    <div>
      <Container>
        <div className="d-block d-md-flex mt-3">
          <section>
            <Row>
              <Col md={4}>
                <img style={{width: 100+'%'}} src={require('../assets/merek-whiskas.png').default} alt="produk" />
                <p className="mt-3 detail-petshop" onClick={detailPetshop}>
                  <img style={{width: 30+'px'}} src={require('../assets/shop.png').default} alt="petshop"/>
                  &nbsp;&nbsp;&nbsp;Momo petshop
                </p>
                <p>
                  <img style={{width: 30+'px'}} src={require('../assets/pin.png').default} alt="petshop"/>
                  &nbsp;&nbsp;&nbsp;Jl. Sunu
                </p>
                <p>
                  <img style={{width: 30+'px'}} src={require('../assets/call.png').default} alt="petshop"/>
                  &nbsp;&nbsp;&nbsp;0821 9049 4097
                </p>
              </Col>
              <Col md={8}>
                <p style={{textAlign: 'left', fontSize: 48+'px', color: '#7435AB', borderLeft: 4+'px solid #7435AB'}}>
                  &nbsp;Grooming <span style={{float: 'right', color: 'black', fontSize: 24+'px'}}>Rp. 10.000</span></p>
                <p style={{textAlign: 'justify'}}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta laudantium quas vel laborum at, ex atque in delectus consequuntur explicabo alias reprehenderit ipsam error corporis consequatur adipisci aliquid. Obcaecati.
                </p>
              </Col>
            </Row>
          </section>
          <div className="justify-content-center">
            <aside className="ml-3">
              <Card className="justify-content-center " style={{width: '214px', backgroundColor: '#F3EAFF', border: 'none', padding: '21px 24px'}}>
                <form>
                  <p>Jenis hewan</p>
                  <Form.Control size="sm" type="number" placeholder="kucing" />
                  <p>Tanggal layanan</p>
                  <Form.Control size="sm" type="date" />
                  <p>Jam layanan</p>
                  <Form.Control size="sm" type="time"/>
                  {/* <p className="mt-2" style={{align: 'left'}}>Total
                    <span style={{float: 'right', color: '#7435AB', fontWeight: 'bold'}}>
                    Rp. 20.000
                    </span>
                  </p> */}
                  <Button  className="mt-3"
                  style={{width: 100+'%', backgroundColor: '#7453AB', border: 'none', fontSize: 12+'px'}}>
                    Booking</Button>
                </form>
              </Card>
            </aside>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default DetailProduk