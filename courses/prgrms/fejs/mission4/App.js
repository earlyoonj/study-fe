import { getTodos, addTodo, removeTodo, removeAllTodo, toggleTodo } from './api.js';
import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';

export default function App(root, userId) {
    const init = async () => {
        const todos = await getTodos(userId);
        this.setState(todos);
    }
    
    this.state = [];
    this.setState = (nextState) => {
        this.state = nextState;
        todoList.setState(this.state);
        todoCount.setState(this.getCount());
    };
    this.getCount = () => {
        return {
            totalCount: this.state.length,
            completedCount: this.state.filter((todo) => todo.isCompleted).length
        };
    }

    const todoList = new TodoList({ root, 
        initialState: [],
        onToggleComplete: (idx) => {
            const todoId = this.state[idx]._id;
            toggleTodo(userId, todoId);
            
            const currentCompleted = this.state[idx].isCompleted;
            this.state[idx].isCompleted = !currentCompleted;
            this.setState(this.state);
        },
        onRemoveComplete: (idx) => {
            const todoId = this.state[idx]._id;
            removeTodo(userId, todoId);

            this.state.splice(idx, 1);
            this.setState(this.state);
        }
    });
    const todoInput = new TodoInput({ root,
        onAddTodo: async (content) => {
            const nextState = await addTodo(userId, content);
            this.setState([
                ...this.state,
                nextState
            ]);
        }
    });
    const todoCount = new TodoCount({ root, 
        initialState: this.getCount()
    });

    window.addEventListener('remove-all', () => {
        this.setState([]);
        removeAllTodo(userId);
    });

    init();
}