import React, { useReducer, useState } from "react";

const CartContext = React.createContext({
  showCart: false,
  showAddProduct: true,
  toggleCart: () => {},
  toggleProduct: () => {},
  detaisl: {},
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  deleteItem: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const newTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems = [...state.items];

    const updatedItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity - 1,
    };
    if (updatedItem.quantity === 0) {
      updatedItems = updatedItems.filter((item) => item.id !== action.id);
    } else {
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "DELETE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const newTotalAmount =
      state.totalAmount - existingCartItem.price * existingCartItem.quantity;

    const updatedItems = state.items.filter((item) => item.id !== action.id);

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  return defaultCartState;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

export const CartContextProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [details, setDetails] = useState({});
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  console.log(cartState);

  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const deleteItemFromCart = (id) => {
    dispatchCart({ type: "DELETE", id: id });
  };

  const toggleCart = () => {
    setShowCart((pre) => {
      return !pre;
    });
  };

  const toggleProduct = (name, price, img, id) => {
    setShowAddProduct((pre) => {
      return !pre;
    });
    setDetails({ name: name, price: price, img: img, id: id });
  };

  const cartContext = {
    showCart: showCart,
    toggleCart: toggleCart,
    details: details,
    showAddProduct: showAddProduct,
    toggleProduct: toggleProduct,
    totalAmount: cartState.totalAmount,
    items: cartState.items,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    deleteItem: deleteItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
