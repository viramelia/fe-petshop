import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'
import Axios from 'axios'

function CardPesananProdukFix({idProduk}) {
  const [pesan, setPesan] = useState([])
  const [produk, setProduk] = useState([])
  const [foto, setFoto] = useState([])
  const [petshop, setPetshop] = useState([])
  const [total, setTotal] = useState()

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(()=>{
    // console.log(idProduk)
    Axios.get(`http://127.0.0.1:8000/api/pesanan/${idProduk}`, config)
      .then(res=>{
        setPesan(res.data.data[0])
        setProduk(res.data.data[0].produk)
        setPetshop(res.data.data[0].petshop)
        setTotal(res.data.harga)
        Axios.get(`http://127.0.0.1:8000/api/foto-produk/${res.data.data[0].produk.foto}`)
          .then(res=>{
            setFoto(res.data.gambar)
          })
          .catch(err=>{})
      })
      .catch(err=>{

      })
  }, [])

  return (
    <Card body >
      <div className="d-block d-md-flex">
        <img src={foto} alt="produk" 
          style={{width: 80+'px'}}/>
        <div className="d-block" align="left">
          <p className="mt-3" style={{color: '#7345AB', fontSize: 23+'px', borderLeft: 4+'px solid #7345AB', marginLeft: 12+'px', marginBottom: 0+'px'}}>
            &nbsp;{produk.nama}</p>
          <p style={{marginBottom: 0+'px', marginLeft: '12px', color:'#A78EAD'}}>{petshop.nama_lengkap}</p>
        </div>
        <div  style={{marginLeft: 'auto'}}>
          <p style={{color:'#F08C2F', fontWeight: 'bold'}}>Rp. {produk.harga_satuan_produk} X {pesan.jumlah_pesanan} Pcs</p>
          <p style={{float: 'right', color:'#DC143C', fontWeight:'bold'}}>Rp. {total}</p>
        </div>
      </div>
    </Card>
  )
}

export default CardPesananProdukFix