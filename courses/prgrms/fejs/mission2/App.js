import storage from './localStorage.js'
import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';

export default function App(root) {
    this.state = storage.getItem('todoList', []);
    this.setState = (nextState) => {
        this.state = nextState;
        todoList.setState(this.state);
        todoCount.setState(this.getCount());
        storage.setItem('todoList', this.state);
    };
    this.getCount = () => {
        return {
            totalCount: this.state.length,
            completedCount: this.state.filter((todo) => todo.isCompleted).length
        };
    }

    const todoList = new TodoList({ root, 
        initialState: this.state,
        onToggleComplete: (idx) => {
            const currentCompleted = this.state[idx].isCompleted;
            this.state[idx].isCompleted = !currentCompleted;
            this.setState(this.state);
        },
        onRemoveComplete: (idx) => {
            this.state.splice(idx, 1);
            this.setState(this.state);
        }
    });
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
    const todoCount = new TodoCount({ root, 
        initialState: this.getCount()
    });

    window.addEventListener('remove-all', () => {
        this.setState([]);
    });
}