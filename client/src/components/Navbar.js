import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <span className="language">EN</span>
          <div className="searchContainer">
            <input placeholder="Search" className="input"></input>
            <SearchIcon
              style={{ color: "gray", fontSize: 15 }}
              className="searchIcon"
            />
          </div>
        </div>
        <div className="center">
          
            <h1 className="navbar-title">KENO</h1>
          
        </div>
        <div className="right">
          <div className="menuItem">REGISTER</div>
          <div className="menuItem">SIGN IN</div>
          <div className="menuItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
