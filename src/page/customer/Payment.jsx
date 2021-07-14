import React from 'react'
import {Container, Button} from 'react-bootstrap'

function Payment() {
  return (
    <Container>
      <h2>Upload bukti transaksi</h2>
      <form>
        <input type="file" />
      <Button className="width-full" style={{backgroundColor: '#FF965B', border: 'none'}} 
        variant="primary" >Kirim</Button>
      </form>
    </Container>
  )
}

export default Payment
