import classes from './Users.module.css';

import Card from '../UI/Card';
import UserItem from './UserItem';

function Users(props) {
    return (
        <Card className={classes.users}>
            <ul>
                {props.data.map((item) => {
                    return <UserItem key={item.key} item={item} />;
                })}
            </ul>
        </Card>
    );
}

export default Users;
