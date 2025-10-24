import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkout from "../components/checkout/Checkout.jsx";
import testdata from "./testdata.js";

describe("Checkout component", () => {
  it("renders an item correctly in the table", () => {
    const cartItems = [
      {
        ...testdata[0],
        quantity: 2,
      },
    ];

    render(<Checkout cartItems={cartItems} setCartItems={() => {}} />);

    expect(
      screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    ).toBeInTheDocument();

    expect(screen.getByText("109.95")).toBeInTheDocument();

    expect(screen.getByText("219.9")).toBeInTheDocument();

    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(2);
  });
});
