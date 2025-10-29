import Navbar from "../Navbar/Navbar";
import SimpleSlider from "../showcase/Showcase";

export default function Homepage({ cartItems }) {
  return (
    <main>
      <Navbar cartItems={cartItems} />
      <h1>Modern Fashion Store</h1>
      <SimpleSlider />
      <div>
        <p>Visit our Store Now!</p>
      </div>
    </main>
  );
}
