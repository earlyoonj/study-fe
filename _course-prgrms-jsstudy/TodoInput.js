export default function TodoInput({ root, onAddTodo }) {
    // Todo Input Form
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
    todoInput.addEventListener('click', e => {
        if (e.target.className === 'remove-all') {
            window.dispatchEvent(new CustomEvent('remove-all'));
        }
    })
    root.appendChild(todoInput);

    this.render = () => {
        todoInput.innerHTML = `
            <input type="text">
            <button type="submit">Input</button>
            <button class="remove-all" type="button">Remove All</button>
        `
    }
    
    this.render();
}