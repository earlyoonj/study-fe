import classes from './Modal.module.css';

import Card from './Card';
import Button from './Button';

function Modal(props) {
    return (
        <div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.data.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.data.msg}</p>
                </div>
                <footer className={classes.actions}>
                    <Button type="button" onClick={props.onConfirm}>
                        Okay
                    </Button>
                </footer>
            </Card>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>
        </div>
    );
}

export default Modal;
