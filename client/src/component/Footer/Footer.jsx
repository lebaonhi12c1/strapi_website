import React from 'react'
import './footer.scss'
const Footer = () => {
  return (
    <div className='grid wide'>
        <div className="row">
            <div className="column pc-3 tablet-6 mobile-12">
                <div className="footer_item">
                    <div className="heading">
                        Categories
                    </div>
                    <div className='list'>
                        <div className="list_item">Women</div>
                        <div className="list_item">Men</div>
                        <div className="list_item">Shose</div>
                        <div className="list_item">Accessories</div>
                        <div className="list_item">New Arrials</div>
                    </div>
                </div>
            </div>
            <div className="column pc-3 tablet-6 mobile-12">
                <div className="footer_item">
                    <div className="heading">
                        Links
                    </div>
                    <div className='list'>
                        <div className="list_item">FAQ</div>
                        <div className="list_item">Page</div>
                        <div className="list_item">Stores</div>
                        <div className="list_item">Compare</div>
                        <div className="list_item">Cookies</div>
                    </div>
                </div>
            </div>
            <div className="column pc-3 tablet-6 mobile-12">
                <div className="footer_item">
                    <div className="heading">
                        About
                    </div>
                    <div className="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium, quis doloremque laboriosam id in quisquam voluptatem nobis minus excepturi, temporibus blanditiis, explicabo magni. Illo molestiae aut dolor atque veritatis.</div>
                </div>
            </div>
            <div className="column pc-3 tablet-6 mobile-12">
                <div className="footer_item">
                    <div className="heading">
                        Contact
                    </div>
                    <div className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ducimus ipsa officiis cumque nesciunt sequi reprehenderit voluptas consectetur accusamus amet. Odit est labore praesentium consequatur iusto numquam animi fuga qui.</div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="brand">
                MYCLOTHESSTORE
            </div>
            <img src="https://hoc11.vn/wp-content/uploads/2020/07/the-visa-1.png" alt="" height='50px'/>
        </div>
    </div>
  )
}

export default Footer