export default function TodoCount({ root, initialState }) {
    this.todoCount = document.createElement('div');
    root.appendChild(this.todoCount);

    this.state = initialState;
    this.render = () => {
        const { totalCount, completedCount } = this.state;
        this.todoCount.innerHTML = `
            Total: ${totalCount} / Completed: ${completedCount}</span>
        `
    }
    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render();
}