import React from "react";
import "./main.scss";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="prod_container">
      <div className="circle" />
      <img src={item.img} alt="" />
      <div className="prod_info">
        <div className="prod_icon">
          <ShoppingCartOutlined />
        </div>
        <div className="prod_icon">
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </div>
        <div className="prod_icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
