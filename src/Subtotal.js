import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <h1>SubtotaL</h1>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items):<strong></strong>
              {`${value}`}
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
             This order contains gifts
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"Rs"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
