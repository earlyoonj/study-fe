import { useContext } from 'react';

import classes from './Cart.module.css';

import CartContext from '../../store/cart-context';
import CartList from './CartList';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

function Cart(props) {
    const cartCtx = useContext(CartContext);

    const orderHandler = (event) => {
        event.preventDefault();

        alert('Order Complete!');

        cartCtx.removeAll();
        props.onClose();
    };

    return (
        <Modal className={classes.cart} onClose={props.onClose}>
            <form onSubmit={orderHandler}>
                <h3>Your Cart</h3>
                <CartList list={cartCtx.items} />
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span
                        className={classes.price}
                    >{`$ ${cartCtx.totalPrice.toFixed(2)}`}</span>
                </div>
                <div className={classes.controls}>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={props.onClose}
                    >
                        Close
                    </Button>
                    <Button type="submit" variant="primary">
                        Order
                    </Button>
                </div>
            </form>
        </Modal>
    );
}

export default Cart;
