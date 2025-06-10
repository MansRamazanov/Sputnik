import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

const testProducts = [
  {
    title: "Яблоки",
    origin: "Россия",
    price: 19900, 
    currency: "RUB",
    imageUrl: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Бананы",
    origin: "Эквадор",
    price: 1000,
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Клубника",
    origin: "Испания",
    price: 2000,
    currency: "EUR",
    imageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop&q=60"
  }
];

function App() {
  return (
    <div className="app">
      <h1>Тестовое задание Sputnik</h1>
      <div className="products-grid">
        {testProducts.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            origin={product.origin}
            price={product.price}
            currency={product.currency}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App; 