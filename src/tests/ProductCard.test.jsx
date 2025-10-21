import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "../components/store/ProductCard.jsx";

const itemDetails = {
  image: "example.com",
  title: "example title",
  price: "example price",
};

//irgendwie item inhalte mocken.
describe("Product Card Component", () => {
  it("increments the amount by 1 by clicking the + button", async () => {
    const user = userEvent.setup();
    render(<Card item={itemDetails} />);

    const button = screen.getByRole("button", { name: "+" });

    await user.click(button);
    await user.click(button);
    expect(screen.getByRole("spinbutton")).toHaveValue(2);
  });

  it("decreases the amount by 1 by clicking the - button", async () => {
    const user = userEvent.setup();
    render(<Card item={itemDetails} />);

    const buttonAdd = screen.getByRole("button", { name: "+" });
    const buttonSub = screen.getByRole("button", { name: "-" });

    await user.click(buttonAdd);
    await user.click(buttonAdd);
    await user.click(buttonSub);
    expect(screen.getByRole("spinbutton")).toHaveValue(1);
  });
  it("prevent decreasing below 0", async () => {
    const user = userEvent.setup();
    render(<Card item={itemDetails} />);

    const buttonSub = screen.getByRole("button", { name: "-" });

    await user.click(buttonSub);
    await user.click(buttonSub);
    await user.click(buttonSub);
    expect(screen.getByRole("spinbutton")).toHaveValue(0);
  });
  it("filling the input sets the new Amount", async () => {
    render(<Card item={itemDetails} />);
    const inputAmount = screen.getByRole("spinbutton", { type: "number" });

    await userEvent.type(inputAmount, "23");
    expect(screen.getByRole("spinbutton")).toHaveValue(23);
  });
  it("It should not allow letters", async () => {
    render(<Card item={itemDetails} />);
    const inputAmount = screen.getByRole("spinbutton", { type: "number" });

    await userEvent.type(inputAmount, "esel");
    expect(screen.getByRole("spinbutton")).toHaveValue(null);
  });
});
