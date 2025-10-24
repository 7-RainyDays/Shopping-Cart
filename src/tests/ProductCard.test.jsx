import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/store/ProductCard.jsx";
import testdata from "./testdata.js";

describe("ProductCard Component", () => {
  it("increments the amount by 1 by clicking the + button", async () => {
    const user = userEvent.setup();
    render(<ProductCard item={testdata[0]} />);

    const button = screen.getByRole("button", { name: "+" });

    await user.click(button);
    await user.click(button);
    expect(screen.getByRole("spinbutton")).toHaveValue(2);
  });

  it("decreases the amount by 1 by clicking the - button", async () => {
    const user = userEvent.setup();
    render(<ProductCard item={testdata[0]} />);

    const buttonAdd = screen.getByRole("button", { name: "+" });
    const buttonSub = screen.getByRole("button", { name: "-" });

    await user.click(buttonAdd);
    await user.click(buttonAdd);
    await user.click(buttonSub);
    expect(screen.getByRole("spinbutton")).toHaveValue(1);
  });
  it("prevent decreasing below 0", async () => {
    const user = userEvent.setup();
    render(<ProductCard item={testdata[0]} />);

    const buttonSub = screen.getByRole("button", { name: "-" });

    await user.click(buttonSub);
    await user.click(buttonSub);
    await user.click(buttonSub);
    expect(screen.getByRole("spinbutton")).toHaveValue(0);
  });
  it("filling the input sets the new Amount", async () => {
    render(<ProductCard item={testdata[0]} />);
    const inputAmount = screen.getByRole("spinbutton", { type: "number" });

    await userEvent.type(inputAmount, "23");
    expect(screen.getByRole("spinbutton")).toHaveValue(23);
  });
  it("It should not allow letters", async () => {
    render(<ProductCard item={testdata[0]} />);
    const inputAmount = screen.getByRole("spinbutton", { type: "number" });

    await userEvent.type(inputAmount, "esel");
    expect(screen.getByRole("spinbutton")).toHaveValue(null);
  });
});
