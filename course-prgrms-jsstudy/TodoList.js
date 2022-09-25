function TodoList(id) {
        // validation
        if (!new.target) {
          throw new Error(`new 키워드로 함수를 실행하지 않았습니다.`);
        }
        validateId(id);

        // set component attributes
        this.data = [];
        this.id = id;
        this.todoCount = 0;
        // set html elements
        this.root = document.createElement('ul');
        this.root.id = id;
        this.input = document.getElementById('todo-input');
        document.getElementById('app').appendChild(this.root);

        // methods
        this.addTodo = function () {
            this.data = [
                ...this.data,
                {
                    idx: this.todoCount,
                    text: this.input.value,
                    isCompleted: false
                }
            ];
            this.render();
            this.todoCount += 1;
        };
        this.render = function () {
            this.root.innerHTML = '';
            this.data.forEach(({ text, isCompleted }) => {
                const todo = document.createElement('li');
                const todoText = document.createElement('span');
                const todoRemove = document.createElement('button');

                // todo text
                todoText.innerHTML = isCompleted ? `<s>${text}</s>` : text;
                todoText.addEventListener('click', (e) => {
                    const todos = Array.from(this.root.children);
                    const idx = todos.indexOf(todo);
                    const currentCompletedState = this.data[idx].isCompleted;
                    this.data[idx].isCompleted = !currentCompletedState;
                    this.render();
                });

                // todo remove button
                todoRemove.innerText = '🗑'
                todoRemove.addEventListener('click', (e) => {
                    const todos = Array.from(this.root.children);
                    const idx = todos.indexOf(todo);
                    this.data.splice(idx, 1);
                    this.todoCount -= 1;
                    this.render();
                });

                todo.appendChild(todoText);
                todo.appendChild(todoRemove);
                this.root.appendChild(todo);
            });
        }
        this.setState = function (nextData) {
            validateData(nextData);
            this.data = nextData;
            this.render();
        }

        // validation methods
        function validateData (data) {
            if (data === null || data === undefined) {
                throw new Error(`data가 ${data}입니다.`);
            }
            if (!Array.isArray(data)) {
                throw new Error(`data가 array 형태가 아닙니다.`);
            }
        }
        function validateId (id) {
            if (id === null || id === undefined) {
                throw new Error(`id가 ${id}입니다.`);
            }
            if (typeof(id) !== 'string') {
                throw new Error(`id가 string이 아닙니다.`);
            }
        }
    }
