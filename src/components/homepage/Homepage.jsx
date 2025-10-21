import Navbar from "../Navbar/Navbar";
import SimpleSlider from "../showcase/Showcase";

export default function Homepage() {
  return (
    <main>
      <Navbar />
      <h1>Modern Fashion Store</h1>
      <SimpleSlider />
      <div>
        <p>Visit our Store Now!</p>
      </div>
    </main>
  );
}
