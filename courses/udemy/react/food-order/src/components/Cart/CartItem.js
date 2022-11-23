import { useContext } from 'react';

import classes from './CartItem.module.css';

import AmountInput from '../UI/AmountInput';
import CartContext from '../../store/cart-context';

function CartItem(props) {
    const item = props.item;
    const cartCtx = useContext(CartContext);

    const addHandler = () => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const removeHandler = () => {
        cartCtx.removeItem(item.id);
    };

    return (
        <li className={classes['cart-item']}>
            <div className={classes.info}>
                <h5>{item.name}</h5>
                <span>{`$ ${item.price}`}</span>
            </div>
            <AmountInput
                className={classes.amount}
                onAdd={addHandler}
                onRemove={removeHandler}
                input={{
                    value: item.amount,
                    disabled: true
                }}
            />
        </li>
    );
}

export default CartItem;
