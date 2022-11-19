import classes from './Form.module.css';

import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

function Form(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            key: Math.random().toString(),
            name,
            age,
        };
        props.onSubmit(data);

        setName('');
        setAge('');
    };

    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const ageHandler = (event) => {
        setAge(event.target.value);
    };

    return (
        <Card className={classes.form}>
            <form onSubmit={submitHandler}>
                <div className={classes.controls}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={name}
                            onChange={nameHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age (Years)</label>
                        <input
                            id="age"
                            type="number"
                            value={age}
                            onChange={ageHandler}
                        />
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button type="submit">Add user</Button>
                </div>
            </form>
        </Card>
    );
}

export default Form;
