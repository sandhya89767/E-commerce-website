import React from "react";
import { Router } from "react-router-dom";
//rfce
import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating, info }) {
  const [{ basket }, dispatch] = useStateValue();
  const addtobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating:rating,
        info:info
      },
    });
  };
  return (
    <div className="product_class">
      <div className="product_info">
        <p>
          <strong>{title}</strong>
        </p>
        <p>{info}</p>
        <p className="product_price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>

        <div className="rating_product">
          {/*rating ka array create kiye empty value fill kiye using fill ..fr using map sabme star kiye ..rating is a number here*/}
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟 </p>
            ))}
        </div>
      </div>
      <img src={image} className="product_pic" alt="" />
      <button className="product_basket" onClick={addtobasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
