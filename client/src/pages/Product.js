import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import "./Product.css"
import { Add, Remove } from "@mui/icons-material";


const Product = () => {
  return (
  <div className="product-container2">
      <Announcement />
      <Navbar />
      <div className="product-wrapper">
        <div className="image-container3">
            <img className="slika3" alt="slika" src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
        </div>
        <div className="info-container5">
            <h1 className="title5">Denim Jumpsuit</h1>
            <p className="desc-product"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.</p>
            <span className="price">20$</span>
            <div className="filter-container6">
                <div className="filter2">
                <span className="span-filter">Color:</span>
                <div className="color-black" />
                <div className="color-darkblue"/>
                <div className="color-gray" />
                </div>
                <div className="filter2">
                <span className="span-filter">Size:</span>
                <select className="filter-size">
                    <option className="size-option">XS</option>
                    <option className="size-option">S</option>
                    <option className="size-option">M</option>
                    <option className="size-option">L</option>
                    <option className="size-option">XL</option>
                </select>
                </div>
            </div>
            <div className="add-container">
                <div className="amount-container">
                <Remove />
                <span className="span-amount">1</span>
                <Add />
                </div>
                <button className="cart-button">ADD TO CART</button>
            </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
      </div>
  )};

export default Product;
