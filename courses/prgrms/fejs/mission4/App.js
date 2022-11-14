import {
    getTodos,
    addTodo,
    removeTodo,
    removeAllTodo,
    toggleTodo,
    getUsers,
} from './api.js';
import User from './User.js';
import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';

export default function App(root, userId) {
    this.state = {
        user: {
            current: '',
            all: [],
        },
        todos: [],
    };
    this.setState = (nextState) => {
        this.setUserState(nextState.user);
        this.setTodoState(nextState.todos);
    };
    this.setUserState = (nextUsers) => {
        this.state.user = nextUsers;
        user.setState(nextUsers);
    };
    this.setTodoState = (nextTodos) => {
        this.state.todos = nextTodos;
        todoList.setState(nextTodos);
        todoCount.setState(this.getCount());
    };
    this.getCount = () => {
        const todos = this.state.todos;
        return {
            totalCount: todos.length,
            completedCount: todos.filter((todo) => todo.isCompleted).length,
        };
    };

    const user = new User({
        root,
        initialState: this.state.users,
        onClickUser: async (userId) => {
            const todos = await getTodos(userId);
            const nextState = {
                user: {
                    current: userId,
                    all: this.state.user.all,
                },
                todos,
            };
            this.setState(nextState);
        },
    });
    const todoList = new TodoList({
        root,
        initialState: [],
        onToggleComplete: (idx) => {
            const todos = this.state.todos;
            const todoId = todos[idx]._id;
            toggleTodo(this.state.user.current, todoId);

            const currentCompleted = todos[idx].isCompleted;
            todos[idx].isCompleted = !currentCompleted;
            this.setTodoState(todos);
        },
        onRemoveComplete: (idx) => {
            const todos = this.state.todos;
            const todoId = todos[idx]._id;
            removeTodo(this.state.user.current, todoId);

            todos.splice(idx, 1);
            this.setTodoState(todos);
        },
    });
    const todoInput = new TodoInput({
        root,
        onAddTodo: async (content) => {
            const addedTodo = await addTodo(this.state.user.current, content);
            this.setTodoState([...this.state.todos, addedTodo]);
        },
    });
    const todoCount = new TodoCount({ root, initialState: this.getCount() });

    window.addEventListener('remove-all', () => {
        this.setTodoState([]);
        removeAllTodo(this.state.user.current);
    });

    const init = async () => {
        const users = await getUsers();
        const todos = await getTodos(userId);
        this.setState({
            user: {
                current: userId,
                all: users,
            },
            todos,
        });
    };
    init();
}
