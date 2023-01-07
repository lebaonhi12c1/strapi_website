import React from 'react'
import Card from '../Card/Card'
import './featuredProducts.scss'
const FeaturedProducts = ({value}) => {
  const {title,desc,data} = value
  return (
    <div className='grid wide'>
        <div className="row heading">
            <div className="column pc-5 tablet-5 mobile-12">
                <div className="heading_title">
                    {title}
                </div>
            </div>
            <div className="column pc-7 tablet-7 mobile-12">
            <div className='heading_sub_title'>{desc}</div>
        </div>
            </div>
        <div className="row">
            {data.map((item)=>{
                return <Card item={item} key={item.id}/>
            })}
        </div>
    </div>
  )
}

export default FeaturedProducts