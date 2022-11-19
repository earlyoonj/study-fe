import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    const submitExpenseHandler = (expense) => {
        const newExpense = {
            id: Math.random().toString(),
            ...expense,
        };
        props.onAddExpense(newExpense);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {isEditing && (
                <ExpenseForm
                    onSubmitExpense={submitExpenseHandler}
                    onCancel={stopEditingHandler}
                />
            )}
            {!isEditing && (
                <button type="button" onClick={startEditingHandler}>
                    + Add Expense
                </button>
            )}
        </div>
    );
}

export default NewExpense;
