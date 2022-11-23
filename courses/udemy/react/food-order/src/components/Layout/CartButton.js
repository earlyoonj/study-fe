import { Fragment, useContext, useState, useEffect } from 'react';

import classes from './CartButton.module.css';

import CartContext from '../../store/cart-context';
import Cart from '../Cart/Cart';
import CartIcon from '../Cart/CartIcon';

function CartButton() {
    const cartCtx = useContext(CartContext);
    const [isShowCart, setIsShowCart] = useState(false);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    // Cart Modal Control
    const showCartHandler = () => {
        setIsShowCart(true);
    };

    const hideCartHandler = () => {
        setIsShowCart(false);
    };

    // Cart Animation
    useEffect(() => {
        if (cartCtx.totalAmount === 0) {
            return;
        }

        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [cartCtx.totalAmount]);

    const btnClasses = `${classes['cart-btn']} ${
        btnIsHighlighted ? classes.bump : ''
    }`;

    return (
        <Fragment>
            {isShowCart && <Cart onClose={hideCartHandler} />}
            <button className={btnClasses} onClick={showCartHandler}>
                <CartIcon />
                <h3>Your Cart</h3>
                <span className={classes.badge}>
                    <span>{cartCtx.totalAmount}</span>
                </span>
            </button>
        </Fragment>
    );
}

export default CartButton;
