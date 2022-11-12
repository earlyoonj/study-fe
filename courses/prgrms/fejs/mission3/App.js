import SearchHistory from './SearchHistory.js';
import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import { fetchJjalImages } from './api.js';

export default function App(root) {
    this.state = {
        keyword: '',
        histories: [],
        searchResults: []
    }

    const handleSearch = async (keyword) => {
        try {
            const data = await fetchJjalImages(keyword) 
            const histories = getSearchHistory(keyword);
            this.setState({
                histories,
                searchResults: data
            });
        } catch (error) {
            alert(error.message);
        }
    }

    const getSearchHistory = (keyword) => {
        const histories = [...this.state.histories];

        // 히스토리와 동일한 키워드가 있다면 삭제
        const historyIdx = histories.findIndex(
            (history) => history === keyword
        );
        if (historyIdx > -1) {
            histories.splice(historyIdx, 1);
        }

        histories.push(keyword);

        return histories
    }

    const handleClickHistory = async (keyword) => {
        try {
            const data = await fetchJjalImages(keyword);
            this.setState({
                keyword,
                histories: this.state.histories,
                searchResults: data
            });
        } catch (error) {
            alert(e.message);
        }
    }


    const searchInput = new SearchInput({ 
        root,
        initialState: this.state.keyword,
        onSearch: handleSearch
    });

    const searchHistory = new SearchHistory({
        root,
        initialState: this.state.histories,
        onClickHistory: handleClickHistory
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
        searchHistory.setState(this.state.histories);
        searchResult.setState(this.state.searchResults);
    }
}
