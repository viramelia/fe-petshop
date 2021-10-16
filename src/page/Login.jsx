import React, {useState} from'react'
import {Container, Card, Form, Button, Nav} from'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'


function Login(){
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useHistory()

  const handleAuth = e =>{
    e.preventDefault()
    const data = new FormData()
    data.append('email', email)
    data.append('password', password)
    Axios.post(`http://127.0.0.1:8000/api/auth`, data)
    .then(res=>{
      localStorage.setItem('token', res.data.access_token)
      localStorage.setItem('user', res.data.id)
      localStorage.setItem('role', res.data.role)

      if(res.data.role == 'customer'){
        history.push('/customer')
      }
      else if(res.data.role == 'petshop'){
        history.push('/petshop')
      }
      else if(res.data.role == 'admin'){
        history.push('/admin')
      }

    })
    .catch(err=>{

    })
    // if(email === 'petshop'){
    //   localStorage.setItem('role', 'petshop')
    //   history.push('/petshop')
    // }
    // else if(email === 'customer'){
    //   localStorage.setItem('role', 'customer')
    //   history.push('/customer')
    // }
    // else if(email === 'admin'){
    //   localStorage.setItem('role', 'admin')
    //   history.push('/admin')
    // }
    // else{
    //   console.log('401')
    // }
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
            <center><Button style={{backgroundColor:'#7435AB'}} variant="primary" type="submit">
              Submit
            </Button>
            <p style={{color:'#787A91', fontSize:13}}>Belum punya akun?</p>
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