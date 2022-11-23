import { useReducer } from 'react';

import CartContext from './cart-context';

const DEFAULT_CART_STATE = {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
};

const cartReducer = (state, action) => {
    let nextState;
    const items = state.items;

    switch (action.type) {
        case 'ADD':
            const addingItem = action.item;
            const addingTargetItem = getExistingItemById(items, addingItem.id);

            if (!addingTargetItem) {
                nextState = { ...state, items: items.concat(addingItem) };
            } else {
                addingTargetItem.amount += addingItem.amount;
                nextState = { ...state, items: [...items] };
            }

            nextState.totalAmount += addingItem.amount;
            nextState.totalPrice = getTotalPrice(nextState.items);

            return nextState;
        case 'REMOVE':
            const removingItem = getExistingItemById(items, action.id);
            removingItem.amount -= 1;

            let nextItems;

            if (removingItem.amount <= 0) {
                nextItems = state.items.filter((item) => item.id !== action.id);
            } else {
                nextItems = [...items];
            }

            nextState = { ...state, items: nextItems };

            nextState.totalAmount -= 1;
            nextState.totalPrice = getTotalPrice(items);

            return nextState;
        case 'REMOVE_ALL':
            return DEFAULT_CART_STATE;
        default:
            return state;
    }
};

const getItemIdxById = (items, id) => {
    return items.findIndex((item) => item.id === id);
};

const getExistingItemById = (items, id) => {
    const idx = getItemIdxById(items, id);
    return items[idx];
};

const getTotalPrice = (items) => {
    return items.reduce((prevTotal, currItem) => {
        return prevTotal + currItem.price * currItem.amount;
    }, 0);
};

function CartProvider(props) {
    const [cartState, dispatchCartState] = useReducer(
        cartReducer,
        DEFAULT_CART_STATE
    );

    const getIdxByIdHandler = (id) => {
        return getItemIdxById(cartState.items, id);
    };

    const addItemHandler = (item) => {
        dispatchCartState({ type: 'ADD', item });
    };

    const removeItemHandler = (id) => {
        dispatchCartState({ type: 'REMOVE', id });
    };

    const removeAllItemsHandler = () => {
        dispatchCartState({ type: 'REMOVE_ALL' });
    };

    const cartCtx = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        totalPrice: cartState.totalPrice,
        getIdxById: getIdxByIdHandler,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        removeAll: removeAllItemsHandler,
    };

    return (
        <CartContext.Provider value={cartCtx}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
