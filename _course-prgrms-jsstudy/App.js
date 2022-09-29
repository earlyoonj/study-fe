import storage from './localStorage.js';
import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';

export default function App(root) {
    this.state = storage.getItem('todoList', []);
    this.getCount = () => {
        return {
            totalCount: this.state.length,
            completedCount: this.state.filter(todo => todo.isCompleted).length
        };
    }
    this.setState = (nextState) => {
        this.state = nextState;
        todoList.setState(this.state);
        todoCount.setState(this.getCount());
        storage.setItem('todoList', nextState);
    }

    const todoList = new TodoList({ 
        root,
        id: 'todo-list',
        initialState: this.state,
        onToggleCompleted: (idx) => {
            const nextState = [...this.state];
            const { isCompleted } = nextState[idx];
            nextState[idx].isCompleted = !isCompleted;
            this.setState(nextState);
        },
        onRemove: (idx) => {
            const nextState = [...this.state];
            nextState.splice(idx, 1);
            this.setState(nextState);
        }
    });
    const todoInput = new TodoInput({ root,
        onAddTodo: (text) => {
            this.setState([
                ...this.state,
                {
                    text: text,
                    isCompleted: false
                }
            ]);
        },
        onRemoveAll: () => {
            this.setState([]);
        }
    });
    const todoCount = new TodoCount({ root, 
        initialState: this.getCount()
    });

    this.setState(this.state);

    // NOTE: 커스텀 이벤트 활용: depth가 깊어질 경우 / 데이터를 내려줄 필요가 없을 경우 / 공용 기능일 경우
    window.addEventListener('remove-all', () => {
        this.setState([]);
    });
}