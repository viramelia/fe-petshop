import React from 'react'
import {Button, Container, Form , InputGroup} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function MyChart() {
  const history = useHistory()

  const handlePayment = e =>{
    e.preventDefault()
    console.log('tes')
    history.push('/customer/payment')
  }

  return (
    <Container>
      <h1 className="text-center">Pesanan Produk</h1>
      <form className="width-full" onSubmit={handlePayment}>
        <InputGroup >
          <Form.Check inline name="jam" type="checkbox"/>
          <img className="img-chart" src={require('../../assets/meo.png').default} alt="chart"/>
          <div style={{display: 'block'}}>
            <h3>Me o</h3>
            <p>5 Pcs</p>
          </div>
          <p style={{align: 'right'}}>Rp. 50.000</p>
        </InputGroup>
        <hr />
        <div>
          <h3 style={{float: 'left'}}>Total harga</h3>
          <h3 style={{float: 'right'}}>Rp. 50.000</h3>
        </div>
        <Button className="width-full"  style={{backgroundColor: '#FF965B', border: 'none'}} 
          variant="primary" type="submit">Checkout</Button>
      </form>
    </Container>
  )
}

export default MyChart