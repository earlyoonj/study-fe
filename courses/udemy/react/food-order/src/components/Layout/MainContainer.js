import classes from './MainContainer.module.css';

import Hero from './Hero';
import MealList from '../Meals/MealList';

function MainContainer() {
    return (
        <main className={classes.main}>
            <Hero />
            <MealList />
        </main>
    );
}

export default MainContainer;
