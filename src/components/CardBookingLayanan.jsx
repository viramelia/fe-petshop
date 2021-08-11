import React, {useState} from 'react'
import {Card, Modal, Button} from 'react-bootstrap'

function CardBookinglayanan() {
  const [show, setShow] = useState(false)

  const handleClose = () =>{
    setShow(false)
  }

  return (
    <div>
      <Card body>
        <div className="d-block d-md-flex">
          <img src={require('../assets/merek-whiskas.png').default} alt="produk" 
            style={{width: 80+'px'}}/>
          <div className="d-block">
            <p style={{color: '#7345AB', fontSize: 36+'px', borderLeft: 4+'px solid #7345AB', marginLeft: 12+'px', marginBottom: 0+'px'}}>&nbsp;Whiskas</p>
            <p style={{marginBottom: 0+'px'}}>Momo petshop</p>
          </div>
          <div  style={{marginLeft: 'auto'}}>
            <p>Rp. 10.000 / Kg</p>
            <Button  className="mt-3" onClick={()=>setShow(true)}
              style={{backgroundColor: '#7453AB', border: 'none', }}>
                Detail</Button>
          </div>
            <div style={{
              justifyContent: 'center', alignItems: 'center'
              , display: 'flex', marginLeft: '14px'}}>X</div>
        </div>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <p style={{color: '#7345AB', fontSize: 36+'px', borderLeft: '4px solid #7345AB'}}>
            &nbsp;Detail booking layanan</p>
          <table>
            <tr>
              <td>Nama customer</td>
              <td>:</td>
            </tr>
            <tr>
              <td>Jenis hewan</td>
              <td>:</td>
            </tr>
            <tr>
              <td>Nama petshop</td>
              <td>:</td>
            </tr>
            <tr>
              <td>Jenis layanan</td>
              <td>:</td>
            </tr>
            <tr>
              <td>Nama layanan</td>
              <td>:</td>
            </tr>
            <tr>
              <td>Tanggal pesan</td>
              <td>:</td>
            </tr>
            <tr>
              <td>Tanggal booking</td>
              <td>:</td>
            </tr>
            <tr>
              <td>Jam booking</td>
              <td>:</td>
            </tr>
            <tr>
              <td>Biaya layanan /Kg</td>
              <td>:</td>
            </tr>
          </table>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CardBookinglayanan