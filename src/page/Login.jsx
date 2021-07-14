import React, {useState} from'react'
import {Container, Card, Form, Button, Nav} from'react-bootstrap'
import {useHistory, Link} from 'react-router-dom'

function Login(){
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useHistory()

  const handleAuth = e =>{
    e.preventDefault()
    if(email === 'petshop')
      history.push('/petshop')
    else if(email === 'customer'){
      history.push('/customer')
    }
    else if(email === 'admin'){
      console.log('admin')
    }
    else{
      console.log('401')
    }
  }

  return(
    <Container className="login-wrapper">
    <center><img className="logo-login" src="LOGO PNG.png" alt="logo"/></center>
      <Card className="form-login small-card-form">
        <Card.Body>
          <Form action="#" onSubmit={handleAuth}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            </Form.Group>
            <center><Button style={{backgroundColor:'#082B59'}} variant="primary" type="submit">
              Submit
            </Button>
            <p>Belum punya akun?</p>
            </center>
              
          </Form>
              <div className="link-daftar">
                <Nav.Link href="/registrasi-petshop">Daftar Petshop</Nav.Link>
                <Nav.Link href="/registrasi-customer">Daftar Customer</Nav.Link>
              </div>
        </Card.Body>
      </Card>
    </Container>
  )
}


export default Login