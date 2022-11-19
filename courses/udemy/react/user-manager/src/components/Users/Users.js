import classes from './Users.module.css';

import UserItem from './UserItem';

function Users(props) {
    return (
        <ul>
            {props.data.map((item) => {
                return <UserItem key={item.key} item={item} />;
            })}
        </ul>
    );
}

export default Users;
