import classes from './UserItem.module.css';

function UserItem(props) {
    const item = props.item;

    return (
        <li>
            <span>{item.name}</span>
            <span> ({item.age} years old)</span>
        </li>
    );
}

export default UserItem;
