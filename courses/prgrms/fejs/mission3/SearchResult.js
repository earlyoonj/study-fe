export default function SearchResult({ root, initialState }) {
    this.state = initialState;

    const searchResult = document.createElement('div');
    root.appendChild(searchResult);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }
    this.render = () => {
        if (Array.isArray(this.state)){
            searchResult.innerHTML = `${
                this.state
                    .map(item => `<img src="${item.imageUrl}">`)
                    .join('')
            }`
        }
    };
    this.render();
}
