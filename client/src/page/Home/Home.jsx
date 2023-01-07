import React from 'react'
import Slider from './../../component/Slider/Slider';
import './home.scss'
import FeaturedProducts from './../../component/FeaturedProducts/FeaturedProducts';
import Categories from './../../component/Categories/Categories';
import Contact from '../../component/Contact/Contact';
const Home = () => {
  const data =[
    {
        id: 1,
        title: "Long Sleeve Graphic T-shirt",
        img1: 'https://velpa.pl/pol_pm_SWETER-ARMANI-EXCHANGE-52215_5.jpg',
        img2: 'https://th.bing.com/th/id/OIP.gBesKYM1-tO_fZmTbBljowHaLH?pid=ImgDet&w=1333&h=2000&rs=1',
        old_price: 19,
        new_price: 15,
        isNew: true,
    },
    {
        id: 2,
        title: "Coat",
        img1: 'https://th.bing.com/th/id/OIP.LRiWjgnHkJdWOfU9jrpu6AHaK3?pid=ImgDet&w=613&h=900&rs=1',
        img2: 'https://th.bing.com/th/id/OIP.-wzuaHzHGOSakV7DTMDpzgHaK3?pid=ImgDet&w=750&h=1101&rs=1',
        old_price: 40,
        new_price: 25,
        isNew: true,
    },
    {
        id: 3,
        title: "Skirt",
        img1: 'https://th.bing.com/th/id/OIP.d5uf3Fd6huNzx552RJjcFwHaKW?pid=ImgDet&rs=1',
        img2: 'https://celebmafia.com/wp-content/uploads/2016/06/karlie-kloss-on-set-of-a-vogue-photoshoot-in-new-york-city-6-21-2016-1.jpg',
        old_price: 55,
        new_price: 30,
        isNew: false,
    },
    {
        id: 4,
        title: "Suit",
        img1: 'https://th.bing.com/th/id/R.f7fd964076d3981c95a57cd13fb923c2?rik=QxWW8eEhoNDjgA&pid=ImgRaw&r=0',
        img2: 'https://th.bing.com/th/id/R.85242f10e53de10b68cc08de2f486a11?rik=YypBG6o3e4IFBg&pid=ImgRaw&r=0',
        old_price: 30,
        new_price: 28,
        isNew: false,
    },
  ]
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts value={{
        title: 'Featrued Product',
        desc: 'Lorem ipsum dolor sit amet consectetur,      adipisicing elit. Odit, tempore libero? Magni deleniti sint odio dolorem fugit. Libero, animi quis eaque omnis aut numquam ducimus tempore culpa! Excepturi, cumque iusto!',
        data,
      }}/>  
      <Categories/>
      <FeaturedProducts value={{
        title: 'Trending Product',
        desc: 'Lorem ipsum dolor sit amet consectetur,      adipisicing elit. Odit, tempore libero? Magni deleniti sint odio dolorem fugit. Libero, animi quis eaque omnis aut numquam ducimus tempore culpa! Excepturi, cumque iusto!',
        data,
      }}/>
      <Contact/>
    </div>
  )
}

export default Home