import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar({ cartItems }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Store">Store</Link>
        </li>
        <li>
          <Link to="/Checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
}
