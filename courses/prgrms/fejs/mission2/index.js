const data = [
    {
        text: '[fejs] Mission 1 복습',
        isCompleted: true
    },
    {
        text: '[fejs] Mission 2 복습',
        isCompleted: false
    }
];

const todoList = new TodoList({
    root: document.getElementById('app'), 
    initialState: data
});