import React from 'react'
import Product from './Product'
import './Home.css'

const Home = () => {
  return (
    <div>
    <div className="home">
    <div className="home_container">
    <img src="https://m.media-amazon.com/images/I/619rl+QqjwL._SX3000_.jpg" alt='' className='home_image' />

    <div className="home_row">
    <Product />
    <Product />
    </div>
    <div className="home_row">
    <Product />
    <Product />
    <Product />
    </div>
    <div className="home_row">
    <Product />
    </div>
    </div>
    </div>
      
    </div>
  )
}

export default Home
