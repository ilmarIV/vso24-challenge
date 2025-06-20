import { useReducer, useState, useContext } from "react";
import Headers from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";
import { CartContextProvider } from "./store/CartContext";
import CartContext from "./store/CartContext";

export const cartReducer = (state, action) => {
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

    case "RESET": {
      return {items: []};
    }

    default:
      return state;
  }
};

const App = () => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItemHandler = (item) => dispatch({ type: "ADD", item });

  const emptyCartHandler = () => dispatch({type: "RESET"});

  const getTotalItemsHandler = () =>
    cartState.items.reduce((total, item) => total + (item.amount || 1), 0);

  const getCartTotal = () => {
    const price = cartState.items.reduce((total, item) => total + (item.price * item.amount || 0), 0).toFixed(2);
    const formattedPrice = new Intl.NumberFormat("et-EE", { style: "currency", currency: "EUR" }).format(price,)
    return formattedPrice;
  }

  const cartContextValue = {
    items: cartState.items,
    addItem: addItemHandler,
    emptyCart: emptyCartHandler,
    getTotalItems: getTotalItemsHandler
  };

  const checkOutHandler = () => {
    emptyCartHandler();
    setIsCartOpen(false);
  }

  return (
    <CartContextProvider value={cartContextValue}>
      <Headers onShowCart={() => {
        if (getTotalItemsHandler() > 0) {
          setIsCartOpen(true);
        }
      }}/>
      <Meals />

      <Modal open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <h2>Your cart</h2>
        <ul>
          {cartState.items.map(item =>(
            <li key={item.id}>
              {item.name} - {item.amount}
            </li>
          ))}
        </ul>
        <p className="cart-total">{getCartTotal()}</p>
        <p className="modal-actions">
          <Button textOnly={true} onClick={() => setIsCartOpen(false)}>Close</Button>
          <Button textOnly={false} onClick={checkOutHandler}>Checkout</Button>
        </p>
      </Modal>
    </CartContextProvider>
  );
};

export default App;