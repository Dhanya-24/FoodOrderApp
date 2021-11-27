import React, { useContext } from "react";
import CartContext from "../../../../context/cart-context";
import MealForm from "./MealForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$ ${props.price.toFixed(2)}`;

  const addToCartHandler = (count) => {
    const item = {
      id: props.id,
      name: props.name,
      count: count,
      price: props.price,
    };

    cartCtx.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
