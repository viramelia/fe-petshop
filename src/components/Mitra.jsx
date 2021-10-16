import React, {useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import Axios from 'axios'

function Mitra() {
  SwiperCore.use([Autoplay])
  const [mitra, setMitra] = useState([])

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/api/petshop-name`)
      .then(res=>setMitra(res.data.data))
      .catch(err=>{})
  }, [])

  return (
    <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000 }}
      >
        {
          mitra.map((data, index)=>(
            <SwiperSlide key={index}>
              <center>
                <p className="text-secondary" style={{fontSize: 36+'px', align: 'center'}}>
                  {data.nama_lengkap.split(" ")[0]}</p>
                <p className="text-secondary" style={{fontSize: 18+'px', marginTop: -25+'px'}}>petshop</p>
              </center>
            </SwiperSlide>
          ))
        }
      </Swiper>
  )
}

export default Mitra