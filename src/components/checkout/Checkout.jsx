import Navbar from "../Navbar/Navbar";
import classes from "./Checkout.module.css";
import { useState, useMemo } from "react";

export default function Checkout({ cartItems, setCartItems }) {
  return (
    <>
      <Navbar />
      <div className={classes.checkoutTable}>
        <h2>Checkout</h2>
        <table>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sum</th>
            <th></th>
          </tr>
          {cartItems?.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.price}</td>
              <td>
                <button onClick={setCartItems}>x</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
