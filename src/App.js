import { useReducer } from "react";
import Headers from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";

const cartReducer = (state, action) => {
  //console.log(state.items);
  switch (action.type) {
    case "ADD": {
      const { id, amount = 1 } = action.item;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === id
            ? { ...item, amount: item.amount + amount }
            : item
        );
        return { items: updatedItems };
      }

      return {
        items: [...state.items, { ...action.item, amount }]
      };
    }

    default:
      return state;
  }
};

const App = () => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addItemHandler = (item) => dispatch({ type: "ADD", item });

  const getTotalItemsHandler = () =>
    cartState.items.reduce((total, item) => total + (item.amount || 1), 0);

  const cartContextValue = {
    items: cartState.items,
    addItem: addItemHandler,
    getTotalItems: getTotalItemsHandler
  };

  return (
    <CartContextProvider value={cartContextValue}>
      <Headers />
      <Meals />
    </CartContextProvider>
  );
};

export default App;