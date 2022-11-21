import classes from './CartButton.module.css';

import CartIcon from './CartIcon';

function CartButton() {
    return (
        <button className={classes['cart-btn']}>
            <CartIcon />
            <h3>Your Cart</h3>
            <span className={classes.badge}>
                <span>5</span>
            </span>
        </button>
    );
}

export default CartButton;
