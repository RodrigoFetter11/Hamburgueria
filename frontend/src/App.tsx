import { Header } from './components/Header/Header';
import { CategoryCarrosel } from './components/CategoryCarrossel/CategoryCarrossel';
import { ProductList } from './components/ProductList/ProductList';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
        <Header />
        <CategoryCarrosel />
        <ProductList />
    </CartProvider>
  )
}

export default App