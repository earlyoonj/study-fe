import classes from './CartList.module.css';

import CartItem from './CartItem';

function CartList(props) {
    return (
        <ul className={classes['cart-list']}>
            {props.list.map((item) => {
                return <CartItem key={item.id} item={item} />;
            })}
        </ul>
    );
}

export default CartList;
