function App({ root, initialState }) {
    this.state = initialState;
    this.setState = (nextState) => {
        this.state = nextState;
        todoList.setState(this.state);
    };

    const todoList = new TodoList({ root, initialState });
    const todoInput = new TodoInput({ root,
        onAddTodo: (text) => {
            this.setState([
                ...this.state,
                {
                    text,
                    isCompleted: false
                }
            ]);
        }
    });
}