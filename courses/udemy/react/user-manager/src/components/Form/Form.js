import classes from './Form.module.css';

import { useState } from 'react';

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
        <form onSubmit={submitHandler}>
            <div className="controls">
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
            <div className="actions">
                <button type="submit">Add user</button>
            </div>
        </form>
    );
}

export default Form;
