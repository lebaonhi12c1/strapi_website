import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './navbar.scss'
import Cart from '../Cart/Cart';
import { useClickOutSide } from '../../globalfunction';
import ViewListIcon from '@mui/icons-material/ViewList';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const Navbar = () => {
  const [reponsiveNavbar,setReponsiveNavbar] = useState(window.innerWidth<1400?true:false)
  const [openlist,setopenlist] = useState(false)
  const [opencart, setopencart] = useState(false)
  const [opencartmobile, setopencartmobile] = useState(false)
  const nodeCart = useClickOutSide(()=>setopencart(false))
  useEffect(()=>{
    const handleToggleReponsive = ()=>{
      window.innerWidth < 1400 ? setReponsiveNavbar(true): setReponsiveNavbar(false)
    }
    window.addEventListener('resize',handleToggleReponsive)
    return ()=>window.removeEventListener('resize',handleToggleReponsive)
  },[])
  const handleOpenCartMobile = ()=>{
    setopencartmobile(true)
    setopenlist(false)
  }
  return (
        <div className="container">
            {reponsiveNavbar ?(
                <div className='grid wide'>
                    <div className='nav-mobile'>
                        <Link to={'/'} className='logo'>MYCLOTHESSTORE</Link>
                        <div className='main'>
                            <div className='language-box'>
                                <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" width={30} alt="language" title='language' />
                                <KeyboardArrowDownIcon/>
                            </div>
                            <div className="usd-box">
                                <span>usd</span>
                                <KeyboardArrowDownIcon/>
                            </div>
                            <div className='dropdown'>
                                {openlist ? <HighlightOffIcon className='icon' onClick={()=>setopenlist(false)}/> : <ViewListIcon  className='icon' onClick={()=>setopenlist(true)}/> }
                                <div className=' list-container' style={{
                                    transform: `${openlist ?'translateX(-100px)':'translateX(300px)'}`
                                }}>
                                    <div className='category box'>
                                        <Link to={'/products/men'}>Men</Link>
                                        <Link to={'/products/women'}>Women</Link>
                                        <Link to={'/products/chldrend'}>Chldrend</Link>
                                        <Link to={'/products/accessories'}>Accessories</Link>
                                        <Link to={'/products/men'}>Men</Link>
                                    </div>
                                    <hr />
                                    <div className='page box'>
                                        <Link to={'/'}>Homepage</Link>
                                        <Link to={'/about'}>About</Link>
                                        <Link to={'/contact'}>Contact</Link>
                                        <Link to={'/store'}>Store</Link>
                                        <div className='controls'>
                                            <SearchIcon/>
                                            <span>Search your item</span>
                                        </div>
                                        <div className='controls'>
                                            <PersonOutlineOutlinedIcon/>
                                            <span>Login/Register</span>
                                        </div>
                                        <div className='controls'>
                                            <FavoriteBorderOutlinedIcon/>
                                            <span>Whilelist</span>
                                        </div>
                                        <div className='controls' onClick={handleOpenCartMobile}>
                                            <ShoppingCartOutlinedIcon/>
                                            <span>Your cart</span>
                                            <div className='count'>
                                                4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            ):( <div className="grid wide navbar">
                    <div className="nav_left">
                        <div className='nav_left_lag'>
                            <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="" width='30px'/>
                            <div>
                                <KeyboardArrowDownIcon/>
                            </div>
                        </div>
                        <div className='nav_left_copper'>       
                            <div>USD</div>
                            <div>
                                <KeyboardArrowDownIcon/>
                            </div>
                        </div>
                        <div className="nav_left_item"><Link  className='link' to='/products/1'>Men</Link></div>
                        <div className="nav_left_item"><Link  className='link' to='/products/2'>Women</Link></div>
                        <div className="nav_left_item"><Link  className='link' to='/products/3'>Childrend</Link></div>
                        <div className="nav_left_item"><Link  className='link' to='/products/4'>Accessories</Link></div>
                    </div>
                    <div className="nav_center"><Link  className='link' to='/'>MYCLOTHESSTORE</Link></div>
                    <div className="nav_right">
                        <div className="nav_right_item"><Link  className='link' to='/'>Homepage</Link></div>
                        <div className="nav_right_item"><Link  className='link' to='/about'>About</Link></div>
                        <div className="nav_right_item"><Link  className='link' to='/contact'>Contact</Link></div>
                        <div className="nav_right_item"><Link  className='link' to='/stores'>Stores</Link></div>
                        <div className="nav_right_item"><SearchIcon/></div>
                        <div className="nav_right_item"><PersonOutlineOutlinedIcon/></div>
                        <div className="nav_right_item"><FavoriteBorderOutlinedIcon/></div>
                        <div className="nav_right_item relative" onClick={e=>{
                            e.stopPropagation()
                            setopencart(!opencart)
                        }}>
                            <ShoppingCartOutlinedIcon/>
                            <div className="cart_count">4</div>
                            {opencart && <Cart nodeCart={nodeCart}/>}
                        </div>
                    </div>
            </div>)}
           
            
            {opencartmobile && (
                <div className="cart-model">
                    <div className='cart-box'>
                        <HighlightOffIcon className='icon' onClick={()=>setopencartmobile(false)}/>
                        <Cart/>
                    </div>
                </div>
            )}
        </div>
  )
}

export default Navbar