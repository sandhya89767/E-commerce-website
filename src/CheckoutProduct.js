import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, title, image, price, rating, info }) {
    const[{basket},dispatch]=useStateValue();
  function RemoveFromBasket() {
      dispatch({
          type:"REMOVE_FROM_BASKET",
          id:id,
      });
  }
  return (
      
    <div className="checkoutproduct">
      <img className="checkout_product_image" src={image} alt="" />
      <div className="checkout_product_info">
        <p className="checkout_product_title">{title}</p>
        <p className="checkout_product_price">
          <small>Rs</small>
          <strong>{price}</strong>{" "}
        </p>
        <div className="checkout_product_rating">
          {/*rating ka array create kiye empty value fill kiye using fill ..fr using map sabme star kiye ..rating is a number here*/}
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟 </p>
            ))}
        </div>
        <button
          onClick={RemoveFromBasket}
          className="checkout_product_Remove_Basket"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
