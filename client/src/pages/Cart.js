import React from "react";
import "./Cart.css";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  return (
    <div className="cart-container">
      <Navbar />
      <Announcement />
      <div className="cart-wrapper">
        <h1 className="cart-h1">YOUR BAG</h1>
        <div className="cart-top">
          <button className="top-button">CONTINUE SHOPPING</button>
          <div className="top-texts">
            <span className="span-cart">Shopping Bag(2)</span>
            <span className="span-cart">Your Wishlist</span>
          </div>
          <button type="filled" className="top-button">
            CHECKOUT
          </button>
        </div>
        <div className="bottom-cart">
          <div className="info-cart">
            <div className="product">
              <div className="product-details">
                <img
                  alt="shoes"
                  className="product-img"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                />
                <div className="details">
                  <span className="product-name">
                    <b>Product:</b>KENAN's SHOES
                  </span>
                  <span className="product-id">
                    <b>ID:</b>412124124122
                  </span>
                  <div className="product-color" />
                  <span className="product-name">
                    <b>Size:</b>37.5
                  </span>
                </div>
              </div>
              <div className="price-details">
                <div className="product-amount">
                  <AddIcon />
                  <div className="product-amount2">2</div>
                  <RemoveIcon />
                </div>
                <div className="product-price">$ 30</div>
              </div>
            </div>
            <hr className="hr" />
            <div className="product">
              <div className="product-details">
                <img
                  className="product-img"
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  alt="tshirt"
                />
                <div className="details">
                  <span className="product-name">
                    <b>Product:</b>KENAN T-SHIRT
                  </span>
                  <span className="product-id">
                    <b>ID:</b>41241267
                  </span>
                  <div className="product-color-gray" />
                  <span className="product-name">
                    <b>Size:</b>L
                  </span>
                </div>
              </div>
              <div className="price-details">
                <div className="product-amount">
                  <AddIcon />
                  <div className="product-amount2">2</div>
                  <RemoveIcon />
                </div>
                <div className="product-price">$ 30</div>
              </div>
            </div>
          </div>
          <div className="summary-cart">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <div className="summary-item">
              <span className="summary-span">Subtotal</span>
              <span className="summary-span">$ 80</span>
            </div>
            <div className="summary-item">
              <span className="summary-span">Estimated Shipping</span>
              <span className="summary-span">$ 5.90</span>
            </div>
            <div className="summary-item">
              <span className="summary-span">Shipping Discount</span>
              <span className="summary-span">$ -5.90</span>
            </div>
            <div className="summary-item2">
              <span className="summary-span-total">Total</span>
              <span className="summary-span">$ 80</span>
            </div>
            <button className="summary-button">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
