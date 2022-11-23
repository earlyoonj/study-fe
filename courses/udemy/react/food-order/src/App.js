import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import MainContainer from './components/Layout/MainContainer';

function App() {
    return (
        <CartProvider>
            <Header />
            <MainContainer />
        </CartProvider>
    );
}

export default App;
