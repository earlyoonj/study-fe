import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const title = props.title;
    const amount = props.amount;
    const date = props.date;

    return (
        <li className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <span className="expense-item__price">$ {amount}</span>
            </div>
        </li>
    );
}

export default ExpenseItem;
