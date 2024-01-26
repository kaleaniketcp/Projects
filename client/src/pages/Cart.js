import React, { useEffect, useState } from "react";
import "./global.scss";
import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userRequest } from "../requestMethods";
import Product from "./Product";
import Footer from "../components/Footer";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  // const handleQuantity = (type) => {
  //   if (type === "dec") {
  //     quantity > 1 && setQuantity(quantity - 1);
  //   } else {
  //     setQuantity(quantity + 1);
  //   }
  // };
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="cart_wrapper">
        <div className="title">Your Bag</div>
        <div className="cart_top">
          <Link to="/">
            <div className="cart_topbutton">Continue Shopping</div>
          </Link>
          <div>
            <div className="cart_toptext">Shopping Bag({quantity})</div>
            <div className="cart_toptext">Your Wishlist(0)</div>
          </div>
          <div className="cart_topbutton">Checkout Now</div>
        </div>
        <div className="cart_bottom">
          <div className="cart_info">
            {cart.products.map((product) => (
              <div className="cart_product">
                <div className="cart_proddetail">
                  <img src={product.img} alt="" />
                  <div className="details">
                    <span>
                      <b>Product:</b> {product.title}
                    </span>
                    <span>
                      <b>ID:</b> {product._id}
                    </span>
                    <span>
                      <b>Size:</b> {product.size}
                    </span>
                  </div>
                </div>
                <div className="cart_pricedetail">
                  <div className="cart_prodamountcont">
                    {/* <Remove onClick={() => handleQuantity("dec")} /> */}
                    <Remove />
                    <div className="cart_prodamount">{product.quantity}</div>
                    {/* <div className="cart_prodamount">{quantity}</div> */}
                    {/* <Add onClick={() => handleQuantity("inc")} /> */}
                    <Add />
                  </div>
                  <div className="cart_productprice">
                    Rs {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart_summary">
            <div className="cart_summarytitle">Order Summary</div>
            <div className="cart_summaryitem">
              <span>Subtotal</span>
              <span>Rs {cart.total}</span>
            </div>
            <div className="cart_summaryitem">
              <span>Estimated Shipping</span>
              <span>Rs 50</span>
            </div>
            <div className="cart_summaryitem">
              <span>Shipping Discount</span>
              <span>Rs -50</span>
            </div>
            <div className="cart_summaryitem">
              <span>Total</span>
              <span>Rs {cart.total}</span>
            </div>
            <StripeCheckout
              name="John Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is Rs ${cart.total}`}
              amount={cart.total}
              token={onToken}
              stripeKey={process.env.KEY}
            >
              <button>Checkout Now</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
