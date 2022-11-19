import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
    const submitExpenseHandler = (expense) => {
        const newExpense = {
            id: Math.random().toString(),
            ...expense,
        };
        props.onAddExpense(newExpense);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpense={submitExpenseHandler} />
        </div>
    );
}

export default NewExpense;
