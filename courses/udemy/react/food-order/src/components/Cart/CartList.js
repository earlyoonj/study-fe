import classes from './CartList.module.css';

import CartItem from './CartItem';

function CartList(props) {
    return (
        <ul className={classes['cart-list']}>
            {props.list.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                    />
                );
            })}
        </ul>
    );
}

export default CartList;
