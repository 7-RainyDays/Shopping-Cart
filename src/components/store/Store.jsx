import Navbar from "../Navbar/Navbar";
import ProductGrid from "./ProductGrid";

export default function Store({ cartItems, setCartItems }) {
  return (
    <>
      <Navbar cartItems={cartItems} />
      <p>This is the store page</p>
      <ProductGrid setCartItems={setCartItems} />
    </>
  );
}
