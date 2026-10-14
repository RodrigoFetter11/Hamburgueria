import { useState } from 'react';
import { Header } from './components/Header/Header';
import { CategoryCarrosel } from './components/CategoryCarrossel/CategoryCarrossel';
import { ProductList } from './components/ProductList/ProductList';
import { CartProvider } from './context/CartContext';

function App() {
  const [ selectedCategory, setSelectedCategory ] = useState<number | null>(null);
  
  return (
    <CartProvider>
        <Header />
        <CategoryCarrosel 
          activeCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <ProductList activeCategory={selectedCategory} />
    </CartProvider>
  )
}

export default App