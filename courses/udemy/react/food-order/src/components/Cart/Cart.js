import classes from './Cart.module.css';

import Modal from '../UI/Modal';
import Button from '../UI/Button';
import CartList from './CartList';
import CartIcon from './CartIcon';

const DUMMY_CART_LIST = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
];

function Cart(props) {
    const orderHandler = (event) => {
        event.preventDefault();
        console.log('Order Complete!');
        props.onClose();
    };

    return (
        <Modal className={classes.cart} onClose={props.onClose}>
            <form>
                <h3>Your Cart</h3>
                <CartList list={DUMMY_CART_LIST} />
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span className={classes.price}>{`$ ${80.59}`}</span>
                </div>
                <div className={classes.controls}>
                    <Button variant="secondary" onClick={props.onClose}>
                        Close
                    </Button>
                    <Button
                        type="submit"
                        variant="primary"
                        onClick={orderHandler}
                    >
                        Order
                    </Button>
                </div>
            </form>
        </Modal>
    );
}

export default Cart;
