export default function TodoList({ root, id, initialState, onToggleCompleted, onRemove }) {
        // validation
        if (!new.target) {
          throw new Error(`new 키워드로 함수를 실행하지 않았습니다.`);
        }

        // set component
        this.state = initialState;
        this.todoList = document.createElement('ul');
        this.todoList.id = id;
        this.todoList.addEventListener('click', (e) => {
            if (e.target) {
                // NOTE: render 시 forEach문 안에 data-index attribute 넣는 방법도 존재 (e.target.dataset으로 접근)
                // NOTE: e.target.closest로 이벤트 발생 주체 찾을 수 있음
                const todos = Array.from(this.todoList.children);
                const idx = todos.indexOf(e.target.parentNode);

                // todoText
                if (e.target.className === 'Todolist__text') {
                    onToggleCompleted(idx);
                }
                // todoRemove
                if (e.target.className === 'Todolist__remove') {
                    onRemove(idx);
                }
            }
        })
        root.appendChild(this.todoList);

        // methods
        this.render = function () {
            this.todoList.innerHTML = '';
            this.state.forEach(({ text, isCompleted }) => {
                const todo = document.createElement('li');
                const todoText = document.createElement('span');
                const todoRemove = document.createElement('button');

                todoText.className = 'Todolist__text';
                if (isCompleted) {
                    todoText.style['text-decoration'] = 'line-through';
                }
                todoText.innerText = text;
                todoRemove.className = 'Todolist__remove';
                todoRemove.innerText = '🗑'

                todo.appendChild(todoText);
                todo.appendChild(todoRemove);
                this.todoList.appendChild(todo);
            });
        }
        this.setState = function (nextState) {
            validateState(nextState);
            this.state = nextState;
            this.render();
        }

        // validation methods
        function validateState (state) {
            // state
            if (state === null || state === undefined) {
                throw new Error(`state가 ${state}입니다.`);
            }
            if (!Array.isArray(state)) {
                throw new Error(`state가 array 형태가 아닙니다.`);
            }

            // todos
            state.forEach(() => {
                try {
                    const { text, isCompleted } = state;
                } catch (error) {
                    console.error('state 내 todo가 { text, isCompleted } 로 이루어져있지 않습니다.')
                }
            })

        }
    }
