import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'
import Axios from 'axios'

function CardPesananOffline({idProduk, jumlah}){
  const [produk, setProduk] = useState([])
  const [petshop, setPetshop] = useState([])
  const [total, setTotal] = useState()

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/produk-by-id/${idProduk}`, config)
      .then(res=>{
        setProduk(res.data.data)
        console.log(res.data.data.foto)
      })
      .catch(err=>{

      })
  }, [])

  return (
    <Card body >
      <div className="d-block d-md-flex">
        <img src={produk.foto} alt="produk" 
          style={{width: 80+'px'}}/>
        <div className="d-block">
          <p className="mt-3" style={{color: '#7345AB', fontSize: 18+'px', borderLeft: 4+'px solid #7345AB', marginLeft: 12+'px', marginBottom: 0+'px'}}>
            &nbsp;{produk.nama}</p>
        </div>
        <div  style={{marginLeft: 'auto'}}>
          <p style={{color:'#F08C2F' , fontWeight:'bold'}}>Rp. {produk.harga_satuan_produk} X {jumlah} Pcs</p>
          <p style={{float: 'right', color:'#DC143C', fontWeight:'bold'}}>Rp. {produk.harga_satuan_produk * jumlah}</p>
        </div>
      </div>
    </Card>
  )
}

export default CardPesananOffline