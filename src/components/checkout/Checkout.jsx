import Navbar from "../Navbar/Navbar";

export default function Checkout({ cartItems, setCartItems }) {
  return (
    <>
      <Navbar />
      <div>
        <h2>Checkout</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))}
      </div>
    </>
  );
}
