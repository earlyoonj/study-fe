import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    getIdxByIdHandler: (id) => {},
    addItem: (item) => {},
    removeItem: (id) => {},
    removeAll: () => {},
});

export default CartContext;
