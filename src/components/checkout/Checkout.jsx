import Navbar from "../Navbar/Navbar";
import classes from "./Checkout.module.css";

export default function Checkout({ cartItems, setCartItems }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deleteItem = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  return (
    <>
      <Navbar />
      <div className={classes.checkoutTable}>
        <h2>Checkout</h2>
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sum</th>
              <th></th>
            </tr>
            {cartItems?.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price.toFixed(2)} €</td>
                <td>{item.quantity}</td>
                <td>{(item.quantity * item.price).toFixed(2)} €</td>
                <td>
                  <button onClick={() => deleteItem(item.id)}>x</button>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td>Total:</td>
              <td> {total.toFixed(2)} €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
