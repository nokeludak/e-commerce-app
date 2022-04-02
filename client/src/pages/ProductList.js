import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import "./ProductList.css"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"


const ProductList = () => {
  const location = useLocation()
  const cat = (location.pathname.split("/")[2])
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")




  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLoverCase()
    })
  }

  
  return (
    <div className='productlist-container'>
        <Announcement />
        <Navbar />
        <h1 className='h1-dresses'>Dresses</h1>
        <div className='filter-container'>
        <div className='filter'>
          <span className='filtertext'>Filter Product:</span>
        <select className='select' name="color" onChange={handleFilters}>
            <option disabled >Color</option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>green</option>
            <option>yellow</option>
        </select>
        <select className='select' name="size" onChange={handleFilters}>
        <option disabled >Size</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
        </select>
            </div>
        <div className='filter'><span className='filtertext'>Sort Product:</span>
        <select className='select' onChange={e=>setSort(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="asc">Price (asc)</option>
        <option value="desc">Price (desc)</option>
        </select>
        </div>
        </div>

        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter />
        <Footer />
        </div>
        
  )
}


export default ProductList;
