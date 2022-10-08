export default function SearchInput({ root, initialState, onSearch }) {
    this.state = initialState;
    this.onSearch = onSearch;

    this.searchInput = document.createElement('input');
    root.appendChild(this.searchInput);

    this.setState = (nextState) => {
        if (typeof nextState === 'string' && nextState.length > 0) {
            this.state = nextState;
            this.render();
        }
    }
    this.render = () => {
        this.searchInput.value = this.state;
    }

    this.searchInput.addEventListener('keyup', (e) => {
        const { value } = e.target;
        if (value.length > 0) {
            this.onSearch(value);
        }
    });

    this.render();
}
