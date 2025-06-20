import { render, screen, waitFor } from "@testing-library/react";
import Meals from "./Meals";

jest.mock("./MealItem", () => ({ meal }) => (
  <li>{meal.name}</li>
));

beforeEach(() => {
  jest.spyOn(global, "fetch");
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders a MealItem for each fetched meal", async () => {
  const fakeMeals = [
    { id: "1", name: "Pizza" },
    { id: "2", name: "Burger" },
  ];

  fetch.mockResolvedValueOnce({
    json: () => Promise.resolve(fakeMeals),
  });

  render(<Meals />);

  for (const meal of fakeMeals) {
    await waitFor(() => expect(screen.getByText(meal.name)).toBeInTheDocument());
  }
  const list = screen.getByRole("list");
  expect(list.children.length).toBe(fakeMeals.length);
});