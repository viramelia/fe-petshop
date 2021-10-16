import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function Footer() {
  return (
    <footer style={{backgroundColor: '#7456AB', left: 0, bottom: 0, color: 'white'}}>
      <Container className="mt-3">
        <center>
          <p style={{marginBottom: '0px', paddingBottom: '3px'}}>&copy;viramelia</p>
        </center>
      </Container>
    </footer>
  )
}

export default Footer
