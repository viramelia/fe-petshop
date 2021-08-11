import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

import CardBookingLayanan from '../../components/CardBookingLayanan'

function MyChartLayanan() {

  return (
    <Container>
      <h1 className="text-center color-primary">Layanan terbooking</h1>
      <hr className="hr-bottom"/>
      <div className="mt-3" align="center">
        <Row className="justify-content-center">
          <Col md={8} className="mt-3">
            <CardBookingLayanan/>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default MyChartLayanan