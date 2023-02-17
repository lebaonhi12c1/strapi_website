import React, { useState } from 'react'
import './product.scss'
import Quanlity from '../../component/quanlity/Quanlity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
const Product = () => {
  const product = {
    id: 1,
    title: "Long Sleeve Graphic T-shirt",
    img1: 'https://velpa.pl/pol_pm_SWETER-ARMANI-EXCHANGE-52215_5.jpg',
    img2: 'https://th.bing.com/th/id/OIP.gBesKYM1-tO_fZmTbBljowHaLH?pid=ImgDet&w=1333&h=2000&rs=1',
    old_price: 19,
    new_price: 15,
    isNew: true,
  }
  const [image_seleted, setimage_seleted] = useState(product.img1)
  const handleselectimage = e=>{
    setimage_seleted(e.target.currentSrc)
  }
  return (
    <div className='margin_center'>
      <div className="grid wide">
        <div className="row">
          <div className="column mobile-12 table-6 pc-6">
              <div className="row">
                <div className="column mobile-12 tablet-12 pc-3">
                  <div className='thumb_img'>
                    <img src={product.img1} className={`${image_seleted === product.img1 && 'active'}`} alt="" onClick={e=>handleselectimage(e)}/>
                    <img src={product.img2} className={`${image_seleted === product.img2 && 'active'}`} alt="" onClick={e=>handleselectimage(e)}/>
                  </div>
                </div>
                <div className="column mobile-12 tablet-12 pc-9">
                  <div className="main_img">
                    <img src={image_seleted} alt="" />
                  </div>
                </div>
              </div>
          </div>
          <div className="column mobile-12 table-6 pc-6">
            <div className='info'>
              <div className="info_heading">
                {product.title}
              </div>
              <div className="prices">
                {product.new_price}$
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aut non. Autem, praesentium magnam expedita eum eos exercitationem, quasi velit asperiores nemo nisi ad voluptatem repudiandae quos tempore dicta enim?
              </div>
              <Quanlity/>
              <div className="btn_add_to_cart">
                <ShoppingCartOutlinedIcon className='icon'/>
                <span>add to cart</span>
              </div>
              <div className="compare_wishlist">
                <div className='item'>
                  <FavoriteBorderOutlinedIcon className='icon'/>
                  <span>add to do wish list</span>
                </div>
                <div className='item'>
                  <ScaleOutlinedIcon className='icon'/>
                  <span>add to do compare</span>
                </div>
              </div>
              <div className="sub_one">
                <div className='sub_item'>
                  <span>
                    Vendor:
                  </span>
                  <span>
                      content
                  </span>
                </div>
                <div className='sub_item'>
                  <span>
                    Product type:
                  </span>
                  <span>
                    content
                  </span>
                </div>
                <div className='sub_item'>
                  <span>
                    Tags:
                  </span>
                  <span>
                    content
                  </span>
                </div>
              </div>
              <hr />
              <div className="sub_two">
                <div className='item'>description</div>
                <div className='item'>additional information</div>
                <div className='item'>faq</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product