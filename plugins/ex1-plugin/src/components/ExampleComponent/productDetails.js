import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [products, setProducts] = useState([]); // Use a plural name for data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        console.log(products);
        console.log(response.data.products);

      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Product Details!</h1>
      {products.length > 0 && ( // Check if products are available before rendering
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>Id</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Price</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Brand</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{product.id}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{product.title}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{product.price}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{product.brand}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* {products.length === 0 && ( // Display message if no products found
        <p>No products found.</p>
      )} */}
    </div>
  );
}

export default App;
