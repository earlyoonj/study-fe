import { useContext, useState } from 'react';

import classes from './MealItem.module.css';

import CartContext from '../../store/cart-context';
import AmountInput from '../UI/AmountInput';
import Button from '../UI/Button';

const DEFAULT_AMOUNT = 1;

function MealItem(props) {
    const cartCtx = useContext(CartContext);
    const [amountState, setAmountState] = useState(DEFAULT_AMOUNT);

    const addItemToCartHandler = (event) => {
        event.preventDefault();

        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: +props.price,
            amount: +amountState,
        });
        setAmountState(1);
    };

    const addAmountHandler = () => {
        setAmountState((prevAmount) => {
            return prevAmount + 1;
        });
    };

    const removeAmountHandler = () => {
        setAmountState((prevAmount) => {
            const nextAmount = prevAmount - 1;
            return nextAmount > DEFAULT_AMOUNT ? nextAmount : DEFAULT_AMOUNT;
        });
    };

    return (
        <li className={classes['meal-item']}>
            <div className={classes.info}>
                <div>
                    <h5 className={classes.name}>{props.name}</h5>
                    <p className={classes.description}>{props.description}</p>
                </div>
                <span className={classes.price}>{`$ ${props.price.toFixed(2)}`}</span>
            </div>
            <form className={classes.amount} onSubmit={addItemToCartHandler}>
                <AmountInput
                    input={{
                        value: amountState,
                        disabled: true,
                    }}
                    onAdd={addAmountHandler}
                    onRemove={removeAmountHandler}
                />
                <Button
                    type="submit"
                    className={classes['add-btn']}
                    variant="primary"
                >
                    Add Item
                </Button>
            </form>
        </li>
    );
}

export default MealItem;
