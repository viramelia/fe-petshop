import React ,{useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'
import { useHistory, useRouteMatch } from 'react-router'
import Axios from 'axios'

function CardPesananProduk({idPesanan, parentCallback}) {
  const history = useHistory()
  const {url} = useRouteMatch()
  const [jumlah, setJumlah] = useState()
  const [pesanan, setPesanan] = useState([])
  const [produk, setProduk] = useState([])
  const [foto, setFoto] = useState()
  const [petshop, setPetshop] = useState([])

  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`, 
    }
  }

  const hapusProduk = () =>{
    console.log(pesanan.id)
    Axios.delete(`http://127.0.0.1:8000/api/pesanan/${pesanan.id}`, config)
      .then(res=>{
        history.push(url)
        parentCallback(false)
      })
      .catch(err=>{

      })
  }

  const updateJumlah = e =>{
    setJumlah(e.target.value)
    if(e.target.value != 0){
      const data = new FormData()
      data.append('jumlah_pesanan', e.target.value)
      Axios.put(`http://127.0.0.1:8000/api/pesanan/${idPesanan}`, {jumlah_pesanan: e.target.value}, config)
        .then(res=>{
        })  
        .catch(err=>{
        })
    }
  }

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/pesanan/${idPesanan}`, config)
      .then(res=>{
        setPesanan(res.data.data[0])
        setProduk(res.data.data[0].produk)
        setJumlah(res.data.data[0].jumlah_pesanan)
        setPetshop(res.data.data[0].petshop)
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
          <p  style={{color: '#7345AB', fontSize: 23+'px', borderLeft: 4+'px solid #7345AB', marginLeft: 12+'px', marginBottom: 0+'px'}}>
            &nbsp;{produk.nama}</p>
          <p style={{marginBottom: 0+'px', marginLeft: '12px', color:'#A78EAD'}}>{petshop.nama_lengkap}</p>
        </div>
        <div  style={{marginLeft: 'auto', color: '#F08C2F', fontWeight: 'bold'}}>
          <p>Rp. {produk.harga_satuan_produk} / Pcs</p>
          <div className="d-flex" style={{backgroundColor: '#7345AB', borderRadius: '14px', padding: 4+'px'}}>
          {/* <div style={{width: '16px', color: 'white'}}>-</div> */}
            <input style={{width: '72px', margin: '0px 11px', border: 'none', color: 'white', backgroundColor: '#7345AB'}}
              type="number" min="0" max={produk.harga_satuan_produk} value={jumlah} onChange={updateJumlah}/>
            {/* <div style={{width: '16px', color: 'white'}}>+</div> */}
          </div>
        </div>
        <div >
          <img width="20" className="hapus-pesanan" src={require('../assets/trash.png').default} alt="hapus" 
            onClick={hapusProduk}/> 
        </div>
      </div>
    </Card>
  )
}

export default CardPesananProduk