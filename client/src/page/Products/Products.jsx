import React, { useState } from 'react'
import Card from '../../component/Card/Card'
import './products.scss'
import { v4 as uuidv4 } from 'uuid';
const Products = () => {
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
  const [priceRange, setpriceRange] = useState(450)
  const handldeSetRange = e =>{
    setpriceRange(e.target.value)
  }
  console.log(priceRange)
  return (
    <div className='grid wide'>
      <div className='margin_center'>
        <div className='row sub'>
          <div className='col mobile-0 tablet-3 pc-3'>
            <div className='sidebar'>
              <div className='control'>
                <div className='control_heading'>Product Categories</div>
                <div>
                  <div  className='control_item'>
                    <input type="checkbox" id='hat_check' className='hat_check' />
                    <label htmlFor="hat_check">Hat</label>
                  </div>
                  <div className='control_item'>
                    <input type="checkbox" id='tshirt_check' className='tshirt_check' />
                    <label htmlFor="tshirt_check">Tshirt</label>
                  </div>
                </div>
              </div>
              <div className='control'>
                <div className='control_heading'>Filter by prices</div>
                <div className='control_item'>
                  <span>0</span>
                  <input type="range" onInput={e=>handldeSetRange(e)} min={0} max={1000} value={priceRange} />
                  <span>{priceRange}</span>
                </div>
              </div>
              <div className='control'>
                <div className='control_heading'>Sort by</div>
                <div>
                  <div className='control_item'>
                    <input type="radio" name='prices_filter' />
                    <label htmlFor="">Price (Lowerst frist)</label>
                  </div>
                  <div className='control_item'>
                    <input type="radio"name='prices_filter' />
                    <label htmlFor="">Price (Highest frist)</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col mobile-12 tablet-9 pc-19">
            <div className='filter'>
              <div className="filter_banner">
                <img src="https://previews.123rf.com/images/goodstudio/goodstudio1909/goodstudio190900067/130218841-banner-template-for-fashion-show-with-top-models-wearing-trendy-seasonal-clothes-walking-along-runwa.jpg" alt=""className='img' />
              </div>
              <div>
                {data.map((item)=>{
                  return <Card item={item} key={uuidv4()}/>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products