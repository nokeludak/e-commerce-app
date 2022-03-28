import React from "react";
import "./Footer.css";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  MailOutline,
  Phone,
  Room,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <h1 className="logo-footer">KENO</h1>
        <p className="desc-footer">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>

        <div className="social-container">
          <div className="social-icon" color="385999">
            <Facebook />
          </div>
          <div className="social-icon" color="E4405F">
            <Instagram />
          </div>
          <div className="social-icon" color="55ACEE">
            <Twitter />
          </div>
          <div className="social-icon" color="55ACEE">
            <Pinterest />
          </div>
        </div>
      </div>

      <div className="center-footer">
        <h3 className="h3-title"> Useful links</h3>
        <ul className="ul-element">
          <li className="li-element">Home</li>
          <li className="li-element">Cart</li>
          <li className="li-element">Man Fashion</li>
          <li className="li-element">Woman Fashion</li>
          <li className="li-element">Accessories</li>
          <li className="li-element">My Account</li>
          <li className="li-element">Order Tracking</li>
          <li className="li-element">Terms</li>
          <li className="li-element">Wish List</li>
          <li className="li-element">Wish List</li>
        </ul>
      </div>
      <div className="right-footer">
        <h3 className="h3-title">Contact</h3>
        <div className="contact-item">
          <Room style={{marginRight:"10px"}}/>
          71000 Sarajevo, Bosnia and Hercegovina
        </div>
        <div className="contact-item">
          <Phone style={{marginRight:"10px"}}/>
          +38762959069
        </div>
        <div className="contact-item">
          <MailOutline style={{marginRight:"10px"}}/>
          ksmajic996@gmail.com
        </div>
        <img
          className="slika2"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="payment"
        />
      </div>
    </div>
  );
};

export default Footer;
