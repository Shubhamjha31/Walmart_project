import React, { useState, useEffect } from 'react';
import '../styles/trendingProducts.css'; 
const TrendingProducts = () => {
  // Generate random data for demonstration
  const generateRandomProducts = () => {
    const products = [
      "Wireless Earbuds", "Smartwatch X", "Portable Speaker", "Gaming Mouse", "USB-C Hub",
      "Ergonomic Keyboard", "Webcam HD", "External SSD", "Monitor Stand", "Ring Light"
    ];
    const data = [];
    for (let i = 0; i < 5; i++) { // 5 rows of data
      const productName = products[Math.floor(Math.random() * products.length)];
      const salesIncrease = (Math.random() * (25 - 5) + 5).toFixed(1); // 5.0% to 25.0%
      const currentStock = Math.floor(Math.random() * (500 - 50) + 50); // 50 to 500
      data.push({
        id: i,
        name: productName,
        increase: salesIncrease,
        stock: currentStock,
      });
    }
    return data;
  };

  const [trendingData, setTrendingData] = useState([]);
  const [percentageIncrease, setPercentageIncrease] = useState(0);

  useEffect(() => {
    setTrendingData(generateRandomProducts());
    setPercentageIncrease((Math.random() * (15 - 5) + 5).toFixed(1)); // Overall random increase
  }, []);

  return (
    <div className="trending-products-card">
      <div className="trending-header">
        <h2 className="trending-title">Top Trending Products</h2>
        <div className="trending-stats">
          <svg
            className="trending-arrow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
          <span className="trending-percentage">{percentageIncrease}% Up</span>
        </div>
      </div>
      <div className="trending-subtitle">in your warehouse</div>

      <div className="trending-table-container">
        <table className="trending-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Sales Inc.</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {trendingData.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>+{product.increase}%</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingProducts;
