import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import { fetchJjalImages } from './api.js';

export default function App(root) {
    this.state = {
        keyword: '',
        searchResults: []
    }

    const handleSearch = (keyword) => {
        try {
            fetchJjalImages(keyword)
                .then(data => {
                    this.setState({
                        keyword: keyword,
                        searchResults: data 
                    });
                });
        } catch (error) {
            alert(error.message);
        }
    }

    const searchInput = new SearchInput({ 
        root,
        initialState: this.state.keyword,
        onSearch: handleSearch
    });

    const searchResult = new SearchResult({ 
        root, 
        initialState: this.state.searchResults
    });

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        searchInput.setState(this.state.keyword);
        searchResult.setState(this.state.searchResults);
    }
}
