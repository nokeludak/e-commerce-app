import React from 'react'
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material"
  import "./Product.css"



const Product = ({item}) => {
  return (
    <div className='product-container'>
        <div className='circle'></div>
        <img className='product-image' src={item.img} alt="product"/>
        <div className='info-container-product'>
            <div className='icon-container'>
                <ShoppingCartOutlined />
            </div>
            <div className='icon-container'>
                <SearchOutlined />
            </div>
            <div className='icon-container'>
                <FavoriteBorderOutlined />
            </div>
        </div>
        </div>
  )
}


export default Product;