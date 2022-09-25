function App(root) {
    this.todoList = new TodoList({ 
        root,
        id: 'todo-list',
        initialState: {
            data: []
        }
    });
    this.todoInput = new TodoInput({ root, onAddTodo: (text) => {
        this.todoList.setState({
            data: [
                ...this.todoList.state.data,
                {
                    text: text,
                    isCompleted: false
                }
            ]
        });
    }});
}