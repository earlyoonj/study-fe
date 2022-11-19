import { useState } from 'react';
import './Expenses.css';

import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';

function Expenses(props) {
    const [yearFilter, setYearFilter] = useState('2020');

    const selectFilterHandler = (selectedFilter) => {
        setYearFilter(selectedFilter);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === yearFilter;
    });

    return (
        <div className="expenses">
            <ExpenseFilter
                onSelectFilter={selectFilterHandler}
                selected={yearFilter}
            />
            <ExpenseChart items={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </div>
    );
}

export default Expenses;
