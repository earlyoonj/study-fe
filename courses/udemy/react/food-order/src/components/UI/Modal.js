import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const portal = document.getElementById('overlays');

function Modal(props) {
    const ModalOverlay = (
        <div className={`${classes.modal} ${props.className}`}>
            {props.children}
        </div>
    );

    const Backdrop = (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    );

    return (
        <Fragment>
            {ReactDOM.createPortal(ModalOverlay, portal)}
            {ReactDOM.createPortal(Backdrop, portal)}
        </Fragment>
    );
}

export default Modal;
