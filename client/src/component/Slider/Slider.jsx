import React from 'react'
import './slider.scss'
// import WestIcon from '@mui/icons-material/West';
// import EastIcon from '@mui/icons-material/East';
import { v4 as uuidv4 } from 'uuid';
// import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/autoplay'
import { Autoplay, Navigation, Pagination } from 'swiper';

const Slider = () => {
  
  const data = [
    'https://img.freepik.com/free-photo/teens-youth-hipster-entertainment-young_53876-13824.jpg?w=1060&t=st=1680265163~exp=1680265763~hmac=d783c8aec2c3c96470bb6b07fcc6e491c3cae5e1b73eaa7cd79af82e6ecd78f8',
    'https://img.freepik.com/free-photo/camera-photography-focus-shoot-copy-space_53876-41339.jpg?w=1060&t=st=1680264494~exp=1680265094~hmac=cefb9116a5d5353719739be3ec4c7d7ac0a4b20a6db4795f953bbde01354ba82',
    'https://img.freepik.com/free-photo/side-view-woman-single-s-day-banner_23-2149520244.jpg?w=1060&t=st=1680264558~exp=1680265158~hmac=8ae0a9828d591a9598ed034e5a46a3aac89863a0baf5a9d1dfdb6735a4d882ef',
  ]
  // const [value, setvalue] = useState(0)
  
  // const next =()=>{
  //   setvalue(value === data.length-1 ? 0 : (pre)=>{return pre+1})
  // }
  // const pre =()=>{
  //   setvalue(value === 0 ? data.length-1 : (pre)=>{return pre-1})
  // }
  
  return (
    <div className="container_slider">
        {/* <div className='slider' style={{transform: `translateX(-${value*100}vw)`,        transition: 'all 1s ease-in-out'}}>
        {data.map((item)=>{
          return (
            <img key={uuidv4()} src={item} alt="" width='100%'/>
          )  
        })}
        </div>
        <div className="controls">
            <div className='controls_item' onClick={pre}><WestIcon/></div>
            <div className='controls_item' onClick={next}><EastIcon/></div>
        </div> */}
        <Swiper
          modules={[Navigation,Pagination,Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className='silder-box'
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {data.map(item=>(
            <SwiperSlide key={uuidv4()}>
              <img srcSet={`${item} 2x`} alt="image-silder" className='image-slider' />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
    
  )
}

export default Slider