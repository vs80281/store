import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

const loadscript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const Cart = ({ items, total, currency, removeFromCart }) => {

  const displayRazorpay = async (amount) => {
    const res = await loadscript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("you are offline....failed to load ");
      return;
    }
    const options = {
      key: "rzp_test_QGpDxNnlAiHo8U",
      currency: "INR",
      amount:amount*100,
      

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("payment  successful")
      },
      prefill:{
        name:"vinay"
      }
    };
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  };

  return (
    <div>
      <h3>Cart</h3>

      <div className="cart">
        <div className="panel panel-default">
          <div className="panel-body">
            {items.length > 0 && (
              <div className="cart__body">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onClick={() => removeFromCart(item.id)}
                  />
                ))}
              </div>
            )}
            {items.length === 0 && (
              <div className="alert alert-info">Cart is empty</div>
            )}
            <div className="cart__total">
              Total: {total} {currency}
            </div>
          </div>
        </div>
      </div>
      <Button onClick={() => displayRazorpay(total)}>proceed to pay</Button>
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  currency: PropTypes.string,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
