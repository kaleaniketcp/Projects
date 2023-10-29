import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const KEY =
  "pk_test_51MJHu4SIgIegoBLZpueIF5lpFeWuYFjy32BhQIrZYhhRj2Rd1tn5gN9FvtdBbe4KDj6UwgzGxDGZYvLlSTu6vmZC00npRbJH0J";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 100000,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err.res.data);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div>
      <StripeCheckout
        name="John Shop"
        billingAddress
        shippingAddress
        description="Your Total is INR 1000."
        amount={100000}
        token={onToken}
        stripeKey={KEY}
      >
        <button>Pay</button>
      </StripeCheckout>
    </div>
  );
};
export default Pay;
