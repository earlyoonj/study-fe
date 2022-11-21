import AmountInput from '../UI/AmountInput';
import classes from './CartItem.module.css';

function CartItem(props) {
    return (
        <li className={classes['cart-item']}>
            <div className={classes.info}>
                <h5>{props.name}</h5>
                <span>{`$ ${props.price}`}</span>
            </div>
            <AmountInput className={classes.amount} />
        </li>
    );
}

export default CartItem;
