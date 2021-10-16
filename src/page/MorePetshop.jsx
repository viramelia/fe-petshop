import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {Container, Jumbotron, Row, Col, Card, Form} from 'react-bootstrap'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import Axios from 'axios'

function MorePetshop() {
  const history = useHistory()
  const [kecamatan, setKecamatan] = useState()
  const [myMarker, setMyMarker] = useState([])
  const [petshop, setPetshop] = useState()
  // FOR MAPS
  const [mapss, setMapss] = useState(true)
  const [posisi, setPosisi] = useState([-5.148022368787631, 119.43298742429299])
  const [zoom, setZoom] = useState(13)
  const [myLat, setMyLat] = useState()
  const [myLon, setMyLon] = useState()
  const [myLocation, setMyLocation] = useState([])
//  mengatur posisi maps
  const pilihKecamatan = e =>{
    setMapss(false)
    if(e.target.value == 'manggala'){
      setZoom(14)
      setPosisi([-5.166228350126063, 119.50242376937629])
    }
    else if(e.target.value == 'tallo'){
      setZoom(15)
      setPosisi([-5.117125475611692, 119.4344422362466])
    }
    else if(e.target.value == 'wajo'){
      setZoom(15)
      setPosisi([-5.124398465253916, 119.41201650884281])
    }
    else if(e.target.value == 'ujung tanah'){
      setZoom(15)
      setPosisi([-5.114573099543338, 119.41945183922913])
    }
    else if(e.target.value == 'ujung pandang'){
      setZoom(15)
      setPosisi([-5.140547757958811, 119.41393251085704])
    }
    else if(e.target.value == 'tamalate'){
      setZoom(14)
      setPosisi([-5.180177319374821, 119.41048517426803])
    }
    else if(e.target.value == 'tamalanrea'){
      setZoom(15)
      setPosisi([-5.11026471939581, 119.48906258105814])
    }
    else if(e.target.value == 'rappocini'){
      setZoom(14)
      setPosisi([-5.167029363338709, 119.44076069548525])
    }
    else if(e.target.value == 'panakkukang'){
      setZoom(15)
      setPosisi([-5.140143859231405, 119.45389456592])
    }
    else if(e.target.value == 'mariso'){
      setZoom(15)
      setPosisi([-5.156982802915353, 119.40964038074009])
    }
    else if(e.target.value == 'mamajang'){
      setZoom(15)
      setPosisi([-5.163255310807715, 119.41697516371127])
    }
    else if(e.target.value == 'makassar'){
      setZoom(15)
      setPosisi([-5.140934705372312, 119.42573271792229])
    }
    else if(e.target.value == 'kepulauan sangkarrang'){
      setZoom(15)
      setPosisi([-5.0429911468856226, 119.32604028843097])
    }
    else if(e.target.value == 'bontoala'){
      setZoom(15)
      setPosisi([-5.129680720318544, 119.42164026563351])
    }
    else if(e.target.value == 'biringkanaya'){
      setZoom(14)
      setPosisi([-5.087952161126552, 119.5192486333725])
    }
    else{

    }
    Axios.get(`http://127.0.0.1:8000/api/petshop-by-kecamatan/${e.target.value}`)
      .then(res=>{
        setPetshop(res.data.data)
        setMapss(true)
      })
      .catch(err=>console.log(err))
  }

  // mengarahkan ke halaman profil petshop
  const toDetailPetshop = idPets =>{
    const role = localStorage.getItem('role')

    if(role == 'customer'){
      history.push('/customer/detail-petshop', {idPetshop: idPets})
    }
    else if(role == 'petshop'){
      history.push('/petshop/detail-petshop', {idPetshop: idPets})
    }
    else{
      history.push(`/detail-petshop`, {idPetshop: idPets})
    }
  }

  const myIcon = L.icon({
    iconUrl: require('../assets/maps-and-flags.png').default,
    iconSize: [32, 32],
    iconAnchor: [32, 64],
    popupAnchor: [-3, -76],
    shadowUrl: null,
    shadowSize: [50, 64],
    shadowAnchor: [4, 62]
  });

  const myPin = L.icon({
    iconUrl: require('../assets/marker.png').default,
    iconSize: [32, 32],
    iconAnchor: [32, 64],
    popupAnchor: [-3, -76],
    shadowUrl: null,
    shadowSize: [50, 64],
    shadowAnchor: [4, 62]
  });

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/petshops`)
      .then(res=>{
        setMyMarker(res.data.data)
      })
      .catch(err=>console.log(err))
    if(localStorage.getItem('role') != 'petshop'){
      if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(function(position) {
          let coord = []
          coord.push(position.coords.latitude)
          coord.push(position.coords.longitude)
          setMyLat(position.coords.latitude)
          setMyLon(position.coords.longitude)
          setMyLocation(coord)
          // console.log(coord)
          console.log(position.coords.latitude, position.coords.longitude)
        });
        console.log("yess")
      }
      else{
        console.log("nda ada")
      }
    }
  }, [])

  return (
    <div>
      <Jumbotron style={{backgroundColor: `#7435AB`, height: '275px',}} fluid>
        <Container>
          <h2 className="text-white">Temukan Petshop</h2>
          <p className="text-white">Klik pin lokasi petshop dan temukan berbagai produk dan layanan</p>
        </Container>
      </Jumbotron>
      <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div align="center" style={{ padding: 18+'px', 
            backgroundColor: 'white',
            borderRadius: 12+'px', marginTop: -80+'px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <Form.Control style={{width: '100%'}} as="select" size="md" onChange={pilihKecamatan}>
              <option selected>Pilih kecamatan</option>
              <option value="wajo">wajo</option>
              <option value="ujung tanah">ujung tanah</option>
              <option value="ujung pandang">ujung pandang</option>
              <option value="tamalate">tamalate</option>
              <option value="tamalanrea">tamalanrea</option>
              <option value="tallo">tallo</option>
              <option value="rappocini">rappocini</option>
              <option value="panakkukang">panakkukang</option>
              <option value="mariso">mariso</option>
              <option value="manggala">manggala</option>
              <option value="mamajang">mamajang</option>
              <option value="makassar">makassar</option>
              <option value="kepulauan sangkarrang">kepulauan sangkarrang</option>
              <option value="bontoala">bontoala</option>
              <option value="biringkanaya">biringkanaya</option>
            </Form.Control>
          </div>
        </Col>
      </Row>
        <div className="mb-3 mt-3" style={{height: '400px'}}>
          {/* menampilkan maps yang sudah diatur */}
          {/* <p>[{myLat},{myLon}]</p> */}
        {
          mapss?
          <MapContainer style={{height: '100%'}} center={posisi} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              {
                myLat && myLon?
                <Marker icon={myPin} position={[myLat,myLon]}>
                  <Popup>
                    <p>Saya di sini</p>
                  </Popup>
                </Marker>
                :''
              }
               
              {
                // menmpilkan pin pin petshop
                myMarker.map((data, index)=>(  
                  String(data.latitude) != null?   
                  <Marker icon={myIcon} position={[data.latlon.split(',')[0], data.latlon.split(',')[1]]}>
                    <Popup>
                      <p style={{cursor: 'pointer'}} onClick={()=>toDetailPetshop(data.id)}>{data.nama_lengkap}</p>
                      <p style={{cursor: 'pointer'}} >{data.alamat}</p>
                    </Popup>
                  </Marker>: ''
                ))
              }
          </MapContainer>: ''
        }
        </div>
      </Container>
    </div>
  )
}

export default MorePetshop
