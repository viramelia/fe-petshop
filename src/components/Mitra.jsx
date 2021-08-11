import React, {useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

function Mitra() {
  SwiperCore.use([Autoplay])
  const [mitra, setMitra] = useState([
    {
      nama: 'Baba'
    },
    {
      nama: 'Pet Point'
    },
    {
      nama: 'King'
    },
    {
      nama: 'Hello'
    },
    {
      nama: 'Petmart'
    },
    {
      nama: 'Amigos'
    },
    {
      nama: 'The One Petstore Todopuli'
    },
    {
      nama: 'Green Rappocini'
    },
    {
      nama: 'Momo'
    },
    {
      nama: 'Mantul'
    },
    {
      nama: 'C'
    },
    {
      nama: 'Familia & Grooming'
    },
    {
      nama: 'Muezza'
    },
    {
      nama: 'Von Gowa'
    },
    
  ])

  return (
    <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000 }}
      >
        {
          mitra.map((data, index)=>(
            <SwiperSlide key={index}>
              <center>
                <p className="text-secondary" style={{fontSize: 36+'px', align: 'center'}}>{data.nama}</p>
                <p className="text-secondary" style={{fontSize: 18+'px', marginTop: -25+'px'}}>petshop</p>
              </center>
            </SwiperSlide>
          ))
        }
      </Swiper>
  )
}

export default Mitra