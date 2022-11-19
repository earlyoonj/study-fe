import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
    return (
        <ol className="expenses-list">
            {props.items.map((item) => {
                return <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />;
            })}
        </ol>
    );
}

export default ExpenseList;
