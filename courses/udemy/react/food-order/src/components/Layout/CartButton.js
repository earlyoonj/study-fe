import { Fragment, useState } from 'react';

import classes from './CartButton.module.css';

import Cart from '../Cart/Cart';
import CartIcon from '../Cart/CartIcon';

function CartButton() {
    const [isShowCart, setIsShowCart] = useState(false);

    const showCartHandler = () => {
        setIsShowCart(true);
    }

    const hideCartHandler = () => {
        setIsShowCart(false);
    }

    return (
        <Fragment>
            {isShowCart && <Cart onClose={hideCartHandler}/>}
            <button className={classes['cart-btn']} onClick={showCartHandler}>
                <CartIcon />
                <h3>Your Cart</h3>
                <span className={classes.badge}>
                    <span>5</span>
                </span>
            </button>
        </Fragment>
    );
}

export default CartButton;
