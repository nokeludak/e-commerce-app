import React from 'react'
import "./ProductList.css"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"


const ProductList = () => {
  return (
    <div className='productlist-container'>
        <Announcement />
        <Navbar />
        <h1 className='h1-dresses'>Dresses</h1>
        <div className='filter-container'>
        <div className='filter'>
          <span className='filtertext'>Filter Product:</span>
        <select className='select'>
            <option disabled selected>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
            <option>Yellow</option>
        </select>
        <select className='select'>
        <option disabled selected>Size</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
        </select>
            </div>
        <div className='filter'><span className='filtertext'>Sort Product:</span>
        <select className='select'>
        <option selected>Newest</option>
        <option>Price (asc)</option>
        <option>Price (desc)</option>
        </select>
        </div>
        </div>

        <Products />
        <Newsletter />
        <Footer />
        </div>
        
  )
}


export default ProductList;
