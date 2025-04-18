import { createContext } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    emptyCart: () => {},
    getTotalItems: () => {}
});

export const CartContextProvider = ({ children, value }) => {
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;