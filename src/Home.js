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
    <Product 
    id="1"
    title="Samsung Galaxy S23 (Cream,256 GB)" 
    price={1289}
    rating={4}
    image="https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/1/r/n/-original-imagmg6gyzgzzszt.jpeg?q=70"
    />
    <Product
    id="2"
    title="APPLE iPhone 14 (Starlight, 128 GB)"
    price={1300}
    rating={4}
    image="https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70"
    />
    </div>
    <div className="home_row">
    <Product 
    id="3"
    title="SAMSUNG Watch 4, 44mmSuper AMOLED bluetooth calling function & body composition tracking  (Black Strap, Free Size)" 
    price={800}
    rating={3}
    image="https://rukminim1.flixcart.com/image/832/832/l26hdow0/smartwatch/j/r/o/1-4-sm-r870nzkainu-android-samsung-yes-original-imagdhf2ahk7nvmf.jpeg?q=70"
    />
    <Product
    id="4"
    title="SAMSUNG Watch 5 40mmSuper AMOLED display LTE calling & body composition tracking  (Purple Strap, Free Size)" 
    price={1000}
    rating={2}
    image="https://rukminim1.flixcart.com/image/832/832/xif0q/smartwatch/m/g/0/-original-imagh93frzsp4arn.jpeg?q=70"
    />
    <Product
    id="5"
    title="APPLE Watch SE GPS (2nd Gen)  (Midnight Strap, 44mm)" 
    price={900}
    rating={4}
    image="https://rukminim1.flixcart.com/image/832/832/xif0q/smartwatch/y/l/e/-original-imaghxgrynxjvhkg.jpeg?q=70"
    />
    </div>
    <div className="home_row">
    <Product 
    id="6"
    title="SAMSUNG Galaxy Buds 2 Bluetooth Headset  (Graphite, True Wireless)" 
    price={230}
    rating={4}
    image="https://rukminim1.flixcart.com/image/832/832/kst9gnk0/headphone/o/l/s/galaxy-buds-2-sm-r177nzkainu-samsung-original-imag6arjrmydyyef.jpeg?q=70"
    />
    </div>
    </div>
    </div>
      
    </div>
  )
}

export default Home
