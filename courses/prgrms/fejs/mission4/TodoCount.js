export default function TodoCount({ root, initialState }) {
    const todoCount = document.createElement('span');
    root.appendChild(todoCount);

    this.state = initialState;
    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        todoCount.innerText = `
            Total Count: ${this.state.totalCount} / Completed Count : ${this.state.completedCount}
        `;
    }
    this.render();
}