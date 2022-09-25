function TodoInput({ root, onAddTodo }) {
    const todoInput = document.createElement('form');
    todoInput.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent form action

        // add todo
        const input = todoInput.querySelector('input');
        onAddTodo(input.value);

        // set input
        input.value = '';
        input.focus();
    })
    root.appendChild(todoInput);
    
    this.render = () => {
        todoInput.innerHTML = `
            <input type="text">
            <button type="submit">Input</button>
        `
    }
    
    this.render();
}