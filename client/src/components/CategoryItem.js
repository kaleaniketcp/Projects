import React from "react";
import "./main.scss";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="item_container">
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="" />
        <div className="item_info">
          <div className="item_title">{item.title}</div>
          <button>Shop Now</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
