const MAX_HISTORY_SIZE = 5;

export default function ({ root, initialState, onClickHistory }) {
    this.searchHistory = document.createElement('ol');
    root.appendChild(this.searchHistory);

    this.state = initialState;
    this.setState = (nextState) => {
        if (nextState.length > MAX_HISTORY_SIZE) {
            nextState.splice(0, 1);
        }

        this.state = nextState;
        this.render();
    };
    this.render = () => {
        this.searchHistory.innerHTML = this.state
            .map((item) => {
                return `<li>${item}</li>`;
            })
            .join('');
    };

    this.searchHistory.addEventListener('click', (e) => {
        if (e.target.nodeName === 'LI') {
            const history = Array.from(this.searchHistory.children);
            const i = history.indexOf(e.target);
            onClickHistory(this.state[i]);
        }
    });
}
