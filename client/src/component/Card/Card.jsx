import React from 'react'
import './card.scss'
import {Link} from 'react-router-dom'
const Card = ({item}) => {
  return (
        <div className="column pc-3 tablet-6 mobile-12">
                <Link to={`/product/${item.id}`} className='featured_item'>
                    <div className="featured_img">
                        <img src={item.img1} alt="" className='main_img' />
                        <img src={item.img2} alt="" className='second_img' />
                    </div>
                    <div className="featured_title">
                        {item.title}
                    </div>
                    <div className="featured_price">
                        <div className="featured_price_old">
                            {item.old_price}
                        </div>
                        <div className="featured_price_new">
                            {item.new_price}
                        </div>
                    </div>
                    {item.isNew && (<div className="new_section">
                    New season
                    </div>)}
                </Link>
        </div>
  )
}

export default Card