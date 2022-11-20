import { useState } from 'react';

import Modal from './components/UI/Modal';
import Form from './components/Form/Form';
import Users from './components/Users/Users';

function App() {
    const [userData, setUserData] = useState([]);
    const [modalData, setModalData] = useState('');

    const submitHandler = (newItem) => {
        if (newItem.name.trim().length === 0 || newItem.age.trim().length === 0) {
            setModalData({
                title: 'Invalid input',
                msg: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }

        if (newItem.age < 0) {
            setModalData({
                title: 'Invalid age',
                msg: 'Please enter a valid age (>0)',
            });
            return;
        }

        setUserData((prevData) => {
            return [newItem, ...prevData];
        });
    };

    const modalCloseHandler = () => {
        setModalData(null);
    };

    return (
        <div>
            {modalData && (
                <Modal data={modalData} onConfirm={modalCloseHandler} />
            )}
            <Form onSubmit={submitHandler} />
            <Users data={userData} />
        </div>
    );
}

export default App;
