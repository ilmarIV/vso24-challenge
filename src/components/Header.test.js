import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import CartContext from "../store/CartContext";


test("displays correct number of items in the cart", () => {
  const mockGetTotalItems = jest.fn(() => 5);

  render(
    <CartContext.Provider value={{ getTotalItems: mockGetTotalItems }}>
      <Header onShowCart={() => {}} />
    </CartContext.Provider>
  );

  const cartButton = screen.getByRole("button", { name: /cart \(5\)/i });
  expect(cartButton).toBeInTheDocument();
});
