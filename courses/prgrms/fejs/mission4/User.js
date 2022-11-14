export default function UserList({ root, initialState, onClickUser }) {
    const userList = document.createElement('ul');
    userList.addEventListener('click', (event) => {
        if (event.target.nodeName === 'LI') {
            onClickUser(event.target.innerText);
        }
    });
    root.appendChild(userList);

    this.state = initialState;
    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };
    this.render = () => {
        userList.innerHTML = `${this.state.all
            .map((user) => {
                if (user === this.state.current) {
                    return `<li><b><u>${user}</u></b></li>`;
                } else {
                    return `<li>${user}</li>`;
                }
            })
            .join('')}`;
    };
}
