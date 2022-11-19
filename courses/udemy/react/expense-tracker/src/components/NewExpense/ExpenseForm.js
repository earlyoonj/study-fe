import { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmitExpense({
            title,
            amount: +amount,
            date: new Date(date),
        });

        setTitle('');
        setAmount('');
        setDate('');
    };

    const titleHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateHandler = (event) => {
        setDate(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={titleHandler}
                    ></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={amountHandler}
                    ></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={date}
                        onChange={dateHandler}
                    ></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button
                    type="button"
                    className="alternative"
                    onClick={props.onCancel}
                >
                    Cancel
                </button>
                <button type="submit">+ Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
