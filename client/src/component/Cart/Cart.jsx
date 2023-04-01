import React, { useEffect, useState } from 'react';
import './cart.scss'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { v4 as uuidv4 } from 'uuid'

function Cart(props) {
    const carts =[
        {
            id: 1,
            title: "Long Sleeve Graphic T-shirt",
            img1: 'https://velpa.pl/pol_pm_SWETER-ARMANI-EXCHANGE-52215_5.jpg',
            img2: 'https://th.bing.com/th/id/OIP.gBesKYM1-tO_fZmTbBljowHaLH?pid=ImgDet&w=1333&h=2000&rs=1',
            old_price: 19,
            new_price: 15,
            isNew: true,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptates ducimus quam eum in. Modi, cumque. Saepe eius aspernatur explicabo est, exercitationem quam officia non mollitia culpa labore, blanditiis officiis?'
        },
        {
            id: 2,
            title: "Coat",
            img1: 'https://th.bing.com/th/id/OIP.LRiWjgnHkJdWOfU9jrpu6AHaK3?pid=ImgDet&w=613&h=900&rs=1',
            img2: 'https://th.bing.com/th/id/OIP.-wzuaHzHGOSakV7DTMDpzgHaK3?pid=ImgDet&w=750&h=1101&rs=1',
            old_price: 40,
            new_price: 25,
            isNew: true,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptates ducimus quam eum in. Modi, cumque. Saepe eius aspernatur explicabo est, exercitationem quam officia non mollitia culpa labore, blanditiis officiis?'
        },
        {
            id: 3,
            title: "Skirt",
            img1: 'https://th.bing.com/th/id/OIP.d5uf3Fd6huNzx552RJjcFwHaKW?pid=ImgDet&rs=1',
            img2: 'https://celebmafia.com/wp-content/uploads/2016/06/karlie-kloss-on-set-of-a-vogue-photoshoot-in-new-york-city-6-21-2016-1.jpg',
            old_price: 55,
            new_price: 30,
            isNew: false,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptates ducimus quam eum in. Modi, cumque. Saepe eius aspernatur explicabo est, exercitationem quam officia non mollitia culpa labore, blanditiis officiis?'
        },
        {
            id: 4,
            title: "Suit",
            img1: 'https://th.bing.com/th/id/R.f7fd964076d3981c95a57cd13fb923c2?rik=QxWW8eEhoNDjgA&pid=ImgRaw&r=0',
            img2: 'https://th.bing.com/th/id/R.85242f10e53de10b68cc08de2f486a11?rik=YypBG6o3e4IFBg&pid=ImgRaw&r=0',
            old_price: 30,
            new_price: 28,
            isNew: false,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptates ducimus quam eum in. Modi, cumque. Saepe eius aspernatur explicabo est, exercitationem quam officia non mollitia culpa labore, blanditiis officiis?'
        },
    ]
    const [reponsive,setReponsive] = useState(window.innerWidth < 700 ? true: false )
    useEffect(()=>{
        const handleReponsive = ()=>{
            window.innerWidth < 700 ? setReponsive(true):setReponsive(false)
        }
        window.addEventListener('resize',handleReponsive)
        return ()=>window.removeEventListener('resize',handleReponsive)
    },[])
    return (
        <div className='cart' ref={props?.nodeCart} onClick={e=>e.stopPropagation()} style={{
            width: `${reponsive ? '350px': '500px'}`
        }}>
            <div className="cart_heading">
                Product in your cart
            </div>
            <div className="cart_list">
                {carts.map(item=>{
                    return <div className="cart_item" key={uuidv4()}>
                        <img src={item.img1} alt="" />
                        <div className='item_info'>
                            <div className="item_heading">
                                {item.title}
                            </div>
                            <div className='item_desc'>
                                {item.desc}
                            </div>
                            <div className='item_price'>
                                <span>1</span>
                                <span>x</span>
                                <span>{item.new_price.toFixed(2)}$</span>
                            </div>
                        </div>
                        <div className="btn_remove_item">
                            <DeleteOutlineOutlinedIcon className='icon'/>
                        </div>
                    </div>
                })}
            </div>
            <div className="sub_total">
                <span className='head'>subtotal</span>
                <span className='total'>{carts.reduce((total,item)=>{
                    return total + item.new_price
                },0).toFixed(2)}$</span>
            </div>
            <div className='btn_checkout' style={{width: `${reponsive && '100%'}`}}>proceed to checkouut</div>
            <div className="reset_cart">Reset cart</div>
        </div>
    );
}

export default Cart;