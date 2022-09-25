const todoList = new TodoList('todo-list');

document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        todoList.addTodo();

        // init input
        e.target.value = '';
    }
})
document.getElementById('todo-submit').addEventListener('click', function (e) {
    e.preventDefault(); // form 기본동작 방지
    todoList.addTodo();

    // init input
    currentInput = document.getElementById('todo-input');
    currentInput.value = '';
    currentInput.focus();
});