import React, {useState, useEffect} from 'react'
import {Card, Button} from 'react-bootstrap'
import {useHistory, useRouteMatch} from 'react-router-dom'
import Axios from 'axios'

function CardProduk({idProduk}) {
  const history = useHistory()
  const {url, match} = useRouteMatch()
  const [produkData, setProdukData] = useState([])
  const [foto, setFoto] = useState()
  const [petshop, setPetshop] = useState([])

  const toDetail = () =>{
    const role = localStorage.getItem('role')
    if(role == 'customer'){
      history.push('/customer/detail-produk', {idDetail: idProduk})
    }
    else if(role == 'petshop'){
      history.push('/petshop/detail-produk', {idDetail: idProduk})
    }
    else{
      history.push(`/detail-produk`, {idDetail: idProduk})
    }
  }

  useEffect(()=>{
    // console.log(idProduk)
    Axios.get(`http://127.0.0.1:8000/api/produk-by-id/${idProduk}`)
    .then(res=>{
      setProdukData(res.data.data)
      setPetshop(res.data.data.petshop.nama_lengkap)
    })
    .catch(err=>{})
  }, [])

  return (
    <div>
      <Card style={{ width: '214px', borderBlockColor:'#E5E5E5'}}>
        <Card.Img variant="top" style={{height: '200px', padding:'10px'}} src={produkData.foto} />
        <Card.Body>
          <p  style={{color: '#7435AB', overflow: 'hidden', height: '28px', fontWeight:'bold', marginBottom: '0px'}}>{produkData.nama}
            </p>
          <p align="right" style={{ color: '#F08C2F', fontWeight: 'bold', marginRight: 'auto', marginBottom: '0px'}}>Rp.{produkData.harga_satuan_produk}</p>
          <p style={{color: '#A78EAD'}} align="left">
            {petshop}
          </p>
          <Button className="width-full" style={{backgroundColor: '#7435AB', border: 'none'}}
           variant="primary" onClick={toDetail}>Beli</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardProduk
