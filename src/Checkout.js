import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js"
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_info">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/engagement/newsletter/2018/Mar18/640X250.jpg"
          alt="something"
        />
        {basket?.length === 0 ? (
          <div className="basket_msg">
            <h2> Sorry Your Basket is empty!!!</h2>
            <img
              className="empty_i"
              src="https://static.onecms.io/wp-content/uploads/sites/20/2018/05/21042210_264995290674140_8840525631411191808_n.jpg"
              alt=""
            />
          </div>
        ) : (
          <div className="basket_msg">
            <h1>Your shopping Basket </h1>
            {/*list of products*/}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
        ;
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal/>
        </div>
      )}
    </div>
  );
}

export default Checkout;
