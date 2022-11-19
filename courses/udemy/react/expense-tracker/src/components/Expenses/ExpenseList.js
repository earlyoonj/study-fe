import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    } else {
        return (
            <ol className="expenses-list">
                {props.items.map((item) => {
                    return (
                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    );
                })}
            </ol>
        );
    }
}

export default ExpenseList;
