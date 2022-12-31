import React from 'react'
import {Link} from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './navbar.scss'
const Navbar = () => {
  return (
        <div className="container">
            <div className="grid wide navbar">
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
                <div className="nav_right_item relative">
                    <ShoppingCartOutlinedIcon/>
                    <div className="cart_count">0</div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Navbar