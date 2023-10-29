import React, { useEffect, useState } from "react";
import "./global.scss";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("/api/products/find/" + id);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className="product_container">
      <Navbar />
      <Announcement />
      <div className="product_wrapper">
        <img src={product.img} alt="" />
        <div className="product_info">
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
          <span>Rs {product.price}</span>
          <div className="filter_container">
            <div className="filter">
              <label for="color">Color</label>
              {product.color?.map((c) => (
                <select id="color" onClick={() => setColor(c)}>
                  <option value="black">{c}</option>
                </select>
              ))}
            </div>
            <div className="filter">
              <label for="size">Size</label>
              <select id="size">
                <option value="L">L</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
          </div>
          <div className="add_container">
            <div className="amount_container">
              <Remove onClick={() => handleQuantity("dec")} />
              <div className="amount">{quantity}</div>
              <Add onClick={() => handleQuantity("inc")} />
            </div>
            <button onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
