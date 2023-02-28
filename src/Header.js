import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
    <Link to="/" style={{textDecoration:"none"}}>
    <div className="header_logo">
    <StorefrontIcon className="header_logo_img" fontSize="large"/>
    <h2 className="header_logo_title">Ar Shopee</h2>


    </div>
    </Link>

    <div className="header_search">
    <input type="text" className='header_search_input' />
    <SearchIcon className="header_search_icon" />
    </div>

    <div className="header_nav">
    <div className="nav_item">
    <span className="nav_itemlineone">
    Hello Guest
    </span>
    <span className="nav_itellinetwo">
    Sign In
    </span>

    </div>
    <div className="nav_item">
    <span className="nav_itemlineone">
    Your
    </span>
    <span className="nav_itellinetwo">
    Shop
    </span>
    </div>
    <Link to="/checkout" style={{textDecoration: "none"}}>
    <div className="nav_item">
    <span className="nav_itembasket">
    <ShoppingBasketIcon />
    </span>
    <span className="nav_itellinetwo nav_basketcount">
    0
    </span>
    </div>
    </Link>
    
    </div>

      
    </div>
  )
}

export default Header
