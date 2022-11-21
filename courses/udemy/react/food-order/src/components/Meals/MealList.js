import classes from './MealList.module.css';

import MealItem from './MealItem';

const MEAL_LIST = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

function MealList() {
    return (
        <ul className={classes['meal-list']}>
            {MEAL_LIST.map((item) => {
                return (
                    <MealItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                );
            })}
        </ul>
    );
}

export default MealList;
