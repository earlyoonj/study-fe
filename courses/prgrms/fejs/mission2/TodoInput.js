function TodoInput({ root, onAddTodo }) {
    const todoInput = document.createElement('form');
    root.appendChild(todoInput);

    todoInput.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = todoInput.querySelector('input');
        onAddTodo(input.value);
        input.value = '';
    });

    this.render = () => {
        todoInput.innerHTML = `
            <input type="text"></input>
            <button>Add</button>
        `;
    }
    this.render();
}