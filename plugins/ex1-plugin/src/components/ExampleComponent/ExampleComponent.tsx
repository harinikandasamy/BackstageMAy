
import React from 'react';
import ProductTable from './productDetails.js';
import App from './productDetails.js';

export const ExampleComponent = () => {
  return (
    <div className="App">
      <ProductTable />
    </div>
  );
}

export const ExampleComponent1 = () => {
  return (
    <div className="products">
      <h1>Find the product details</h1>
      <App />
    </div>
  );
}