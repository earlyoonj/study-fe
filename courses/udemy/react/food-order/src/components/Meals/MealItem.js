import classes from './MealItem.module.css';

import AmountInput from '../UI/AmountInput';
import Button from '../UI/Button';

function MealItem(props) {
    const AmountHandler = (event) => {
        event.preventDefault();
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
            <form className={classes.amount} onSubmit={AmountHandler}>
                <AmountInput />
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
