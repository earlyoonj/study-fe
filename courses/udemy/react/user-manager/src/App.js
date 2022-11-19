import { useState } from 'react';

import Form from './components/Form/Form';
import Users from './components/Users/Users';

function App() {
    const [userData, setUserData] = useState([]);

    const submitHandler = (newItem) => {
        setUserData((prevData) => {
            return [newItem, ...prevData];
        });
    };

    return (
        <div>
            <Form onSubmit={submitHandler} />
            <Users data={userData} />
        </div>
    );
}

export default App;
