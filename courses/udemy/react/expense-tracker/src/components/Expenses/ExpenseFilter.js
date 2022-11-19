import './ExpenseFilter.css';

function ExpenseFilter(props) {
    const filterSelectHandler = (event) => {
        props.onSelectFilter(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <select
                className="expenses-filter__control"
                value={props.selected}
                onChange={filterSelectHandler}
            >
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    );
}

export default ExpenseFilter;