import React from "react";
import "./main.scss";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="language">EN</div>
          <div className="searchContainer">
            <input placeholder="Search"></input>
            <Search style={{ color: "grey", fontsize: 16 }} />
          </div>
        </div>
        <div className="center">
          <div className="logo">John Store</div>
        </div>
        <div className="right">
          <div className="menuItem">Register</div>
          <div className="menuItem">Sign In</div>
          <Link to="/cart">
            <div className="menuItem">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
