function TodoList({ root, initialState }) {
    // validation
    if (!new.target) {
        throw new Error('new 키워드를 사용하지 않았습니다.');
    }
    validateState(initialState);


    // component
    this.todoList = document.createElement('ul');
    root.appendChild(this.todoList);
    
    this.state = initialState;
    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }
    this.render = () => {
        this.todoList.innerHTML = '';
        this.state.forEach((todo, i) => {
            const { text, isCompleted } = validateTodo(todo, i);

            const li = document.createElement('li');

            const span = document.createElement('span');
            span.innerText = text + ' ';
            if (isCompleted) {
                li.style['text-decoration'] = 'line-through';
            }
            span.addEventListener('click', (event) => {
                const currentCompleted = this.state[i].isCompleted;
                this.state[i].isCompleted = !currentCompleted;
                this.setState(this.state);
            });
            
            const button = document.createElement('button');
            button.innerText = '🗑️';
            button.addEventListener('click', () => {
                this.state.splice(i, 1);
                this.setState(this.state);
            });

            li.appendChild(span);
            li.appendChild(button)
            this.todoList.appendChild(li);
        });
    }
    this.render();
    

    // inner methods
    function validateState(state) {
        if (state === null || state === undefined) {
            throw new Error(`state가 정의되지 않았습니다: ${state}`);
        } else if (!Array.isArray(state)) {
            throw new Error(`state가 배열이 아닙니다: ${state}`);
        }
    }
    function validateTodo(todo, i) {
        const { text, isCompleted } = todo;
        if (text === undefined || isCompleted === undefined) {
            throw new Error(`state[${i}] - todo 데이터 구조가 올바르지 않습니다: ${JSON.stringify(todo)}`);
        }

        if (typeof(text) !== 'string') {
            throw new Error(`state[${i}] - text가 string이 아닙니다: ${typeof(text)}`);
        }
        if (typeof(isCompleted) !== 'boolean') {
            throw new Error(`state[${i}] - isCompleted가 boolean이 아닙니다: ${typeof(isCompleted)}`);
        }

        return todo;
    }
}