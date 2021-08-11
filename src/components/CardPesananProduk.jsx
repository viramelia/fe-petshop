import React from 'react'
import {Card} from 'react-bootstrap'

function CardPesananProduk() {
  return (
    <Card body >
      <div className="d-block d-md-flex">
        <img src={require('../assets/merek-whiskas.png').default} alt="produk" 
          style={{width: 80+'px'}}/>
        <div className="d-block">
          <p className="mt-3" style={{color: '#7345AB', fontSize: 36+'px', borderLeft: 4+'px solid #7345AB', marginLeft: 12+'px', marginBottom: 0+'px'}}>&nbsp;Whiskas</p>
          <p style={{marginBottom: 0+'px', marginLeft: '12px'}}>Momo petshop</p>
        </div>
        <div  style={{marginLeft: 'auto'}}>
          <p>Rp. 10.000 / Pcs</p>
          <div className="d-flex" style={{backgroundColor: '#7345AB', borderRadius: '14px', padding: 4+'px'}}>
          <div style={{width: '16px', color: 'white'}}>-</div>
            <input style={{width: '72px', margin: '0px 11px', border: 'none', color: 'white', backgroundColor: '#7345AB'}} type="number" />
            <div style={{width: '16px', color: 'white'}}>+</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CardPesananProduk