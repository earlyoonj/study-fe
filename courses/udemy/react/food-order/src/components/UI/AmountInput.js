import classes from './AmountInput.module.css';

function AmountInput(props) {
    return (
        <div className={`${classes.amount} ${props.className}`}>
            <button type="button" onClick={props.onRemove}>
                -
            </button>
            <input type="number" {...props.input} />
            <button type="button" onClick={props.onAdd}>
                +
            </button>
        </div>
    );
}

export default AmountInput;
