import { cartReducer } from "./App";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


//cartReducer tests
test("adds amount to an existing item in the cart", () => {
  const initialState = { items: [{ id: "1", amount: 2 }] };
  const action = { type: "ADD", item: { id: "1", amount: 1 } };

  const state = cartReducer(initialState, action);

  expect(state.items).toHaveLength(1);
  expect(state.items[0].amount).toBe(3);
});

test("resets the cart and empties all items", () => {
  const initialState = { items: [{ id: "1", amount: 3 }] };
  const action = { type: "RESET" };

  const state = cartReducer(initialState, action);

  expect(state.items).toHaveLength(0);
});


//App tests
test("clicking cart button opens cart modal if there are items", async () => {
  render(<App />);

  const addButtons = await screen.findAllByRole("button", { name: /add to cart/i });
  await userEvent.click(addButtons[0]);

  const cartButton = screen.getByRole("button", { name: /cart \(1\)/i });
  await userEvent.click(cartButton);

  await waitFor(() => {
    expect(screen.getByText(/your cart/i)).toBeVisible();
  });
});

test("clicking cart button does not open modal if cart is empty", async () => {
  render(<App />);

  const cartButton = screen.getByRole("button", { name: /cart \(0\)/i });
  await userEvent.click(cartButton);

  await waitFor(() => {
    expect(screen.queryByText(/your cart/i)).not.toBeVisible();
  });
});