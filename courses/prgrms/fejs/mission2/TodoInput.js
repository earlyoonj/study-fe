function TodoInput({ root, onAddTodo }) {
    const todoInput = document.createElement('form');
    root.appendChild(todoInput);

    todoInput.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = todoInput.querySelector('input');
        onAddTodo(input.value);
        input.value = '';
    });
    todoInput.addEventListener('click', (event) => {
        if (event.target.className === 'remove-all') {
            window.dispatchEvent(new CustomEvent('remove-all'));
        }
    });

    this.render = () => {
        todoInput.innerHTML = `
            <input type="text"></input>
            <button type="submit">Add</button>
            <button class="remove-all" type="button">Remove All</button>
        `;
    }
    this.render();
}