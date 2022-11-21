import classes from './Header.module.css';
import CartButton from './CartButton';

function Header() {
    return (
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <CartButton />
        </header>
    );
}

export default Header;
