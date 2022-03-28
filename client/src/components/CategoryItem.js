import React from 'react'
import "./CategoryItem.css"




const CategoryItem = ({item}) => {
  return (
    <div className='cat-item-container'>
        <img className="image-container1" src={item.img} alt="slika"/>
        <div className='info-container1'>
            <h1 className='title-h1'>{item.title}</h1>
            <button className='button-shop'>SHOP NOW</button>
        </div>
        </div>
  )
}


export default CategoryItem;
