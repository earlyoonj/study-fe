function TodoList({ root, id, initialState }) {
        // validation
        if (!new.target) {
          throw new Error(`new 키워드로 함수를 실행하지 않았습니다.`);
        }

        // set component
        this.state = initialState;
        this.todoList = document.createElement('ul');
        this.todoList.id = id;
        root.appendChild(this.todoList);

        // methods
        this.render = function () {
            const { data } = this.state;
            this.todoList.innerHTML = '';
            data.forEach(({ text, isCompleted }) => {
                const todo = document.createElement('li');
                const todoText = document.createElement('span');
                const todoRemove = document.createElement('button');

                // todo text
                todoText.innerHTML = isCompleted ? `<s>${text}</s>` : text;
                todoText.addEventListener('click', (e) => {
                    const todos = Array.from(this.todoList.children);
                    const idx = todos.indexOf(todo);
                    const currentCompletedState = data[idx].isCompleted;
                    data[idx].isCompleted = !currentCompletedState;
                    this.render();
                });

                // todo remove button
                todoRemove.innerText = '🗑'
                todoRemove.addEventListener('click', (e) => {
                    const todos = Array.from(this.todoList.children);
                    const idx = todos.indexOf(todo);
                    data.splice(idx, 1);
                    this.todoCount -= 1;
                    this.render();
                });

                todo.appendChild(todoText);
                todo.appendChild(todoRemove);
                this.todoList.appendChild(todo);
            });
        }
        this.setState = function (nextState) {
            console.log(nextState.test);
            validateState(nextState);
            this.state = nextState;
            this.render();
        }

        // validation methods
        function validateState (state) {
            // state
            try {
                var { data } = state;
            } catch (error) {
                console.error('{ data } 형태로 이루어진 state가 아닙니다.')
            }

            // data
            if (data === null || data === undefined) {
                throw new Error(`data가 ${data}입니다.`);
            }
            if (!Array.isArray(data)) {
                throw new Error(`data가 array 형태가 아닙니다.`);
            }
        }
    }
