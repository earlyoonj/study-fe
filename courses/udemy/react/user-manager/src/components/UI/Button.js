import classes from './Button.module.css';

function Button(props) {
    return (
        <button
            class={classes.primary}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;
