import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Product({ product }) {
  return (
    <li>
      {product.id}.{product.title}
    </li>
  );
}

export default function App() {
  const [products, setProducts] = useState([]);

  // Function used to all api using fetch method
  async function getProducts() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setProducts(data);
  }

  // Useeffect resposible to fetch products only once when component loaded
  useEffect(function () {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <h2> Products</h2>
      <ul>
        {/* condition ? true : false */}
        {/* condition && true */}

        {products.length > 0 &&
          products.map((product, index) => {
            return <Product product={product} key={index} />;
          })}
      </ul>
    </div>
  );
}
