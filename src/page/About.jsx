import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'

function About() {
  return (
    <div align="center">
       <p style={{fontSize: '48px', color: '#7435AB', marginTop:'50px'}}>Tentang Kami</p>
       <hr style={{border: '2px solid #001E6C', width: '50px'}}/>
       <Container>
        <p style={{fontSize: '20px', color: '#46397e', marginTop:'30px' }}>Marketplace Petshop ini menyediakan kebutuhan 
        hewan peliharaan anda dari beberapa Petshop Kota Makassar. Kami menyediakan beberapa kebutuhan hewan anda mulai 
        dari produk, layanan berupa booking (grooming, vaksin, dll), dan aksesoris. Sehingga mempermudah dalam memenuhi 
        keperluan peliharaan.
        </p>
       </Container>

    <p style={{fontSize: '48px', color: '#7435AB', marginTop:'50px'}}>Kenapa Marketplace?</p>
    <hr style={{border: '2px solid #7435AB', width: '50px'}}/>
    <div style={{backgroundColor: '#7435AB', padding: '27px', marginBottom:'32px'}}>
      <Container>
      <Row>
        <Col>
          <img style={{width: '30%'}}src={require('../assets/testing.png').default}></img>
          <p style={{color:'white', fontSize:'20px'}}>Mempermudah dalam pengolahan data dan transaksi bagi Petshop</p>
        </Col>
        <Col>
        <img style={{width: '30%'}}src={require('../assets/quality-assurance.png').default}></img>
        <p style={{color:'white', fontSize:'20px'}}>Mempermudah konsumen untuk menemukan produk dan layanan.</p>
        </Col>
        <Col>
        <img style={{width: '30%'}}src={require('../assets/responsive-website.png').default}></img>
        <p style={{color:'white', fontSize:'20px'}}>Mudah diakses dimana saja</p>
        </Col>
      </Row>
      </Container>
    </div> 
     
    <Container>
    <p id="infoMore" style={{fontSize: '48px', color: '#46397e', marginTop:'30px'}}>Info Hewan Peliharaan</p>
        <Row className="mt-3" >
          <Col md={6}>
            <img style={{width: '80%'}} src={require('../assets/keuntungan.jpg').default}/>
          </Col>
          <Col md={6}>
            <h2 style={{borderLeft: '4px solid #001E6C', textAlign:'left'}}>&nbsp; Keuntungan</h2>
            <p style={{ textAlign:'left'}}>Ternyata merawat hewan peliharaan di rumah secara tidak
             langsung juga ikut memberikan manfaat bagi kesehatan tubuh. Misalnya, memelihara 
             binatang membantu menurunkan kadar trigliserida dan kolesterol yang merupakan salah 
             satu faktor penyakit jantung.Selain itu, bahwa ikatan batin yang kuat antara majikan dan peliharaan kesayangannya dapat menurunkan tensi darah tinggi akibat stres.</p>
          </Col>
          <Col md={6} className="mt-3">
          <h2 style={{borderLeft: '4px solid #001E6C', textAlign:'left', marginTop:'15px'}}>&nbsp;Memperhatikan</h2>
          <p style={{ textAlign:'left'}}>Jangan merasa cukup dengan memberikan mereka makan dan minum 3x sehari misalnya tanpa memperhatikan gizinya.
          Memberikan makan dan minum pada hewan bertujuan juga untuk menjaga kesehatan mereka. Jadi Anda harus memperhatikan juga kualitas dari makanannya.
          Pemberian makanan yang tepat dalam  cara merawat hewan peliharaan tentunya harus disesuaikan dengan jenis binatang yang kita rawat. Beda hewan
          peliharaan tentu akan beda pula jenis zat gizi yang dibutuhkan.</p>
          </Col>
          <Col md={6} className="mt-3">
          <img style={{width: '80%'}} src={require('../assets/kebutuhan.jpg').default}/>
          </Col>
          <Col md={6} className="mt-3">
            <img style={{width: '80%'}} src={require('../assets/kesehatan.jpg').default}/>
          </Col>
          <Col md={6} className="mt-3">
            <h2 style={{borderLeft: '4px solid #001E6C', textAlign:'left', marginTop:'15px'}}>&nbsp;Merawat</h2>
            <p style={{ textAlign:'left'}}>Merawat hewan tentunya bukan hal yang mudah terutama
             pada kesehatan hewan perulunya pemeriksaan untuk hewan yang kamu pelihara. Di dalam
              kunjungan Petshop tersebut kamu juga bisa sekaligus menanyakan tentang apa saja yang 
              diperlukan untuk merawat hewan, terutama dari segi medis. Sehingga, kamu pun bisa 
              memberikan yang terbaik untuk hewan yang sedang dipelihara.</p>
          </Col>
        </Row>
      </Container> 
      </div> 
  )
}

export default About
