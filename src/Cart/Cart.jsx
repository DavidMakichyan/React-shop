import React from "react";
import classes from "./Cart.module.scss"; // Reusing HomePage styles

function Cart() {
  const CARTITEMS = JSON.parse(localStorage.getItem("products")) || [];

  return (
    <div className={classes["div"]}>
      {CARTITEMS.length > 0 ? (
        CARTITEMS.map((el, i) => (
          <div key={i} className={classes["Home"]}>
            <p className={classes["Category"]}>{el.category}</p>
            <img className={classes["img"]} src={el.image} alt={el.title} />
            <p className={classes["p-one"]}>{`${el.title.substring(0, 28)}...`}</p>
            <p className={classes["p-two"]}>{`${el.description.substring(0, 100)}...`}</p>
            <div className={classes["price"]}>Price: ${el.price}</div>
            <button
              className={classes["button"]}
              onClick={() => {
                const updatedCart = CARTITEMS.filter((item, index) => index !== i);
                localStorage.setItem("products", JSON.stringify(updatedCart));
                window.location.reload();
              }}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className={classes["empty-cart-message"]}>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
