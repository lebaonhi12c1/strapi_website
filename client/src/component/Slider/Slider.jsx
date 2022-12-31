import React from 'react'
import './slider.scss'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useState } from 'react';
const Slider = () => {
  const data = [
    'https://s3-eu-west-1.amazonaws.com/vogue-careers/talent/wordpress/wp-content/uploads/2020/03/YNAP-SS20-Banner-16x9-1.jpg',
    'https://assets.vogue.com/photos/6042aa09f414dcf62e51571a/master/w_2560%2Cc_limit/00_story%252520(1).jpg',
    'https://assets.vogue.com/photos/635ae576d1763370d77991af/master/w_2560%2Cc_limit/00-story-NEW.jpg',
  ]
  const [value, setvalue] = useState(0)
  
  const next =()=>{
    setvalue(value === data.length-1 ? 0 : (pre)=>{return pre+1})
  }
  const pre =()=>{
    setvalue(value === 0 ? data.length-1 : (pre)=>{return pre-1})
  }
  console.log(value)
  return (
    <div className="container_slider">
        <div className='slider' style={{transform: `translateX(-${value*100}vw)`,        transition: 'all 1s ease-in-out'}}>
        {data.map((item)=>{
          return (
            <img src={item} alt="" width='100%'/>
          )  
        })}
        </div>
        <div className="controls">
            <div className='controls_item' onClick={pre}><WestIcon/></div>
            <div className='controls_item' onClick={next}><EastIcon/></div>
        </div>
    </div>
    
  )
}

export default Slider